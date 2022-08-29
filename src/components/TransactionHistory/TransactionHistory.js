import React, {useState, useEffect} from "react";
import TransactionService from "../../services/list-transaction-history";
import "./TransactionHistory.css"
import {Tabs, Button} from 'antd';
import {Link} from 'react-router-dom';
import TransactionTable from "../TransactionTable/TransactionTable";

const {TabPane} = Tabs;
const contractAddressByCoin = {
    "INDEXX500": [
        "0xf58e5644a650C0e4db0d6831664CF1Cb6A3B005A",
        "0x94C6156Da5DF99b3A529b47b54C6ff480c1440bb",
        "0x8bA9A63cac81B09509360d0A027dCE14F90F6779",
    ],
    "INDEXXCRYPTO": [
        "0x4C3ED00AadCde2d5CA117f74642031CD7E087918",
        "0x2770f5b92e8190847662717Bc23307B306CB5Afb",
        "0x172aa1665048C95F1cD8586191dE02E84EC69079",
    ],
    "INDEXXUSD+": [
        "0xa18f33e2C63C0A781f6836f9Ae8F5f6517Ce4e90",
        "0x44D37703A37C617b6B824Eb45615aC5304740305",
        "0x7e9948A7d80c5f8e5d78291b74e9DFeAc7f08955",
    ],
}


const TransactionHistory = () => {
    const [currentCoin, setCurrentCoin] = useState("INDEXX500");
    const [currentContract, setCurrentContract] = useState(contractAddressByCoin[currentCoin][0])
    const [isSearching, setIsSearching] = useState(false)

    const [transactions, setTransaction] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTransactions = (contract, intransactions) => {
        setLoading(true)
        TransactionService.getAllTransactions(contract)
            .then((response) => {
                const data = []
                const rawTransactions = response.data.result
                rawTransactions.forEach((txn, index) => {
                    data.push(
                        {
                            key: `${index + 1}`,
                            TxnHash: txn.hash,
                            MethodId: txn.methodId,
                            Block: txn.blockNumber,
                            From: txn.from,
                            To: txn.to,
                            tags: intransactions ? ["OUT"] : ["IN"],
                            Value: txn.value / 1000000000000000000,
                            TxnValue: (txn.gasPrice * txn.gasUsed) / 1000000000000000000,
                        },
                    )
                })

                setTransaction(data)
            })
            .catch((e) => {
                console.log(e);
            }).finally(() => setLoading(false));
    };

    const handleAddressChange = (value) => {
        setCurrentContract(value)
    }


    useEffect(() => {
        getTransactions(currentContract, false);
    }, [currentContract]);

    const handleTabChange = (data) => {
        switch (+data) {
            case 1:
                setCurrentCoin("INDEXX500")
                setCurrentContract(contractAddressByCoin["INDEXX500"][0])
                return
            case 2:
                setCurrentCoin("INDEXXCRYPTO")
                setCurrentContract(contractAddressByCoin["INDEXXCRYPTO"][0])
                return
            case 3:
                setCurrentCoin("INDEXXUSD+")
                setCurrentContract(contractAddressByCoin["INDEXXUSD+"][0])
                return
            default:
                setCurrentCoin("INDEXX500")
                setCurrentContract(contractAddressByCoin["INDEXX500"][0])
        }
    }

    const handleSearch = async (contract) => {
        if (!contract) {
            setIsSearching(false);
            getTransactions(currentContract)
            return
        }
        setIsSearching(true)
        getTransactions(contract, true)
    }

    return (
        <div>
            <div className="nav-box">
                <div className="heading">
                    Transactions
                </div>
                <div className="routing">
                    <Link to="/timeLock">
                        <Button type="primary" shape="round">View Time-Lock</Button>
                    </Link>
                </div>
            </div>
            <div className="card-container">
                <Tabs onChange={handleTabChange} type="card" centered>
                    {Object.keys(contractAddressByCoin).map((key, index) => (
                        <TabPane tab={key} key={index + 1}>
                            <TransactionTable
                                loading={loading}
                                isSearching={isSearching}
                                handleAddressChange={handleAddressChange}
                                contractAddressByCoin={contractAddressByCoin}
                                currentCoin={currentCoin}
                                handleSearch={handleSearch}
                                data={transactions}
                            />
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        </div>
    )

}

export default TransactionHistory;

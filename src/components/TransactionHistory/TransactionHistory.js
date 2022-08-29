import React, {useState, useEffect} from "react";
import TransactionService from "../../services/list-transaction-history";
import styles from "./TransactionHistory.css"

const TransactionHistory: React.FC = () => {
    const [transactions, setTransaction] = useState([]);

    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = () => {
        TransactionService.getAllTransactions("0x0000000000000000000000000000000000001004")
            .then((response: any) => {
                setTransaction(response.data.result);
                console.log(response.data.result);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div>
            <div className="heading">
                Account Page
            </div>


        </div>
    )

}

export default TransactionHistory;

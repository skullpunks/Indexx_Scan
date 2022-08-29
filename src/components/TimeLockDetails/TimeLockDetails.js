import React, {useState} from 'react';
import "./TimeLock.css"
import {Button, Card, Input, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {useWeb3React} from "@web3-react/core";
import {injected} from "../../utils/connectors";
import {isNoEthereumObject} from "../../utils/errors";
import {ethers} from "ethers";
import Web3Utils from "web3-utils"

const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};


const TimeLock = () => {
    const {active, activate, deactivate} = useWeb3React();
    const [walletAddress, setWalletAddress] = useState("")
    const [details, setDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const lockABI = [
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }
            ],
            stateMutability: "nonpayable",
            type: "constructor"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "user",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }
            ],
            name: "InitiateLock",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "user",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }
            ],
            name: "ReleaseLock",
            type: "event"
        },
        {
            inputs: [],
            name: "admin",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_admin",
                    type: "address"
                }
            ],
            name: "changeAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_lockers",
                    type: "address"
                }
            ],
            name: "changeLockers",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address[]",
                    name: "_investor",
                    type: "address[]"
                }
            ],
            name: "changeWithdrawalStatus",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_beneficiary",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }
            ],
            name: "initiateTokenLock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            name: "lockAmount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            name: "lockAmountPerPhase",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "lockers",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            name: "releaseTime",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "releaseTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "token",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            name: "withdrawalStatus",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        }
    ];
    const lockAddress = "0x94C6156Da5DF99b3A529b47b54C6ff480c1440bb";

    async function getData() {
        setIsLoading(true)
        let rpcProvider = new ethers.providers.JsonRpcProvider(
            "https://bsc-dataseed1.binance.org/"
        );
        const spFeed = new ethers.Contract(lockAddress, lockABI, rpcProvider);
        const promise1 = await spFeed.releaseTime(walletAddress)
        const promise2 = await spFeed.lockAmount(walletAddress)
        const promise3 = spFeed.lockAmountPerPhase(walletAddress)

        Promise.all([promise1, promise2, promise3]).then((values) => {
            setDetails({
                nextReleaseDate: new Date(parseInt(values[0]) * 1000).toLocaleDateString("en-US", options),
                installmentAmount: Web3Utils.fromWei(String(values[1]), 'ether'),
                totalAmount: Web3Utils.fromWei(String(values[2]), 'ether')
            })

        }).finally(() => setIsLoading(false));
    }

    const handleConnect = () => {
        if (active) {
            deactivate();
            return;
        }
        activate(injected, (error) => {
            if (isNoEthereumObject(error))
                window.open("https://metamask.io/download.html");
        });
    };


    return (
        <div>
            <div className="nav-box">
                <div className="heading">
                    Time-Lock Details
                </div>
                <div className="routing">
                    <Link to="/transactions">
                        <Button type="primary" shape="round">View Transactions</Button>
                    </Link>
                </div>
            </div>
            <div className="timelock-card-container">
                <Card
                    title="Get Vesting details"
                    style={{width: 600}}
                >
                    <div className="alignCenter">
                        <Button className="connectWalletButton" onClick={handleConnect} type="primary">Connect
                            Wallet</Button>
                    </div>
                    <Input
                        onChange={event => setWalletAddress(event.target.value)}
                        allowClear
                        addonBefore="Wallet Address"
                    />

                    <div className="alignCenter">
                        <Button disabled={!walletAddress}
                                onClick={getData}
                                className="submitButton"
                                type="primary">Submit
                        </Button>
                    </div>


                    {isLoading && (
                        <div className="loadingContainer">
                            <Skeleton.Input active/>
                            <Skeleton.Input active/>
                            <Skeleton.Input active/>
                        </div>
                    )}

                    {details && !isLoading && (
                        <>
                            <Input readOnly style={{marginTop: 20}} value={details.nextReleaseDate}
                                   addonBefore="Next Release Date"/>
                            <Input readOnly style={{marginTop: 20}} value={details.installmentAmount}
                                   addonBefore="Installment Amount"/>
                            <Input readOnly style={{marginTop: 10}} value={details.totalAmount}
                                   addonBefore="Total Lock amount left"/>
                        </>
                    )}
                </Card>
            </div>
        </div>

    )
};

export default TimeLock;

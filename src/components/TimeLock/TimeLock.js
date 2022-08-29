import React, {useState} from 'react';
import "./TimeLock.css"
import {Button, Tabs} from "antd";
import {Link} from "react-router-dom";
import TimeLockDetails from "../TimeLockDetails/TimeLockDetails";

const {TabPane} = Tabs;

const lockAddreesses = {
    "INDEXX500": "0x94C6156Da5DF99b3A529b47b54C6ff480c1440bb",
    "INDEXXCRYPTO": "0x2770f5b92e8190847662717Bc23307B306CB5Afb",
    "INDEXXUSD+": "0x44D37703A37C617b6B824Eb45615aC5304740305",
}



const TimeLock = () => {
    const [currentLockAddress, setCurrentLockAddress] = useState(lockAddreesses["INDEXX500"]);
    const [currentTab, setCurrentTab] = useState("INDEXX500");

    const handleTabChange = (data) => {
        switch (+data) {
            case 1:
                setCurrentLockAddress(lockAddreesses["INDEXX500"])
                setCurrentTab("INDEXX500")
                return
            case 2:
                setCurrentLockAddress(lockAddreesses["INDEXXCRYPTO"])
                setCurrentTab("INDEXXCRYPTO")
                return
            case 3:
                setCurrentLockAddress(lockAddreesses["INDEXXUSD+"])
                setCurrentTab("INDEXXUSD+")
                return
            default:
                setCurrentLockAddress(lockAddreesses["INDEXX500"])
                setCurrentTab("INDEXX500")
        }
    }

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
            <Tabs onChange={handleTabChange} type="card" centered>
                {Object.keys(lockAddreesses).map((key, index) => (
                    <TabPane tab={key} key={index + 1}>
                        <TimeLockDetails
                            lockAddress={currentLockAddress}
                            currentTab={currentTab}
                        />
                    </TabPane>
                ))}
            </Tabs>
        </div>

    )
};

export default TimeLock;

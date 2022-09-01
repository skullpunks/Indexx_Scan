import {Select, Table, Tag} from 'antd';
import React, {useState} from 'react';
import "./TransactionTable.css"
import {Input, Tooltip} from 'antd';
import Index500 from "../../assets/icons/indexx500.gif";
import IndexCrypto from "../../assets/icons/indexcrypto.gif";
import IndexUsd from "../../assets/icons/indexUsd+.gif";

const {Option} = Select;
const {Search} = Input;
const TX_URL = 'https://bscscan.com/tx';
const ADDRESS_URL = 'https://bscscan.com/address';
const BLOCK_URL = 'https://bscscan.com/block/';

const columns = [
    {
        title: 'TxnHash',
        dataIndex: 'TxnHash',
        key: 'TxnHash',
        width: "15%",
        ellipsis: true,
        render: (text) => <Tooltip placement="topLeft" title={text}><a href={`${TX_URL}/${text}`} target="_blank" rel="noopener noreferrer"><b>{text}</b></a></Tooltip>,
    },
    {
        title: 'MethodId',
        dataIndex: 'MethodId',
        key: 'MethodId',
        width: "10%",
    },
    {
        title: 'Block',
        dataIndex: 'Block',
        key: 'Block',
        width: "10%",
        render: (text) => <Tooltip placement="topLeft" title={text}><a href={`${BLOCK_URL}/${text}`} target="_blank" rel="noopener noreferrer"><b>{text}</b></a></Tooltip>,
    },
    {
        title: 'From',
        dataIndex: 'From',
        key: 'From',
        width: "15%",
        ellipsis: true,
        render: (text) => <Tooltip placement="topLeft" title={text}><a href={`${ADDRESS_URL}/${text}`} target="_blank" rel="noopener noreferrer"><b>{text}</b></a></Tooltip>,
    },
    {
        title: '',
        dataIndex: 'tags',
        key: 'tags',
        width: "5%",
        render: (_, { tags }) => tags.map(tag => <Tag color={tag === "IN" ? "green" : "yellow"} key={tag}>{tag}</Tag>)
    },
    {
        title: 'To',
        dataIndex: 'To',
        key: 'To',
        width: "15%",
        ellipsis: true,
    },
    {
        title: 'Value',
        dataIndex: 'Value',
        key: 'Value',
        width: "10%",
        render: (text) => <span>{text} BNB</span>,
    },
    {
        title: 'TxnValue',
        dataIndex: 'TxnValue',
        key: 'TxnValue',
        width: '10%',
    },
];

const contractsKeys = [
    "Indexx 500 Token Contract",
    "Vesting Contract",
    "PRE-ICO Contract"
]

const TransactionTable = ({
    loading,
     data,
     handleAddressChange,
     contractAddressByCoin,
     currentCoin,
     handleSearch,
     isSearching

}) => {

    const getCoinIcon = () => {
        switch (currentCoin) {
            case "INDEXX500":
                return Index500
            case "INDEXXCRYPTO":
                return IndexCrypto
            case "INDEXXUSD+":
                return IndexUsd
            default:
                return Index500
        }
    }

    const getCoinIconClass = () => {
        switch (currentCoin) {
            case "INDEXX500":
                return "coinIcon"
            case "INDEXXCRYPTO":
                return "coinIcon"
            case "INDEXXUSD+":
                return "UsdcoinIcon"
            default:
                return "coinIcon"
        }
    }

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });

    const handleTableChange = (newPagination) => {
        setPagination(newPagination)
    };

    return (
        <>
            <div className="actions">
                <div className="selectContract">
                    <div className="text">Contact:</div>
                    <Select
                        disabled={isSearching}
                        onChange={handleAddressChange}
                        defaultValue={contractAddressByCoin[currentCoin][0]}>
                        {contractAddressByCoin[currentCoin].map((option, index) => (
                            <Option key={option} value={option}>{contractsKeys[index]}</Option>
                        ))}
                    </Select>
                </div>

                <div>
                    <img src={getCoinIcon()} alt="logo" className={getCoinIconClass()} />
                </div>
                <div>
                    <Search allowClear placeholder="Search by Address" onSearch={handleSearch} enterButton/>
                </div>
            </div>
            <Table
                pagination={pagination}
                scroll={{ y: 240 }}
                loading={loading}
                columns={columns}
                onChange={handleTableChange}
                dataSource={data}
            />
        </>

    )
};

export default TransactionTable;

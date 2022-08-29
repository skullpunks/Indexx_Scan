import http from "../http-common";
import Transaction from "../Models/Transaction";

const API_TOKEN = "CMPDQPUCFCFVUAFN7DZPXKGSD7JPDJTNTV"
const TRANSACTION_URL = "?module=account&action=txlist&sort=asc"

const getAllTransactions = (address: any) => {
    let URL = TRANSACTION_URL + `&apikey=${API_TOKEN}`
    URL = URL + `&address=${address}`
    return http.get<Array<Transaction>>(`${URL}`);
};


const TransactionService = { getAllTransactions };

export default TransactionService;

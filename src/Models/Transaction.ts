export default interface Transaction {
    blockNumber: number;
    timeStamp: number;
    hash: string;
    from: string;
    to: string;
    value: number;
    contractAddress: string;
    input: string;
    type: string;
    gas: number;
    gasUsed: number;
    traceId: string;
    isError: number;
    errCode: string;
}

import dotenv from "dotenv";
dotenv.config();
export const RPC_ENDPOINT=process.env.RPC_ENDPOINT;
export const RPC_WEBSOCKET_ENDPOINT=process.env.RPC_WEBSOCKET_ENDPOINT;
export const JUP_AGGREGATOR=process.env.JUP_AGGREGATOR;
export const TARGET_WALLET=process.env.TARGET_WALLET;
export const MAXIMUM_BUY_AMOUNT=process.env.MAXIMUM_BUY_AMOUNT;
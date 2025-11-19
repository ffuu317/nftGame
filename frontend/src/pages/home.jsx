import { ConnectButton } from '@rainbow-me/rainbowkit';
import  "./home.css"
import React from 'react';
import { useAccount, useAccountEffect } from "wagmi";
import { config } from "../config";
import { message } from "antd"

const MemoizedButton = React.memo(ConnectButton);
export default function Home(){
    const Account = useAccount();
    let Address = Account.address;
    useAccountEffect({
        onConnect(Address){
            message.success(`Connected!`,2);
        },
        onDisconnect(Address){
             message.success(`Disconnected!`,2);
        }
     })
    return (<>
    <button >这是address按钮</button>
    <button >这是ens按钮</button>
    <>{Address}</>
    <MemoizedButton accountStatus="avatar" label="连接钱包"/>
   </>);
}
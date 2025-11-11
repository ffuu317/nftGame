import { useState, useEffect } from 'react'
import {createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import './App.css'

const erc20Abi = [
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [{ "name": "account", "type": "address" }],
    "outputs": [{ "name": "", "type": "uint256" }]
  }
];

function App() {
  const [blockNumber,setBlockNumber] = useState<bigint | null>(null);
  

  useEffect(()=>{
    const client = createPublicClient({
      chain:mainnet,
      transport:http() 
    })

  client.getBlockNumber()
    .then((num)=>{setBlockNumber(num)})
  
},[])



  return (
    <>
    <h1>viem demo</h1>
    <p>current block number:{blockNumber?.toString()}</p>
</>
  )
}

export default App

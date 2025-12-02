import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {  mainnet,sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'nftGAME',
  projectId: '18e0c03a63806b7cd58530353f7b951a',
  chains: [sepolia,mainnet,],
  ssr: false,
});
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiProvider } from 'wagmi';
import {QueryClientProvider,  QueryClient,} from "@tanstack/react-query";
import {RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import { config } from "./config"


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider modalSize="compact">
        <App />
      </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)

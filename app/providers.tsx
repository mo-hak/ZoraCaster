// In app/providers.tsx
"use client";

import * as React from "react";
import { useEffect } from 'react'; // Import useEffect
import { sdk } from '@farcaster/miniapp-sdk'; // Import the Farcaster SDK

// Your existing imports
import {
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  argentWallet,
  trustWallet,
  ledgerWallet,
  rainbowWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;
coinbaseWallet.preference = "smartWalletOnly";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended Wallet",
      wallets: [coinbaseWallet],
    },
    {
      groupName: "Other",
      wallets: [
        rainbowWallet,
        metaMaskWallet,
        argentWallet,
        trustWallet,
        ledgerWallet,
      ],
    },
  ],
  {
    appName: "0x Swap Demo App",
    projectId,
  }
);

const config = createConfig({
  chains: [base],
  multiInjectedProviderDiscovery: false,
  connectors,
  ssr: true,
  transports: { [base.id]: http() },
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  
  // --- START: Farcaster SDK Initialization ---
  // This hook runs on the client after the app loads.
  useEffect(() => {
    // This tells the Farcaster client that your app is ready to be displayed,
    // and it can hide the loading splash screen.
    sdk.actions.ready();
  }, []);
  // --- END: Farcaster SDK Initialization ---

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>{" "}
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
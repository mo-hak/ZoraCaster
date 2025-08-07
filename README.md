# ZoraCaster Demo App (Next.js App to swap ZORA)

This project functions as a Farcaster Mini App, allowing users to swap tokens on Base Mainnet directly from a rich embed in their social feed. It leverages the 0x API to perform swaps, with a user-friendly interface powered by RainbowKit.

This demo app covers best practices for how to use the 0x Swap API's price endpoint for indicative pricing and the quote endpoint for firm quotes.

> [!WARNING]  
> This is a demo, and is not ready for production use. The code has not been audited and does not account for all error handling. Use at your own risk.

## Tech Stack
Framework: Next.js (App Router)

Language: TypeScript

Blockchain Interaction: Wagmi & Viem

Wallet Connector: RainbowKit

DEX Aggregator: 0x Protocol API

Farcaster Integration: @farcaster/miniapp-sdk

Styling: Tailwind CSS

Deployment: Vercel
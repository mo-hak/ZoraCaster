import { Address } from "viem";

export const PERMIT2_ADDRESS = "0x000000000022D473030F116dDEE9F6B43aC78BA3";

export const MAGIC_CALLDATA_STRING = "f".repeat(130); // used when signing the eip712 message

export const AFFILIATE_FEE = 100; // 1% affiliate fee. Denoted in Bps.
export const FEE_RECIPIENT = "0x6Db88e6c4A6303432D71E40ef502Eb525cB37a24"; // The ETH address that should receive affiliate fees

export const MAINNET_EXCHANGE_PROXY =
  "0xdef1c0ded9bec7f1a1670819833240f027b25eff";

export const BASE_EXCHANGE_PROXY =
  "0xdef1c0ded9bec7f1a1670819833240f027b25eff";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const MAINNET_TOKENS: Token[] = [
  {
    chainId: 8453,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x4200000000000000000000000000000000000006",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/weth.svg",
  },
  {
    chainId: 8453,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  {
    chainId: 8453,
    name: "ZORA Coin",
    symbol: "ZORA",
    decimals: 18,
    address: "0x1111111111166b7fe7bd91427724b487980afc69",
    logoURI:
      "/Zorb.svg",
  },
];

export const MAINNET_TOKENS_BY_SYMBOL: Record<string, Token> = {
  weth:  {
    chainId: 8453,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x4200000000000000000000000000000000000006",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/weth.svg",
  },
  usdc: {
    chainId: 8453,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  zora: {
    chainId: 8453,
    name: "ZORA Coin",
    symbol: "ZORA",
    decimals: 18,
    address: "0x1111111111166b7fe7bd91427724b487980afc69",
    logoURI:
      "/Zorb.svg",
  },
};

export const MAINNET_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0x4200000000000000000000000000000000000006": {
    chainId: 8453,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x4200000000000000000000000000000000000006",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/weth.svg",
  },
  "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": {
    chainId: 8453,
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  },
  "0x1111111111166b7fe7bd91427724b487980afc69": {
    chainId: 8453,
    name: "ZORA Coin",
    symbol: "ZORA",
    decimals: 18,
    address: "0x1111111111166b7fe7bd91427724b487980afc69",
    logoURI:
      "/Zorb.svg",
  },
};

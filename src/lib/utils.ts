import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { CandyPay } from "@candypay/checkout-sdk";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const candypay = new CandyPay({
  api_keys: {
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
    public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY!,
  },
  network: "devnet", 
  config: {
    collect_shipping_address: false,
  },
});

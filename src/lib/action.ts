"use server";

import { candypay } from "./utils";

export const generateSession = async () => {
  const res = await candypay.session.create({
    success_url: process.env.STATIC_URL! + "/success",
    cancel_url: process.env.STATIC_URL!,
    items: [
      {
        name: "Test Item",
        quantity: 1,
        price: 100,
        image: "https://picsum.photos/200",
      },
    ],
  });

  return res.payment_url;
};

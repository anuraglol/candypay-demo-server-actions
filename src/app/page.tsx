"use client";

import { Button } from "@/components/ui/button";
import { generateSession } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { Loader2 } from "lucide-react";

export default function Home() {
  const router = useRouter();

  let [isPending, startTransition] = useTransition();

  return (
    <main className="flex min-h-screen flex-col w-full items-center justify-center">
      <Button
        onClick={async () => {
          startTransition(() => {
            generateSession().then((res) => {
              router.push(res);
            });
          });
        }}
        className="w-32"
      >
        {isPending ? <Loader2 className="animate-spin h-5 w-5" /> : "Checkout"}
      </Button>
    </main>
  );
}

"use client";


import Button from "@/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInWithCodeQR() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      variant="primary"
      text="Sign in with CodeQR"
      className="w-fit rounded-full"
      loading={isLoading}
      onClick={() => {
        setIsLoading(true);
        router.push("/api/oauth/authorize");
      }}
    />
  );
}

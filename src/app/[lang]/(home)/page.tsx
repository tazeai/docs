"use client";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

import React from "react";
export default function HomePage() {
  const { lang } = useParams();

  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <span>
        <Button>Click me</Button>
      </span>
    </main>
  );
}

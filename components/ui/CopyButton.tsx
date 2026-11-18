"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
  label: string;
  className?: string;
}

export default function CopyButton({text, label, className}: CopyButtonProps) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2000);
  };

  return (
    <button type="button" onClick={copy} className={`max-w-full break-all ${className ?? ""}`}>
      {state === "copied" ? "Copied" : state === "failed" ? text : label}
    </button>
  );
}
"use client";

import { useState } from "react";
import { contact } from "@/config/contact";

const label = "flex flex-col gap-1 font-mono text-[clamp(12px,1.5vw,14px)] text-(--mute)";
const field = "rounded-none border-0 border-b border-(--line) bg-transparent py-0.5 font-sans text-[clamp(15px,2.5vw,17px)] text-(--text) outline-none transition-colors focus:border-(--cyan)";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    const subject = encodeURIComponent(`Message from portfolio: ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-(--line) bg-(--panel) p-4 sm:p-6">
      <label className={label}>
        name
        <input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
      </label>
      <label className={label}>
        email
        <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
      </label>
      <label className={label}>
        message
        <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={`${field} min-h-28.5 max-h-45 resize-y`} />
      </label>
      <button
        type="button"
        onClick={send}
        className="cursor-pointer w-full sm:w-auto sm:self-start rounded-md border border-(--cyan) bg-(--cyan) py-[clamp(6px,2.5vw,10px)] px-5 md:py-2.5 font-mono text-[clamp(12px,3vw,14px)] text-(--bg) transition hover:brightness-110"
      >
        Send message
      </button>
    </div>
  );
}
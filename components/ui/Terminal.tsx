"use client";

import { CM } from "@/config/cmd";
import { useEffect, useState } from "react";

export function Terminal() {
  const [text, setText] = useState('');
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) { setText(CM[0][0] + '\n' + CM[0][1]); return; }
    let i = 0, c = 0, ph = 0, id: ReturnType<typeof setTimeout>;
    const tick = () => {
      const s = CM[i];
      if (ph === 0) { c++; setText(s[0].slice(0, c)); if (c < s[0].length) { id = setTimeout(tick, 70); return; } ph = 1; id = setTimeout(tick, 350); return; }
      if (ph === 1) { setText(s[0] + '\n' + s[1]); ph = 2; id = setTimeout(tick, 2600); return; }
      i = (i + 1) % CM.length; c = 0; ph = 0; tick();
    };
    tick();
    return () => clearTimeout(id);
  }, []);
  
  return (
    <div className="absolute bottom-4 left-0 right-0 mx-3.5 min-h-18 box-border flex border border-zinc-700 bg-zinc-800 p-2">
      <pre className="text-[12px] text-[#4ade80] whitespace-pre-wrap blinking">
        {text}
      </pre>
    </div>
  );
}
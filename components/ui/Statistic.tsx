import { ReactNode } from "react";

type StatisticProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

export function Statistic({ icon, title, value }: StatisticProps) {
  return (
    <div className="flex flex-row gap-4 items-center bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1.5 min-w-75">
      <div className="text-[#4ade80] text-[18px] bg-zinc-700 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-zinc-500 text-[12px]">{title}</p>
        <h1 className="text-gray-100 text-[16px] font-bold">{value}</h1>
      </div>
    </div>
  )
}
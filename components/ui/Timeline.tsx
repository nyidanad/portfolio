export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative before:absolute before:top-1.25 before:-left-7 before:size-2 before:rounded-full before:bg-(--cyan) before:shadow-[0_0_0_3px_var(--panel)]">
      {children}
    </li>
  );
}
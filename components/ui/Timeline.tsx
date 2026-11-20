import "./Timeline.component.css";

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <li className="timeline__item">
      <span aria-hidden="true" className="timeline__dot" />
      {children}
    </li>
  );
}
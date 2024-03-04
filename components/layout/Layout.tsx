import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-slate-900">{props.children}</div>
  );
}

import "./SourceNote.css";
import { ExternalLink } from "lucide-react";

export function SourceNote({ children, href }: { children: React.ReactNode; href: string }) {
  return <a className="source-note" href={href} target="_blank" rel="noreferrer">Source: {children} <ExternalLink size={12} /></a>;
}

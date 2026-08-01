import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ArrowLink({ to, children, light = false }: { to: string; children: React.ReactNode; light?: boolean }) {
  return <Link to={to} className={`arrow-link ${light ? "arrow-link--light" : ""}`}>{children}<ArrowRight size={16} /></Link>;
}

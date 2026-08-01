import "./SiteLayout.css";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollTop } from "@/hooks/useScrollTop";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isOpportunityRoute = pathname === "/home-ownership-opportunities" || pathname.startsWith("/opportunities/");
  useScrollTop();
  return <><Header /><main>{children}</main><Footer />{!isOpportunityRoute && <Link className="persistent-cta" to="/contact"><span>Start a conversation</span><ArrowRight size={16} /></Link>}</>;
}

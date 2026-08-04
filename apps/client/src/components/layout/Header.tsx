import "./Header.css";
import { useEffect, useState } from "react";
import { NavLink, useLocation, type NavLinkRenderProps } from "react-router-dom";
import { ChevronRight, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "@/data/nav";
import { BrandMark } from "./BrandMark";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }: NavLinkRenderProps) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }: NavLinkRenderProps) => (isActive ? "nav-link active" : "nav-link")}
          >
            Contact
          </NavLink>
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="button button--small button--primary">Speak to an advisor <ArrowRight size={15} /></Link>
          <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          {[...navItems, { label: "Contact", to: "/contact" }].map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>{item.label}<ChevronRight size={18} /></NavLink>
          ))}
          <Link to="/contact" className="button button--primary">Choose why you’re here <ArrowRight size={16} /></Link>
        </div>
      )}
    </header>
  );
}

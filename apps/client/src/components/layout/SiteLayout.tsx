import { useScrollTop } from "@/hooks/useScrollTop";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useScrollTop();
  return <><Header /><main>{children}</main><Footer /></>;
}

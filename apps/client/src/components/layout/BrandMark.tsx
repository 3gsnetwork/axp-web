import "./BrandMark.css";
import { Link } from "react-router-dom";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className={`brand-mark ${inverse ? "brand-mark--inverse" : ""}`} aria-label="AXP Africa home">
      <img src={inverse ? "/images/axp_logo_reversed.png" : "/images/axp_logo_cropped.png"} alt="AXP Africa Limited" />
    </Link>
  );
}

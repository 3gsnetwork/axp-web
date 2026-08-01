import "./OfficeInfo.css";
import { Globe2, Mail, ShieldCheck } from "lucide-react";

export function OfficeInfo() {
  return (
    <section className="section contact-office section--alabaster">
      <div className="shell contact-office-grid">
        <div><Mail /><h3>General enquiries</h3><p>Official contact details have not yet been supplied for this private website version.</p></div>
        <div><Globe2 /><h3>Pan-African outlook</h3><p>AXP is an Africa-focused brand; opportunity concepts may use Nigerian examples.</p></div>
        <div><ShieldCheck /><h3>Responsible contact</h3><p>Future forms should collect only the information needed to respond appropriately.</p></div>
      </div>
    </section>
  );
}

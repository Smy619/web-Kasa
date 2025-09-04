import { useState } from "react";

import arrowTop from "../../assets/arrow-top.svg";

export default function Collapse({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <button
        type="button"
        className={`collapse-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="btn-name">{title}</span>
        <img src={arrowTop} alt="arrowtop" className={`arrow-icon ${open ? "rotated" : ""}`}/>
      </button>
      {open && <div className="collapse-panel">{children}</div>}
    </div>
  );
}

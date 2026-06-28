import React, { useEffect } from "react";
import "../styles/BizToast.scss";

const BizToast = ({ message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="biz-toast" role="alert">
      <div className="biz-toast__icon">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="biz-toast__msg">{message}</span>
      <button className="biz-toast__close" onClick={onClose} aria-label="Dismiss">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
          stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="biz-toast__bar" />
    </div>
  );
};

export default BizToast;

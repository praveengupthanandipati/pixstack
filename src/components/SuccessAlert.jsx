import React, { useEffect } from "react";
import "../styles/SuccessAlert.scss";

const SuccessAlert = ({ message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="success-alert" role="alert">
      <div className="success-alert__inner">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>{message}</span>
        <button className="success-alert__close" onClick={onClose} aria-label="Dismiss">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className="success-alert__progress" />
    </div>
  );
};

export default SuccessAlert;

import React from "react";
import "../styles/FormErrorBanner.scss";

const FormErrorBanner = ({ errors }) => {
  const count = Object.values(errors || {}).filter(Boolean).length;
  if (!count) return null;

  return (
    <div className="form-err-banner" role="alert">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <span>
        {count === 1
          ? "Please fix 1 error highlighted below before continuing."
          : `Please fix ${count} errors highlighted below before continuing.`}
      </span>
    </div>
  );
};

export default FormErrorBanner;

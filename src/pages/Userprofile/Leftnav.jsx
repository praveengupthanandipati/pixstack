import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/Userprofile.scss";

const NAV_ITEMS = [
  {
    key: "profile",
    label: "My Profile",
    path: "/profile",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    key: "request",
    label: "Post your Request",
    path: "/post-request",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    key: "favourites",
    label: "Your Favourites",
    path: "/favourite-profiles",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },  
];

const Leftnav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="user-leftnav">
      <div className="user-leftnav__header">
        <p className="user-leftnav__heading">My Account</p>
      </div>

      <nav className="user-leftnav__nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            className={`user-leftnav__item${pathname === item.path ? " is-active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <span className="user-leftnav__icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="user-leftnav__footer">
        <button
          className="user-leftnav__item"
          onClick={() => {
            localStorage.removeItem("pixstack_user");
            navigate("/");
          }}
        >
          <span className="user-leftnav__icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Leftnav;

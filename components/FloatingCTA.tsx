"use client";

import React from "react";

interface FloatingCTAProps {
  onOpenEnquiry: () => void;
}

export default function FloatingCTA({ onOpenEnquiry }: FloatingCTAProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "22px",
        right: "22px",
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Floating Action Button */}
      <button
        onClick={onOpenEnquiry}
        aria-label="Open Wholesale Enquiry"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          backgroundColor: "#9E6F1B",
          color: "#FFFFFF",
          fontFamily: "var(--font-inter)",
          fontSize: "13px",
          fontWeight: 600,
          padding: "13px 22px",
          borderRadius: "9999px",
          cursor: "pointer",
          boxShadow: "0 8px 26px rgba(158, 111, 27, 0.36)",
          transition: "all 0.25s ease",
          letterSpacing: "0.01em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#B88528";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#9E6F1B";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="floating-text">Wholesale Enquiry</span>
      </button>

      <style jsx>{`
        @media (max-width: 480px) {
          .floating-text {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}

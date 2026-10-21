"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelectModal() {
  const { showPrompt, setLanguage, setShowPrompt } = useLanguage();

  if (!showPrompt) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(12px)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          padding: "32px 28px",
          maxWidth: "440px",
          width: "100%",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.12)",
          textAlign: "center",
          position: "relative",
        }}
      >
        <span
          className="monochrome-tag"
          style={{ marginBottom: "14px" }}
        >
          Language / மொழி
        </span>

        <h3
          className="font-geist-thin"
          style={{
            fontSize: "26px",
            color: "#141612",
            lineHeight: 1.25,
            marginBottom: "8px",
          }}
        >
          Welcome to VS Organic
        </h3>

        <p
          className="font-inter"
          style={{
            fontSize: "13.5px",
            color: "#555750",
            marginBottom: "24px",
            lineHeight: 1.6,
          }}
        >
          Select your preferred language
          <br />
          உங்கள் விருப்ப மொழியைத் தேர்ந்தெடுக்கவும்
        </p>

        {/* Language Selection Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <button
            onClick={() => setLanguage("ta")}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 12px",
              backgroundColor: "var(--bg-surface-1)",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-surface-2)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-surface-1)")}
          >
            <span
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#141612",
                marginBottom: "4px",
                fontFamily: "var(--font-inter)",
              }}
            >
              தமிழ்
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "#9E6F1B",
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
              }}
            >
              Tamil Edition
            </span>
          </button>

          <button
            onClick={() => setLanguage("en")}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 12px",
              backgroundColor: "var(--bg-surface-1)",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-surface-2)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-surface-1)")}
          >
            <span
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#141612",
                marginBottom: "4px",
                fontFamily: "var(--font-inter)",
              }}
            >
              English
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "#9E6F1B",
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
              }}
            >
              Global Edition
            </span>
          </button>
        </div>

        <button
          onClick={() => setShowPrompt(false)}
          style={{
            background: "transparent",
            color: "#7E8079",
            fontSize: "12px",
            fontFamily: "var(--font-inter)",
            cursor: "pointer",
            padding: "4px 8px",
          }}
        >
          Continue with current / தொடரவும்
        </button>
      </div>
    </div>
  );
}

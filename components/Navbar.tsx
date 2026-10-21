"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#FFFFFF",
        paddingTop: "14px",
        paddingBottom: "14px",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        className="site-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
        }}
      >
        {/* Brand Wordmark */}
        <a
          href="#"
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            className="font-geist-thin"
            style={{
              fontSize: "clamp(18px, 3.8vw, 22px)",
              letterSpacing: "0.05em",
              color: "#141612",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            {t.brandName}
          </span>
          <span
            className="font-inter"
            style={{
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "#9E6F1B",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {t.brandSubtitle}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "24px",
          }}
          className="desktop-nav"
        >
          <a
            href="#products"
            style={{
              color: "#555750",
              textDecoration: "none",
              fontSize: "13px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#141612")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555750")}
          >
            {t.navProducts}
          </a>
          <a
            href="#process"
            style={{
              color: "#555750",
              textDecoration: "none",
              fontSize: "13px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#141612")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555750")}
          >
            {t.navProcess}
          </a>
          <a
            href="#calculator"
            style={{
              color: "#555750",
              textDecoration: "none",
              fontSize: "13px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#141612")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555750")}
          >
            {t.navCalculator}
          </a>
          <a
            href="#packaging"
            style={{
              color: "#555750",
              textDecoration: "none",
              fontSize: "13px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#141612")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555750")}
          >
            {t.navPackaging}
          </a>
          <a
            href="#branches"
            style={{
              color: "#555750",
              textDecoration: "none",
              fontSize: "13px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#141612")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555750")}
          >
            {t.navBranches}
          </a>
          <a
            href="#about"
            style={{
              color: "#555750",
              textDecoration: "none",
              fontSize: "13px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#141612")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555750")}
          >
            {t.navAbout}
          </a>
        </nav>

        {/* Right CTA & Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          {/* Language Switch Button */}
          <button
            onClick={() => setLanguage(language === "en" ? "ta" : "en")}
            className="lang-toggle-btn"
            title="Switch Language / மொழியை மாற்றவும்"
            aria-label="Switch Language"
          >
            <span>{language === "en" ? "தமிழ்" : "English"}</span>
          </button>

          {/* Desktop Direct Phone */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "8px",
              fontSize: "12.5px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
            }}
            className="desktop-contact"
          >
            <a
              href="tel:9150766377"
              style={{
                color: "#141612",
                textDecoration: "none",
              }}
            >
              9150766377
            </a>
            <span style={{ color: "#CCC8BE" }}>/</span>
            <a
              href="tel:9655336376"
              style={{
                color: "#141612",
                textDecoration: "none",
              }}
            >
              9655336376
            </a>
          </div>

          {/* Navbar CTA Button */}
          <button
            onClick={() => onOpenEnquiry()}
            className="btn-primary"
            style={{
              fontSize: "12px",
              padding: "8px 16px",
              whiteSpace: "nowrap",
            }}
          >
            {t.navQuoteCTA}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "transparent",
              color: "#141612",
              cursor: "pointer",
              padding: "4px",
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "16px 20px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "#141612",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "var(--font-inter)",
              padding: "6px 0",
            }}
          >
            {t.navProducts}
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "#141612",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "var(--font-inter)",
              padding: "6px 0",
            }}
          >
            {t.navProcess}
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "#141612",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "var(--font-inter)",
              padding: "6px 0",
            }}
          >
            {t.navCalculator}
          </a>
          <a
            href="#packaging"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "#141612",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "var(--font-inter)",
              padding: "6px 0",
            }}
          >
            {t.navPackaging}
          </a>
          <a
            href="#branches"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "#141612",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "var(--font-inter)",
              padding: "6px 0",
            }}
          >
            {t.navBranches}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "#141612",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "var(--font-inter)",
              padding: "6px 0",
            }}
          >
            {t.navAbout}
          </a>

          <div
            style={{
              paddingTop: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <span
              style={{
                fontSize: "10.5px",
                color: "#7E8079",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {t.navDirectLines}
            </span>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="tel:9150766377"
                style={{
                  color: "#9E6F1B",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                9150766377
              </a>
              <a
                href="tel:9655336376"
                style={{
                  color: "#9E6F1B",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                9655336376
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-contact {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 959px) {
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}

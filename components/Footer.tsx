"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Footer({ onOpenEnquiry }: FooterProps) {
  const { t, language } = useLanguage();

  const isTa = language === "ta";

  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "70px",
        paddingBottom: "50px",
      }}
    >
      <div className="site-container">
        {/* Main Footer Block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "36px",
            marginBottom: "50px",
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: "320px" }}>
            <span
              className="font-geist-thin"
              style={{
                fontSize: "24px",
                letterSpacing: "0.06em",
                color: "#141612",
                display: "block",
                marginBottom: "2px",
                textTransform: "uppercase",
              }}
            >
              {t.brandName}
            </span>
            <span
              className="font-inter"
              style={{
                fontSize: "10.5px",
                color: "#9E6F1B",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
                display: "block",
                marginBottom: "14px",
              }}
            >
              {t.brandSubtitle}
            </span>

            <p
              className="font-inter"
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#555750",
                marginBottom: "16px",
              }}
            >
              {t.heritageStoryShort}
            </p>

            <span
              className="font-geist-light"
              style={{
                fontSize: "13.5px",
                color: "#9E6F1B",
                fontWeight: 500,
              }}
            >
              {t.brandTagline}
            </span>
          </div>

          {/* Wholesale Products */}
          <div>
            <span
              className="font-inter"
              style={{
                fontSize: "11.5px",
                color: "#141612",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                display: "block",
                marginBottom: "16px",
              }}
            >
              {t.footerProducts}
            </span>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "#555750" }}>
                {isTa ? "நிலக்கடலை மரச்செக்கு எண்ணெய் (Groundnut Oil)" : "Groundnut Oil (Marachekku)"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "எள் மரச்செக்கு நல்லெண்ணெய் (Sesame Oil)" : "Sesame Oil (Gingelly)"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "தேங்காய் மரச்செக்கு எண்ணெய் (Coconut Oil)" : "Coconut Oil (Sulphur-Free)"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "தூய பசும் நெய் (Cow Ghee)" : "Pure Cow Ghee (Pasu Nei)"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "நாட்டு சர்க்கரை (Jaggery Powder)" : "Jaggery Powder (Nattu Sakkarai)"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "பாரம்பரிய அச்சு வெல்லம் (Jaggery Blocks)" : "Traditional Jaggery (Achu)"}
              </span>
            </div>
          </div>

          {/* Sizes & Formats */}
          <div>
            <span
              className="font-inter"
              style={{
                fontSize: "11.5px",
                color: "#141612",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                display: "block",
                marginBottom: "16px",
              }}
            >
              {t.footerPackaging}
            </span>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "#555750" }}>
                {isTa ? "அரை லிட்டர் (500 மிலி) பாட்டில்" : "Half Litre (500ml) Bottle"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "1 லிட்டர் பாட்டில்" : "1 Litre Bottle"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "5 லிட்டர் கேன்" : "5 Litre Canister"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "15 கிலோ / 16 லிட்டர் வணிக டின்" : "15 kg / 16L Wholesale Tin"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "சூப்பர் மார்க்கெட் மொத்த விநியோகம்" : "Supermarket Wholesale Supply"}
              </span>
              <span style={{ color: "#555750" }}>
                {isTa ? "10 பிராந்திய கிளைகள்" : "10 Regional Branches"}
              </span>
            </div>
          </div>

          {/* Contact Lines */}
          <div>
            <span
              className="font-inter"
              style={{
                fontSize: "11.5px",
                color: "#141612",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                display: "block",
                marginBottom: "16px",
              }}
            >
              {t.footerContacts}
            </span>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontFamily: "var(--font-inter)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "#7E8079",
                    display: "block",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {isTa ? "முதன்மை எண்" : "Primary Line"}
                </span>
                <a
                  href="tel:9150766377"
                  style={{
                    color: "#141612",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  9150766377
                </a>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "#7E8079",
                    display: "block",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {isTa ? "இரண்டாம் எண்" : "Secondary Line"}
                </span>
                <a
                  href="tel:9655336376"
                  style={{
                    color: "#141612",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  9655336376
                </a>
              </div>

              <div style={{ marginTop: "6px" }}>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="btn-primary"
                  style={{
                    fontSize: "12px",
                    padding: "9px 18px",
                  }}
                >
                  {t.navQuoteCTA}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Spaced with vertical margin, zero divider lines */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "32px",
          }}
        >
          <span
            className="font-inter"
            style={{
              fontSize: "12px",
              color: "#7E8079",
            }}
          >
            © {new Date().getFullYear()} {t.footerRights}
          </span>

          <div
            style={{
              display: "flex",
              gap: "20px",
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              color: "#7E8079",
            }}
          >
            <span>{t.footerTrust}</span>
            <span>{t.footerPrices}</span>
            <span>{t.footerSupply}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

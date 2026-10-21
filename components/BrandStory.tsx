"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function BrandStory() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-spacing" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "36px",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Narrative Column */}
          <div>
            <div style={{ marginBottom: "14px" }}>
              <span className="monochrome-tag">{t.aboutTag}</span>
            </div>

            <h2
              className="font-geist-thin"
              style={{
                fontSize: "clamp(30px, 4.2vw, 48px)",
                color: "#141612",
                lineHeight: 1.15,
                marginBottom: "18px",
              }}
            >
              {t.aboutHeading}
            </h2>

            <div
              className="font-inter"
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#555750",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
              <p>{t.aboutP4}</p>
            </div>

            {/* Tagline Callout */}
            <div
              style={{
                marginTop: "22px",
                backgroundColor: "var(--bg-surface-1)",
                padding: "18px 20px",
                borderRadius: "var(--radius-md)",
              }}
            >
              <span
                className="font-inter"
                style={{
                  fontSize: "10.5px",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {t.aboutMottoLabel}
              </span>
              <p
                className="font-geist-light"
                style={{
                  fontSize: "18px",
                  color: "#141612",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                {t.aboutMottoText}
              </p>
            </div>
          </div>

          {/* Pillars Cards Side */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "100%",
            }}
          >
            <div
              className="surface-card"
              style={{
                padding: "20px 18px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  color: "#9E6F1B",
                  fontFamily: "var(--font-inter)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {t.aboutPillar1Tag}
              </span>
              <h3
                className="font-geist-thin"
                style={{
                  fontSize: "22px",
                  color: "#141612",
                  marginBottom: "4px",
                }}
              >
                {t.aboutPillar1Title}
              </h3>
              <p
                className="font-inter"
                style={{
                  fontSize: "12.5px",
                  color: "#555750",
                  lineHeight: 1.55,
                }}
              >
                {t.aboutPillar1Desc}
              </p>
            </div>

            <div
              className="surface-card"
              style={{
                padding: "20px 18px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  color: "#9E6F1B",
                  fontFamily: "var(--font-inter)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {t.aboutPillar2Tag}
              </span>
              <h3
                className="font-geist-thin"
                style={{
                  fontSize: "22px",
                  color: "#141612",
                  marginBottom: "4px",
                }}
              >
                {t.aboutPillar2Title}
              </h3>
              <p
                className="font-inter"
                style={{
                  fontSize: "12.5px",
                  color: "#555750",
                  lineHeight: 1.55,
                }}
              >
                {t.aboutPillar2Desc}
              </p>
            </div>

            <div
              className="surface-card"
              style={{
                padding: "20px 18px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  color: "#9E6F1B",
                  fontFamily: "var(--font-inter)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {t.aboutPillar3Tag}
              </span>
              <h3
                className="font-geist-thin"
                style={{
                  fontSize: "22px",
                  color: "#141612",
                  marginBottom: "4px",
                }}
              >
                {t.aboutPillar3Title}
              </h3>
              <p
                className="font-inter"
                style={{
                  fontSize: "12.5px",
                  color: "#555750",
                  lineHeight: 1.55,
                }}
              >
                {t.aboutPillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

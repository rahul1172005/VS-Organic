"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ChekkuProcess() {
  const { t } = useLanguage();

  const processSteps = [
    {
      stepNumber: "01",
      title: t.processStep1Title,
      subtitle: t.processStep1Sub,
      detail: t.processStep1Desc,
    },
    {
      stepNumber: "02",
      title: t.processStep2Title,
      subtitle: t.processStep2Sub,
      detail: t.processStep2Desc,
    },
    {
      stepNumber: "03",
      title: t.processStep3Title,
      subtitle: t.processStep3Sub,
      detail: t.processStep3Desc,
    },
    {
      stepNumber: "04",
      title: t.processStep4Title,
      subtitle: t.processStep4Sub,
      detail: t.processStep4Desc,
    },
  ];

  return (
    <section id="process" className="section-spacing" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="site-container">
        <div style={{ maxWidth: "700px", marginBottom: "36px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span className="monochrome-tag">{t.processTag}</span>
          </div>
          <h2
            className="font-geist-thin"
            style={{
              fontSize: "clamp(30px, 4.2vw, 48px)",
              color: "#141612",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            {t.processHeading}
          </h2>
          <p
            className="font-inter"
            style={{
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: "#555750",
            }}
          >
            {t.processDescription}
          </p>
        </div>

        {/* Steps Grid - Zero horizontal overflow */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
            width: "100%",
          }}
        >
          {processSteps.map((step) => (
            <div
              key={step.stepNumber}
              style={{
                backgroundColor: "var(--bg-surface-1)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "var(--shadow-subtle)",
              }}
            >
              <div>
                <span
                  className="font-geist-thin"
                  style={{
                    fontSize: "34px",
                    color: "#9E6F1B",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "14px",
                  }}
                >
                  {step.stepNumber}
                </span>

                <h3
                  className="font-geist-light"
                  style={{
                    fontSize: "19px",
                    color: "#141612",
                    lineHeight: 1.25,
                    marginBottom: "4px",
                  }}
                >
                  {step.title}
                </h3>

                <span
                  className="font-inter"
                  style={{
                    fontSize: "11px",
                    color: "#7E8079",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  {step.subtitle}
                </span>

                <p
                  className="font-inter"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#555750",
                  }}
                >
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

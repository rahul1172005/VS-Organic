"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "54px",
        paddingBottom: "72px",
        backgroundColor: "#FFFFFF",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div className="site-container">
        <div style={{ maxWidth: "840px" }}>
          {/* Monochromatic Tag */}
          <div style={{ marginBottom: "18px" }}>
            <span className="monochrome-tag">
              {t.heroTag}
            </span>
          </div>

          {/* Primary Heading - Geist Thin */}
          <h1
            className="font-geist-thin"
            style={{
              fontSize: "clamp(34px, 5.5vw, 68px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#141612",
              marginBottom: "18px",
            }}
          >
            {t.heroHeading}
          </h1>

          {/* Subheading */}
          <p
            className="font-geist-light"
            style={{
              fontSize: "clamp(18px, 2.8vw, 26px)",
              color: "#9E6F1B",
              lineHeight: 1.35,
              marginBottom: "18px",
              letterSpacing: "-0.01em",
            }}
          >
            {t.heroSubheading}
          </p>

          {/* Body Narrative */}
          <p
            className="font-inter"
            style={{
              fontSize: "14.5px",
              lineHeight: 1.7,
              color: "#555750",
              maxWidth: "640px",
              marginBottom: "32px",
            }}
          >
            {t.heroDescription}
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
              marginBottom: "46px",
            }}
          >
            <button
              onClick={() => onOpenEnquiry()}
              className="btn-primary"
              style={{ padding: "12px 24px" }}
            >
              {t.heroWholesaleCTA}
            </button>

            <a
              href="tel:9150766377"
              className="btn-secondary"
              style={{ padding: "12px 20px" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>9150766377</span>
            </a>

            <a
              href="tel:9655336376"
              className="btn-secondary"
              style={{ padding: "12px 20px" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>9655336376</span>
            </a>
          </div>

          {/* Metric Cards - Light surface #F8F8F6 on #FFFFFF bg */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "14px",
              width: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--bg-surface-1)",
                borderRadius: "var(--radius-md)",
                padding: "18px 20px",
              }}
            >
              <span
                className="font-geist-thin"
                style={{
                  fontSize: "32px",
                  color: "#141612",
                  display: "block",
                  lineHeight: 1.1,
                  marginBottom: "4px",
                }}
              >
                {t.heroStatBranches}
              </span>
              <span
                className="font-inter"
                style={{
                  fontSize: "11.5px",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  display: "block",
                }}
              >
                {t.navBranches}
              </span>
              <span
                className="font-inter"
                style={{ fontSize: "11px", color: "#7E8079", marginTop: "2px", display: "block" }}
              >
                {t.heroStatBranchesSub}
              </span>
            </div>

            <div
              style={{
                backgroundColor: "var(--bg-surface-1)",
                borderRadius: "var(--radius-md)",
                padding: "18px 20px",
              }}
            >
              <span
                className="font-geist-thin"
                style={{
                  fontSize: "32px",
                  color: "#141612",
                  display: "block",
                  lineHeight: 1.1,
                  marginBottom: "4px",
                }}
              >
                {t.heroStatFounded}
              </span>
              <span
                className="font-inter"
                style={{
                  fontSize: "11.5px",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  display: "block",
                }}
              >
                {t.heroStatFounded}
              </span>
              <span
                className="font-inter"
                style={{ fontSize: "11px", color: "#7E8079", marginTop: "2px", display: "block" }}
              >
                {t.heroStatFoundedSub}
              </span>
            </div>

            <div
              style={{
                backgroundColor: "var(--bg-surface-1)",
                borderRadius: "var(--radius-md)",
                padding: "18px 20px",
              }}
            >
              <span
                className="font-geist-thin"
                style={{
                  fontSize: "32px",
                  color: "#141612",
                  display: "block",
                  lineHeight: 1.1,
                  marginBottom: "4px",
                }}
              >
                {t.heroStatSupply}
              </span>
              <span
                className="font-inter"
                style={{
                  fontSize: "11.5px",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  display: "block",
                }}
              >
                {t.footerSupply}
              </span>
              <span
                className="font-inter"
                style={{ fontSize: "11px", color: "#7E8079", marginTop: "2px", display: "block" }}
              >
                {t.heroStatSupplySub}
              </span>
            </div>

            <div
              style={{
                backgroundColor: "var(--bg-surface-1)",
                borderRadius: "var(--radius-md)",
                padding: "18px 20px",
              }}
            >
              <span
                className="font-geist-thin"
                style={{
                  fontSize: "32px",
                  color: "#141612",
                  display: "block",
                  lineHeight: 1.1,
                  marginBottom: "4px",
                }}
              >
                {t.heroStatEssentials}
              </span>
              <span
                className="font-inter"
                style={{
                  fontSize: "11.5px",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  display: "block",
                }}
              >
                {t.navProducts}
              </span>
              <span
                className="font-inter"
                style={{ fontSize: "11px", color: "#7E8079", marginTop: "2px", display: "block" }}
              >
                {t.heroStatEssentialsSub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

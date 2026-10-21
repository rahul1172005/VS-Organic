"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface PackagingMatrixProps {
  onOpenEnquiry: (defaultProduct?: string) => void;
}

export default function PackagingMatrix({ onOpenEnquiry }: PackagingMatrixProps) {
  const { language, t } = useLanguage();

  const packagingSpecs = [
    {
      size: language === "ta" ? "அரை லிட்டர்" : "Half Litre",
      metric: "500 ml",
      container: language === "ta" ? "உணவு தர பாட்டில்" : "Food-Grade Bottle",
      idealFor: language === "ta" ? "இல்லங்கள் மற்றும் மாதிரி பேக்" : "Households & Trial Packs",
      features:
        language === "ta"
          ? "சீல் வைக்கப்பட்டது, லீக்-ப்ரூப் மூடி, புறஊதா கதிர் பாதுகாப்பு"
          : "Induction sealed, UV amber shield, leak-proof cap",
      minWholesaleOrder: language === "ta" ? "24 பாட்டில்கள் / அட்டைப்பெட்டி" : "24 Units / Box",
    },
    {
      size: language === "ta" ? "1 லிட்டர்" : "1 Litre",
      metric: "1000 ml",
      container: language === "ta" ? "சில்லறை பாட்டில்" : "Retail Bottle",
      idealFor: language === "ta" ? "தினசரி சமையல் & சூப்பர் மார்க்கெட்" : "Daily Kitchens & Supermarkets",
      features:
        language === "ta"
          ? "நேர்த்தியான மூடி, பார்-கோடு வசதி, தெளிவான தோற்றம்"
          : "Precision pour, barcode ready, high shelf clarity",
      minWholesaleOrder: language === "ta" ? "12 பாட்டில்கள் / அட்டைப்பெட்டி" : "12 Units / Box",
    },
    {
      size: language === "ta" ? "5 லிட்டர்" : "5 Litres",
      metric: "5000 ml",
      container: language === "ta" ? "வலுவான கேன்" : "HDPE Canister",
      idealFor: language === "ta" ? "பெரிய குடும்பங்கள் & சிறிய உணவகங்கள்" : "Families & Small Eateries",
      features:
        language === "ta"
          ? "வலுவான கைப்பிடி, பாதுகாப்பான மூடி, உணவு தர கேன்"
          : "Reinforced handle, tamper cap, food-grade certified",
      minWholesaleOrder: language === "ta" ? "4 கேன்கள் / பேக்" : "4 Units / Pack",
    },
    {
      size: language === "ta" ? "15 கிலோ / 16 லிட்டர்" : "15 kg / 16L",
      metric: language === "ta" ? "வணிக டின்" : "Commercial Tin",
      container: language === "ta" ? "மெட்டல் ஆயில் டின்" : "Metal Oil Tin",
      idealFor: language === "ta" ? "உணவகங்கள், இனிப்பகங்கள் & மொத்த வணிகம்" : "Restaurants, Caterers & Wholesale",
      features:
        language === "ta"
          ? "துருப்பிடிக்காத உட்சுவர், சீலிங் வளையம், அடுக்கி வைக்கும் வசதி"
          : "Rust-inhibitor lining, pull ring seal, stackable",
      minWholesaleOrder: language === "ta" ? "1 டின் / பல டின் லாரி விநியோகம்" : "Single Tin / Bulk Logistics",
    },
  ];

  return (
    <section id="packaging" className="section-spacing" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="site-container">
        <div style={{ maxWidth: "700px", marginBottom: "36px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span className="monochrome-tag">{t.packTag}</span>
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
            {t.packHeading}
          </h2>
          <p
            className="font-inter"
            style={{
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: "#555750",
            }}
          >
            {t.packDescription}
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
            width: "100%",
          }}
        >
          {packagingSpecs.map((pack) => (
            <div
              key={pack.size}
              className="surface-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px 20px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "#9E6F1B",
                    fontFamily: "var(--font-inter)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {pack.metric}
                </span>

                <h3
                  className="font-geist-thin"
                  style={{
                    fontSize: "24px",
                    color: "#141612",
                    marginBottom: "4px",
                  }}
                >
                  {pack.size}
                </h3>

                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#7E8079",
                    fontFamily: "var(--font-inter)",
                    display: "block",
                    marginBottom: "14px",
                  }}
                >
                  {pack.container}
                </span>

                <div
                  style={{
                    backgroundColor: "var(--bg-surface-2)",
                    padding: "10px 12px",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#7E8079",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "2px",
                    }}
                  >
                    {t.packTargetLabel}
                  </span>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#141612",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                    }}
                  >
                    {pack.idealFor}
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "12px",
                    color: "#555750",
                    lineHeight: 1.55,
                    fontFamily: "var(--font-inter)",
                    marginBottom: "16px",
                  }}
                >
                  {pack.features}
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#7E8079",
                    fontFamily: "var(--font-inter)",
                    marginBottom: "10px",
                  }}
                >
                  MOQ: {pack.minWholesaleOrder}
                </div>

                <button
                  onClick={() => onOpenEnquiry(pack.size)}
                  className="btn-secondary"
                  style={{
                    width: "100%",
                    fontSize: "12px",
                    padding: "9px 14px",
                  }}
                >
                  {t.packEnquireBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

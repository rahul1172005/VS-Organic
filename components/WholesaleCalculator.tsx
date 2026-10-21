"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function WholesaleCalculator() {
  const { language, t } = useLanguage();

  const productOptions = [
    { id: "groundnut", nameEn: "Groundnut Oil", nameTa: "மரச்செக்கு கடலை எண்ணெய்" },
    { id: "sesame", nameEn: "Sesame Oil", nameTa: "மரச்செக்கு நல்லெண்ணெய்" },
    { id: "coconut", nameEn: "Coconut Oil", nameTa: "மரச்செக்கு தேங்காய் எண்ணெய்" },
    { id: "ghee", nameEn: "Pure Cow Ghee", nameTa: "தூய பசு நெய்" },
    { id: "jaggery-pow", nameEn: "Jaggery Powder", nameTa: "நாட்டு சர்க்கரை / வெல்ல தூள்" },
    { id: "jaggery-solid", nameEn: "Traditional Jaggery", nameTa: "பாரம்பரிய அச்சு வெல்லம்" },
  ];

  const packOptions = [
    { labelEn: "0.5 Litre Bottle (500ml)", labelTa: "அரை லிட்டர் பாட்டில் (500ml)", value: "0.5L_bottle" },
    { labelEn: "1 Litre Bottle", labelTa: "1 லிட்டர் பாட்டில்", value: "1L_bottle" },
    { labelEn: "5 Litres Canister", labelTa: "5 லிட்டர் கேன்", value: "5L_can" },
    { labelEn: "15 kg / 16 Litres (Wholesale Tin)", labelTa: "15 கிலோ / 16 லிட்டர் (மொத்த விற்பனை டின்)", value: "15kg_tin" },
    { labelEn: "Bulk Sacks / Cartons (25kg - 50kg)", labelTa: "மொத்த மூட்டைகள் (25kg - 50kg)", value: "bulk_sack" },
  ];

  const buyerTypes = [
    { labelEn: "Retail Store / Organic Grocery", labelTa: "மளிகை கடை / ஆர்கானிக் கடை" },
    { labelEn: "Supermarket Chain", labelTa: "பல்பொருள் அங்காடி (Supermarket)" },
    { labelEn: "Restaurant / Commercial Kitchen", labelTa: "உணவகம் / வணிக சமையலறை" },
    { labelEn: "Sweet & Snack Manufacturer", labelTa: "இனிப்பகம் & பேக்கரி" },
    { labelEn: "Wholesale Distributor", labelTa: "மொத்த விற்பனையாளர் / விநியோகஸ்தர்" },
  ];

  const [selectedProductId, setSelectedProductId] = useState(productOptions[0].id);
  const [selectedPackValue, setSelectedPackValue] = useState(packOptions[3].value);
  const [quantity, setQuantity] = useState<number>(20);
  const [buyerTypeIndex, setBuyerTypeIndex] = useState(0);
  const [destinationCity, setDestinationCity] = useState("Bengaluru");
  const [contactNumber, setContactNumber] = useState("");

  const currentProduct = productOptions.find((p) => p.id === selectedProductId) || productOptions[0];
  const currentProductName = language === "ta" ? currentProduct.nameTa : currentProduct.nameEn;
  const currentPack = packOptions.find((p) => p.value === selectedPackValue) || packOptions[3];
  const currentPackLabel = language === "ta" ? currentPack.labelTa : currentPack.labelEn;
  const currentBuyerType = language === "ta" ? buyerTypes[buyerTypeIndex].labelTa : buyerTypes[buyerTypeIndex].labelEn;

  const handleWhatsAppInquiry = () => {
    const text =
      language === "ta"
        ? `*வி.எஸ் ஆர்கானிக் - மொத்த கொள்முதல் விவரம்*%0A%0Aபொருள்: ${encodeURIComponent(
            currentProductName
          )}%0Aபேக்கிங்: ${encodeURIComponent(currentPackLabel)}%0Aஎண்ணிக்கை: ${quantity} யூனிட்கள்%0Aவணிக வகை: ${encodeURIComponent(
            currentBuyerType
          )}%0Aவிநியோக ஊர்: ${encodeURIComponent(
            destinationCity
          )}%0A%0Aதயவுசெய்து நடப்பு மொத்த விலைப்பட்டியல் மற்றும் விநியோக கால அளவை தெரிவிக்கவும்.`
        : `*VS ORGANIC - Wholesale Enquiry*%0A%0AProduct: ${encodeURIComponent(
            currentProductName
          )}%0APackaging: ${encodeURIComponent(currentPackLabel)}%0AQuantity: ${quantity} units%0ABusiness: ${encodeURIComponent(
            currentBuyerType
          )}%0ALocation: ${encodeURIComponent(
            destinationCity
          )}%0A%0APlease provide current wholesale pricing and dispatch schedule.`;

    window.open(`https://wa.me/919150766377?text=${text}`, "_blank");
  };

  return (
    <section id="calculator" className="section-spacing" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="site-container">
        <div style={{ maxWidth: "700px", marginBottom: "36px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span className="monochrome-tag">{t.calcTag}</span>
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
            {t.calcHeading}
          </h2>
          <p
            className="font-inter"
            style={{
              fontSize: "14.5px",
              color: "#555750",
              lineHeight: 1.6,
            }}
          >
            {t.calcDescription}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
            width: "100%",
          }}
        >
          {/* Form Side */}
          <div
            style={{
              backgroundColor: "var(--bg-surface-1)",
              borderRadius: "var(--radius-lg)",
              padding: "28px 22px",
              boxShadow: "var(--shadow-subtle)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxSizing: "border-box",
            }}
          >
            <div>
              <label
                style={{
                  fontSize: "11px",
                  color: "#9E6F1B",
                  fontFamily: "var(--font-inter)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: 600,
                }}
              >
                {t.calcSelectProduct}
              </label>
              <select
                className="clean-select"
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
              >
                {productOptions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {language === "ta" ? p.nameTa : p.nameEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                style={{
                  fontSize: "11px",
                  color: "#9E6F1B",
                  fontFamily: "var(--font-inter)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: 600,
                }}
              >
                {t.calcPackagingFormat}
              </label>
              <select
                className="clean-select"
                value={selectedPackValue}
                onChange={(e) => setSelectedPackValue(e.target.value)}
              >
                {packOptions.map((pack) => (
                  <option key={pack.value} value={pack.value}>
                    {language === "ta" ? pack.labelTa : pack.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div className="responsive-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label
                  style={{
                    fontSize: "11px",
                    color: "#9E6F1B",
                    fontFamily: "var(--font-inter)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: 600,
                  }}
                >
                  {t.calcQuantity}
                </label>
                <input
                  type="number"
                  min={5}
                  step={5}
                  className="clean-input"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "11px",
                    color: "#9E6F1B",
                    fontFamily: "var(--font-inter)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: 600,
                  }}
                >
                  {t.calcDeliveryCity}
                </label>
                <input
                  type="text"
                  className="clean-input"
                  placeholder="e.g. Bengaluru, Salem"
                  value={destinationCity}
                  onChange={(e) => setDestinationCity(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  fontSize: "11px",
                  color: "#9E6F1B",
                  fontFamily: "var(--font-inter)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: 600,
                }}
              >
                {t.calcBusinessType}
              </label>
              <select
                className="clean-select"
                value={buyerTypeIndex}
                onChange={(e) => setBuyerTypeIndex(parseInt(e.target.value))}
              >
                {buyerTypes.map((type, idx) => (
                  <option key={idx} value={idx}>
                    {language === "ta" ? type.labelTa : type.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                style={{
                  fontSize: "11px",
                  color: "#9E6F1B",
                  fontFamily: "var(--font-inter)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: 600,
                }}
              >
                {t.calcPhoneOptional}
              </label>
              <input
                type="tel"
                className="clean-input"
                placeholder="10 digit number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Real-time Order Summary Side */}
          <div
            style={{
              backgroundColor: "var(--bg-surface-2)",
              borderRadius: "var(--radius-lg)",
              padding: "28px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div>
              <div style={{ marginBottom: "14px" }}>
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "#7E8079",
                    fontFamily: "var(--font-inter)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.calcSummaryHeading}
                </span>
                <h3
                  className="font-geist-thin"
                  style={{
                    fontSize: "26px",
                    color: "#141612",
                    marginTop: "4px",
                    lineHeight: 1.2,
                  }}
                >
                  {currentProductName}
                </h3>
              </div>

              {/* Summary Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ fontSize: "12.5px", color: "#555750" }}>{t.calcSummaryFormat}</span>
                  <span style={{ fontSize: "12.5px", color: "#141612", fontWeight: 500, textAlign: "right" }}>
                    {currentPackLabel}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ fontSize: "12.5px", color: "#555750" }}>{t.calcSummaryVolume}</span>
                  <span style={{ fontSize: "12.5px", color: "#141612", fontWeight: 500 }}>
                    {quantity} Units
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ fontSize: "12.5px", color: "#555750" }}>{t.calcSummaryDestination}</span>
                  <span style={{ fontSize: "12.5px", color: "#141612", fontWeight: 500 }}>
                    {destinationCity || "Bengaluru / South India"}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ fontSize: "12.5px", color: "#555750" }}>{t.calcSummarySegment}</span>
                  <span style={{ fontSize: "12.5px", color: "#141612", fontWeight: 500, textAlign: "right" }}>
                    {currentBuyerType}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ fontSize: "12.5px", color: "#555750" }}>{t.calcSummaryDispatch}</span>
                  <span style={{ fontSize: "12.5px", color: "#9E6F1B", fontWeight: 600 }}>
                    {language === "ta" ? "நேரடி மரச்செக்கு ஆலை" : "Direct Chekku Plant"}
                  </span>
                </div>
              </div>

              {/* Direct Advantages Box */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "14px",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  {t.calcPerksTitle}
                </span>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#555750",
                    lineHeight: 1.5,
                  }}
                >
                  {t.calcPerksDesc}
                </p>
              </div>
            </div>

            {/* Direct Send Action */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                onClick={handleWhatsAppInquiry}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  fontSize: "13px",
                }}
              >
                {t.calcSendWhatsApp}
              </button>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "14px",
                  fontSize: "11px",
                  color: "#7E8079",
                }}
              >
                <span>9150766377</span>
                <span>9655336376</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 580px) {
          .responsive-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

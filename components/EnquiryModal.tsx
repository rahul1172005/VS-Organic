"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultProduct = "Groundnut Oil",
}: EnquiryModalProps) {
  const { t, language } = useLanguage();
  const isTa = language === "ta";

  const [product, setProduct] = useState(defaultProduct);
  const [pack, setPack] = useState("15 kg / 16 Litres (Wholesale Tin)");
  const [quantity, setQuantity] = useState("20");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setProduct(defaultProduct);
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const text = `*VS ORGANIC - Wholesale Enquiry / மொத்த கொள்முதல்*%0A%0AClient: ${encodeURIComponent(
      name || "Direct Buyer"
    )}%0AStore: ${encodeURIComponent(
      businessName || "Retailer"
    )}%0APhone: ${encodeURIComponent(
      phone || "Not specified"
    )}%0ACity: ${encodeURIComponent(
      location || "South India"
    )}%0A%0A*Requested Item / கோரப்பட்ட பொருள்:*%0AProduct: ${encodeURIComponent(
      product
    )}%0APackaging: ${encodeURIComponent(pack)}%0AQuantity: ${encodeURIComponent(
      quantity
    )} Units%0A%0APlease provide immediate wholesale quote.`;

    window.open(`https://wa.me/919150766377?text=${text}`, "_blank");
    setSubmitted(true);
  };

  const handleSubmitInternal = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppDirect();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          padding: "32px",
          maxWidth: "540px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "var(--bg-surface-1)",
            color: "#141612",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div style={{ marginBottom: "20px" }}>
          <span className="monochrome-tag">{t.modalTag}</span>
          <h3
            className="font-geist-thin"
            style={{
              fontSize: "28px",
              color: "#141612",
              marginTop: "8px",
              lineHeight: 1.2,
            }}
          >
            {t.modalHeading}
          </h3>
          <p
            className="font-inter"
            style={{
              fontSize: "13px",
              color: "#555750",
              marginTop: "4px",
            }}
          >
            {t.modalSubheading}
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              backgroundColor: "var(--bg-surface-1)",
              padding: "28px",
              borderRadius: "var(--radius-md)",
              textAlign: "center",
            }}
          >
            <h4
              className="font-geist-light"
              style={{
                fontSize: "22px",
                color: "#9E6F1B",
                marginBottom: "8px",
              }}
            >
              {t.modalSentTitle}
            </h4>
            <p
              className="font-inter"
              style={{
                fontSize: "13.5px",
                color: "#555750",
                marginBottom: "20px",
                lineHeight: 1.5,
              }}
            >
              {t.modalSentDesc}
            </p>
            <button onClick={onClose} className="btn-primary">
              {t.modalClose}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitInternal} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div className="modal-row-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label
                  style={{
                    fontSize: "10.5px",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  {t.modalProduct}
                </label>
                <select
                  className="clean-select"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                >
                  <option value="Groundnut Oil">
                    {isTa ? "நிலக்கடலை மரச்செக்கு எண்ணெய் (Groundnut)" : "Groundnut Oil"}
                  </option>
                  <option value="Sesame Oil">
                    {isTa ? "எள் மரச்செக்கு எண்ணெய் (Sesame)" : "Sesame Oil"}
                  </option>
                  <option value="Coconut Oil">
                    {isTa ? "தேங்காய் மரச்செக்கு எண்ணெய் (Coconut)" : "Coconut Oil"}
                  </option>
                  <option value="Pure Cow Ghee">
                    {isTa ? "தூய பசும் நெய் (Cow Ghee)" : "Pure Cow Ghee"}
                  </option>
                  <option value="Jaggery Powder">
                    {isTa ? "நாட்டு சர்க்கரை (Jaggery Powder)" : "Jaggery Powder"}
                  </option>
                  <option value="Traditional Jaggery">
                    {isTa ? "பாரம்பரிய அச்சு வெல்லம் (Achu)" : "Traditional Jaggery"}
                  </option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    fontSize: "10.5px",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  {t.modalPackaging}
                </label>
                <select
                  className="clean-select"
                  value={pack}
                  onChange={(e) => setPack(e.target.value)}
                >
                  <option value="0.5 Litre Bottle">{isTa ? "0.5 லிட்டர் பாட்டில்" : "0.5 Litre Bottle"}</option>
                  <option value="1 Litre Bottle">{isTa ? "1 லிட்டர் பாட்டில்" : "1 Litre Bottle"}</option>
                  <option value="5 Litres Canister">{isTa ? "5 லிட்டர் கேன்" : "5 Litres Canister"}</option>
                  <option value="15 kg / 16 Litres Wholesale Tin">
                    {isTa ? "15 கிலோ / 16 லிட்டர் டின்" : "15 kg / 16L Tin"}
                  </option>
                  <option value="Bulk Sacks (25-50 kg)">
                    {isTa ? "மொத்த சாக்கு (25-50 கிலோ)" : "Bulk Sacks (25-50 kg)"}
                  </option>
                </select>
              </div>
            </div>

            <div className="modal-row-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label
                  style={{
                    fontSize: "10.5px",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  {t.modalQuantity}
                </label>
                <input
                  type="text"
                  required
                  className="clean-input"
                  placeholder={isTa ? "எ.கா: 20 டின்" : "e.g. 20 tins"}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "10.5px",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  {t.modalCity}
                </label>
                <input
                  type="text"
                  required
                  className="clean-input"
                  placeholder={isTa ? "ஊர் / நகரம்" : "City"}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-row-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label
                  style={{
                    fontSize: "10.5px",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  {t.modalName}
                </label>
                <input
                  type="text"
                  required
                  className="clean-input"
                  placeholder={isTa ? "உங்கள் பெயர்" : "Name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "10.5px",
                    color: "#9E6F1B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "4px",
                    fontWeight: 600,
                  }}
                >
                  {t.modalBusiness}
                </label>
                <input
                  type="text"
                  className="clean-input"
                  placeholder={isTa ? "கடை / நிறுவனம்" : "Business Name"}
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  fontSize: "10.5px",
                  color: "#9E6F1B",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  display: "block",
                  marginBottom: "4px",
                  fontWeight: 600,
                }}
              >
                {t.modalPhone}
              </label>
              <input
                type="tel"
                required
                className="clean-input"
                placeholder={isTa ? "10 இலக்க தொலைபேசி எண்" : "10-digit phone number"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "13.5px",
                }}
              >
                {t.modalSubmit}
              </button>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  marginTop: "4px",
                }}
              >
                <a
                  href="tel:9150766377"
                  style={{
                    fontSize: "12px",
                    color: "#555750",
                    textDecoration: "none",
                  }}
                >
                  9150766377
                </a>
                <a
                  href="tel:9655336376"
                  style={{
                    fontSize: "12px",
                    color: "#555750",
                    textDecoration: "none",
                  }}
                >
                  9655336376
                </a>
              </div>
            </div>
          </form>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 500px) {
          .modal-row-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

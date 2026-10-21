"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export interface ProductItem {
  id: string;
  nameEn: string;
  nameTa: string;
  category: "oil" | "essential";
  subEn: string;
  subTa: string;
  taglineEn: string;
  taglineTa: string;
  descEn: string;
  descTa: string;
  packagingTypes: string[];
  sizes: string[];
  specsEn: { label: string; value: string }[];
  specsTa: { label: string; value: string }[];
  wholesaleNotesEn: string;
  wholesaleNotesTa: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "groundnut-oil",
    nameEn: "Groundnut Oil",
    nameTa: "மரச்செக்கு கடலை எண்ணெய்",
    category: "oil",
    subEn: "Marachekku Kadalai Ennai",
    subTa: "சுத்தமான கடலை எண்ணெய்",
    taglineEn: "Cold-Pressed Peanut Oil",
    taglineTa: "பாரம்பரிய வாகை மரச்செக்கு",
    descEn:
      "Hand-picked peanut kernels extracted in traditional wooden chekkus. Unrefined, unbleached, retaining natural nutty flavor and heart-healthy nutrients.",
    descTa:
      "நேரடியாக விவசாயிகளிடம் கொள்முதல் செய்யப்பட்ட நிலக்கடலையை கொண்டு பாரம்பரிய வாகை மரச்செக்கில் பிழியப்பட்டது. ரசாயனங்கள் அற்றது.",
    packagingTypes: ["Bottle", "Tin Available"],
    sizes: ["0.5L", "1L", "5L", "15kg / 16L"],
    specsEn: [
      { label: "Extraction", value: "Cold Wood-Pressed" },
      { label: "Refining", value: "100% Unrefined" },
      { label: "Preservatives", value: "Zero Additives" },
      { label: "Best For", value: "Daily Cooking, Frying" },
    ],
    specsTa: [
      { label: "உற்பத்தி முறை", value: "வாகை மரச்செக்கு" },
      { label: "சுத்திகரிப்பு", value: "100% ரசாயனம் அற்றது" },
      { label: "பாதுகாப்பானவை", value: "ஜீரோ பிரிசர்வேட்டிவ்ஸ்" },
      { label: "பயன்பாடு", value: "தினசரி சமையல், பொரியல்" },
    ],
    wholesaleNotesEn: "High volume for retail chains, restaurants & grocers.",
    wholesaleNotesTa: "மளிகை கடைகள், உணவகங்கள் மற்றும் சூப்பர் மார்க்கெட்களுக்கு நேரடி விநியோகம்.",
  },
  {
    id: "sesame-oil",
    nameEn: "Sesame Oil",
    nameTa: "மரச்செக்கு நல்லெண்ணெய்",
    category: "oil",
    subEn: "Pure Gingelly / Nalla Ennai",
    subTa: "பாரம்பரிய நல்லெண்ணெய்",
    taglineEn: "Traditional Cold-Pressed Til Oil",
    taglineTa: "பனைவெல்லம் சேர்த்து பிழிந்தது",
    descEn:
      "Slow-pressed native black sesame seeds blended with pure palm jaggery to ensure rich amber clarity, smooth taste, and authentic culinary aroma.",
    descTa:
      "நாட்டு கருப்பு எள்ளுடன் சுத்தமான பனைவெல்லம் சேர்த்து பாரம்பரிய மரச்செக்கில் பிழியப்பட்ட சுத்தமான நல்லெண்ணெய்.",
    packagingTypes: ["Bottle", "Tin Available"],
    sizes: ["0.5L", "1L", "5L", "15kg / 16L"],
    specsEn: [
      { label: "Extraction", value: "Traditional Chekku" },
      { label: "Color Tone", value: "Clear Deep Amber" },
      { label: "Nutrients", value: "Rich in Sesamol" },
      { label: "Best For", value: "South Indian Cuisine, Podi" },
    ],
    specsTa: [
      { label: "உற்பத்தி முறை", value: "மரச்செக்கு & பனைவெல்லம்" },
      { label: "நிறம்", value: "தூய செம்பழுப்பு நிறம்" },
      { label: "சத்துக்கள்", value: "இயற்கை ஆன்டி-ஆக்சிடன்ட்" },
      { label: "பயன்பாடு", value: "பாரம்பரிய சமையல், இட்லி பொடி" },
    ],
    wholesaleNotesEn: "Consistent bulk supply for stores and commercial kitchens.",
    wholesaleNotesTa: "கடைகள் மற்றும் உணவகங்களுக்கு சீரான மொத்த விநியோகம்.",
  },
  {
    id: "coconut-oil",
    nameEn: "Coconut Oil",
    nameTa: "மரச்செக்கு தேங்காய் எண்ணெய்",
    category: "oil",
    subEn: "Chekku Thengai Ennai",
    subTa: "தூய தேங்காய் எண்ணெய்",
    taglineEn: "Sulphur-Free Pure Copra Oil",
    taglineTa: "கந்தகம் அற்ற இயற்கை கொப்பரை",
    descEn:
      "Extracted from naturally sun-dried copra at low temperatures. Free from sulphur, chemicals, or synthetic bleaches with pure tropical fragrance.",
    descTa:
      "இயற்கையான முறையில் வெயிலில் காயவைத்த கொப்பரையை கொண்டு குறைந்த வெப்பத்தில் பிழியப்பட்டது. கந்தகம் மற்றும் பிளீச்சிங் இல்லாதது.",
    packagingTypes: ["Bottle", "Tin Available"],
    sizes: ["0.5L", "1L", "5L", "15kg / 16L"],
    specsEn: [
      { label: "Raw Material", value: "Sulphur-Free Copra" },
      { label: "Aroma", value: "Natural Coconut" },
      { label: "Lauric Acid", value: "High Retention (>48%)" },
      { label: "Best For", value: "Cooking & Hair Care" },
    ],
    specsTa: [
      { label: "மூலப்பொருள்", value: "கந்தகம் இல்லாத கொப்பரை" },
      { label: "நறுமணம்", value: "இயற்கை தேங்காய் வாசம்" },
      { label: "லாரிக் அமிலம்", value: "அதிக சத்து retention (>48%)" },
      { label: "பயன்பாடு", value: "சமையல் மற்றும் கூந்தல் பராமரிப்பு" },
    ],
    wholesaleNotesEn: "Preferred by supermarkets, bakeries & wellness buyers.",
    wholesaleNotesTa: "சூப்பர் மார்க்கெட்டுகள் மற்றும் பேக்கரிகளுக்கு உகந்தது.",
  },
  {
    id: "pure-ghee",
    nameEn: "Pure Cow Ghee",
    nameTa: "சுத்தமான பசு நெய்",
    category: "essential",
    subEn: "Pasu Nei",
    subTa: "மணல் மணலான நெய்",
    taglineEn: "Granular Golden Ghee",
    taglineTa: "பாரம்பரிய நறுமணம்",
    descEn:
      "Traditional slow clarification of cultured butter. Delivers signature granular texture (manal manalana padam) and rich natural aroma without essence.",
    descTa:
      "பாரம்பரிய முறையில் காய்ச்சப்பட்ட தூய பசு வெண்ணெய் நெய். அசல் மணல் மணலான பதம் மற்றும் நறுமணம் கொண்டது.",
    packagingTypes: ["Bottle", "Commercial Tin"],
    sizes: ["0.5L", "1L", "5L", "15kg Tin"],
    specsEn: [
      { label: "Source", value: "Pure Cow Milk Fat" },
      { label: "Texture", value: "Granular Danedar" },
      { label: "Adulteration", value: "Zero Palm Oil" },
      { label: "Best For", value: "Sweets, Rice, Temples" },
    ],
    specsTa: [
      { label: "மூலம்", value: "தூய பசு பால் வெண்ணெய்" },
      { label: "பதம்", value: "மணல் மணலான பொன்னிற நெய்" },
      { label: "கலப்படம்", value: "டால்டா, பாமாயில் இல்லை" },
      { label: "பயன்பாடு", value: "இனிப்புகள், சாப்பாடு, பூஜைகள்" },
    ],
    wholesaleNotesEn: "Demanded by sweet makers, caterers & supermarkets.",
    wholesaleNotesTa: "இனிப்பகங்கள், திருமண ஆர்டர்கள் மற்றும் கடைகளுக்கு.",
  },
  {
    id: "jaggery-powder",
    nameEn: "Jaggery Powder",
    nameTa: "நாட்டு சர்க்கரை / வெல்ல தூள்",
    category: "essential",
    subEn: "Nattu Sakkarai",
    subTa: "ரசாயனம் இல்லாத நாட்டு சர்க்கரை",
    taglineEn: "Unrefined Natural Cane Sugar",
    taglineTa: "இயற்கை இரும்புச்சத்து நிறைந்தது",
    descEn:
      "Pure sugarcane crystals prepared by evaporating fresh cane juice without phosphoric acid, sulphur, or chemical bleaches. Natural mineral sweetener.",
    descTa:
      "சுத்தமான கரும்பு சாற்றை ரசாயனம் கலக்காமல் காய்ச்சி தயாரிக்கப்பட்ட தூய நாட்டு சர்க்கரை. ஆரோக்கியமான இனிப்பு.",
    packagingTypes: ["Moisture Bag", "Bulk Sacks"],
    sizes: ["0.5kg", "1kg", "5kg", "25kg / 50kg Sacks"],
    specsEn: [
      { label: "Processing", value: "Chemical-Free" },
      { label: "Minerals", value: "Iron & Magnesium Rich" },
      { label: "Form", value: "Fine Free-Flowing" },
      { label: "Best For", value: "Tea, Coffee, Sweets" },
    ],
    specsTa: [
      { label: "தயாரிப்பு", value: "ரசாயன பிளீச்சிங் இல்லை" },
      { label: "தாதுக்கள்", value: "இரும்பு, கால்சியம் நிறைந்தது" },
      { label: "வடிவம்", value: "நயமான பவுடர் பதம்" },
      { label: "பயன்பாடு", value: "டீ, காபி, சமையல் இனிப்புகள்" },
    ],
    wholesaleNotesEn: "High bulk turnover for organic grocery stores.",
    wholesaleNotesTa: "ஆர்கானிக் கடைகளுக்கு விரைவான விற்பனை பொருள்.",
  },
  {
    id: "traditional-jaggery",
    nameEn: "Traditional Jaggery",
    nameTa: "பாரம்பரிய அச்சு வெல்லம் & மண்டி",
    category: "essential",
    subEn: "Achu Vellam & Mandi",
    subTa: "கரும்பு அச்சு வெல்லம்",
    taglineEn: "Solid Pure Cane Jaggery",
    taglineTa: "அசல் இனிப்பு சுவை",
    descEn:
      "Solid traditional blocks and cubes made using time-honored cane evaporation. Rich earthy caramel flavor with zero chemical brightening agents.",
    descTa:
      "பாரம்பரிய முறைப்படி காய்ச்சி தயாரிக்கப்படும் கெட்டி அச்சு வெல்லம் மற்றும் உருண்டை வெல்லம். நிறமேற்றிகள் இல்லாதது.",
    packagingTypes: ["Box Pack", "Bulk Cartons"],
    sizes: ["1kg", "5kg", "10kg", "Master Box"],
    specsEn: [
      { label: "Ingredients", value: "100% Sugarcane Juice" },
      { label: "Form", value: "Solid Block / Achu" },
      { label: "Chemicals", value: "No Hydrosulphite" },
      { label: "Best For", value: "Traditional Festival Dishes" },
    ],
    specsTa: [
      { label: "மூலப்பொருள்", value: "100% இயற்கை கரும்பு சாறு" },
      { label: "வடிவம்", value: "திட அச்சு வடிவம் / மண்டி" },
      { label: "ரசாயனம்", value: "ஹைட்ரோஸ் இல்லாதது" },
      { label: "பயன்பாடு", value: "பொங்கல், பாயாசம், பாரம்பரிய பலகாரங்கள்" },
    ],
    wholesaleNotesEn: "Supplied directly to mandis, retailers & food units.",
    wholesaleNotesTa: "மொத்த மண்டிகள் மற்றும் சில்லறை வணிகர்களுக்கு.",
  },
];

interface ProductCatalogProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export default function ProductCatalog({
  onSelectProductForEnquiry,
}: ProductCatalogProps) {
  const [filter, setFilter] = useState<"all" | "oil" | "essential">("all");
  const { language, t } = useLanguage();

  const filteredProducts =
    filter === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="products" className="section-spacing" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "700px", marginBottom: "36px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span className="monochrome-tag">{t.prodTag}</span>
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
            {t.prodHeading}
          </h2>
          <p
            className="font-inter"
            style={{
              fontSize: "14.5px",
              color: "#555750",
              lineHeight: 1.6,
            }}
          >
            {t.prodDescription}
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          <button
            onClick={() => setFilter("all")}
            style={{
              backgroundColor: filter === "all" ? "var(--accent-gold)" : "var(--bg-surface-1)",
              color: filter === "all" ? "#FFFFFF" : "var(--text-main)",
              padding: "8px 16px",
              borderRadius: "var(--radius-pill)",
              fontSize: "12px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {t.prodFilterAll}
          </button>
          <button
            onClick={() => setFilter("oil")}
            style={{
              backgroundColor: filter === "oil" ? "var(--accent-gold)" : "var(--bg-surface-1)",
              color: filter === "oil" ? "#FFFFFF" : "var(--text-main)",
              padding: "8px 16px",
              borderRadius: "var(--radius-pill)",
              fontSize: "12px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {t.prodFilterOils}
          </button>
          <button
            onClick={() => setFilter("essential")}
            style={{
              backgroundColor:
                filter === "essential" ? "var(--accent-gold)" : "var(--bg-surface-1)",
              color: filter === "essential" ? "#FFFFFF" : "var(--text-main)",
              padding: "8px 16px",
              borderRadius: "var(--radius-pill)",
              fontSize: "12px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {t.prodFilterEssentials}
          </button>
        </div>

        {/* Cards Grid - Zero Horizontal Overflow Guarantee */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            width: "100%",
          }}
        >
          {filteredProducts.map((product) => {
            const productName = language === "ta" ? product.nameTa : product.nameEn;
            const productSub = language === "ta" ? product.subTa : product.subEn;
            const productTagline = language === "ta" ? product.taglineTa : product.taglineEn;
            const productDesc = language === "ta" ? product.descTa : product.descEn;
            const productSpecs = language === "ta" ? product.specsTa : product.specsEn;
            const productWholesale =
              language === "ta" ? product.wholesaleNotesTa : product.wholesaleNotesEn;

            return (
              <div
                key={product.id}
                className="surface-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "var(--bg-surface-1)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#9E6F1B",
                        fontWeight: 600,
                      }}
                    >
                      {productSub}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "10.5px",
                        color: "#7E8079",
                      }}
                    >
                      {t.prodBottleTin}
                    </span>
                  </div>

                  <h3
                    className="font-geist-thin"
                    style={{
                      fontSize: "26px",
                      color: "#141612",
                      lineHeight: 1.15,
                      marginBottom: "6px",
                    }}
                  >
                    {productName}
                  </h3>

                  <p
                    className="font-inter"
                    style={{
                      fontSize: "12.5px",
                      color: "#9E6F1B",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    {productTagline}
                  </p>

                  <p
                    className="font-inter"
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "#555750",
                      marginBottom: "18px",
                    }}
                  >
                    {productDesc}
                  </p>

                  {/* Packaging Sizes */}
                  <div style={{ marginBottom: "18px" }}>
                    <span
                      style={{
                        fontSize: "10.5px",
                        fontFamily: "var(--font-inter)",
                        color: "#7E8079",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {t.prodSizesLabel}
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#141612",
                            fontFamily: "var(--font-inter)",
                            fontSize: "11.5px",
                            padding: "3px 9px",
                            borderRadius: "var(--radius-sm)",
                          }}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-surface-2)",
                      borderRadius: "var(--radius-md)",
                      padding: "12px 14px",
                      marginBottom: "18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {productSpecs.map((spec) => (
                      <div
                        key={spec.label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#7E8079",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {spec.label}
                        </span>
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#141612",
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                            textAlign: "right",
                          }}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#7E8079",
                      fontFamily: "var(--font-inter)",
                      marginBottom: "12px",
                      lineHeight: 1.45,
                    }}
                  >
                    {productWholesale}
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() => onSelectProductForEnquiry(productName)}
                      className="btn-primary"
                      style={{
                        flex: 1,
                        fontSize: "12px",
                        padding: "9px 14px",
                      }}
                    >
                      {t.prodQuoteBtn}
                    </button>

                    <a
                      href={`https://wa.me/919150766377?text=${encodeURIComponent(
                        language === "ta"
                          ? `வணக்கம் வி.எஸ் ஆர்கானிக், ${productName} மொத்த விலை விவரங்களை பகிரவும்.`
                          : `Hello VS Organic, please share wholesale pricing for ${productName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        padding: "9px 12px",
                      }}
                      title="WhatsApp"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

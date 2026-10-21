"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Branch {
  id: string;
  nameEn: string;
  nameTa: string;
  region: "Bengaluru" | "Interstate & Hubs";
  cityEn: string;
  cityTa: string;
  hubTypeEn: string;
  hubTypeTa: string;
  contact: string;
  focusEn: string;
  focusTa: string;
}

const BRANCHES_DATA: Branch[] = [
  {
    id: "b1",
    nameEn: "Bengaluru Central Hub",
    nameTa: "பெங்களூரு மத்திய விநியோக மையம்",
    region: "Bengaluru",
    cityEn: "Bengaluru, Karnataka",
    cityTa: "பெங்களூரு, கர்நாடகா",
    hubTypeEn: "Logistics & Wholesale Depot",
    hubTypeTa: "மொத்த விற்பனை & போக்குவரத்து மையம்",
    contact: "9150766377",
    focusEn: "Fast commercial delivery to supermarkets & organic stores",
    focusTa: "பல்பொருள் அங்காடிகள் மற்றும் ஆர்கானிக் கடைகளுக்கு விரைவு விநியோகம்",
  },
  {
    id: "b2",
    nameEn: "Jayanagar Branch",
    nameTa: "ஜெயநகர் கிளை",
    region: "Bengaluru",
    cityEn: "Bengaluru, Karnataka",
    cityTa: "பெங்களூரு, கர்நாடகா",
    hubTypeEn: "Retail Experience Store",
    hubTypeTa: "சில்லறை விற்பனை & வாடிக்கையாளர் மையம்",
    contact: "9655336376",
    focusEn: "Customer refilling counter & household pack supplies",
    focusTa: "பாட்டில் மறுநிரப்புதல் மற்றும் வீட்டு சமையல் பேக்குகள்",
  },
  {
    id: "b3",
    nameEn: "Whitefield Unit",
    nameTa: "ஒயிட்பீல்ட் வணிக விநியோகம்",
    region: "Bengaluru",
    cityEn: "Bengaluru, Karnataka",
    cityTa: "பெங்களூரு, கர்நாடகா",
    hubTypeEn: "B2B Supply Point",
    hubTypeTa: "B2B மொத்த சப்ளை மையம்",
    contact: "9150766377",
    focusEn: "Commercial 15kg tin supplies to restaurants and cafes",
    focusTa: "உணவகங்கள் மற்றும் சிற்றுண்டிச்சாலைகளுக்கு 15 கிலோ டின் சப்ளை",
  },
  {
    id: "b4",
    nameEn: "Electronic City Center",
    nameTa: "எலக்ட்ரானிக் சிட்டி கிளை",
    region: "Bengaluru",
    cityEn: "Bengaluru, Karnataka",
    cityTa: "பெங்களூரு, கர்நாடகா",
    hubTypeEn: "Retail & Delivery Point",
    hubTypeTa: "சில்லறை & டெலிவரி மையம்",
    contact: "9655336376",
    focusEn: "South Bengaluru residential and retail orders",
    focusTa: "தெற்கு பெங்களூரு குடியிருப்பு மற்றும் சில்லறை ஆர்டர்கள்",
  },
  {
    id: "b5",
    nameEn: "Salem Central Plant",
    nameTa: "சேலம் முதன்மை உற்பத்தி ஆலை",
    region: "Interstate & Hubs",
    cityEn: "Salem, Tamil Nadu",
    cityTa: "சேலம், தமிழ்நாடு",
    hubTypeEn: "Main Production Facility",
    hubTypeTa: "பாரம்பரிய மரச்செக்கு உற்பத்தி ஆலை",
    contact: "9150766377",
    focusEn: "Wood chekku pressing facility & seed procurement intake",
    focusTa: "வாகை மரச்செக்கு பிழிதல் & விவசாய விதை கொள்முதல் மையம்",
  },
  {
    id: "b6",
    nameEn: "Coimbatore Branch",
    nameTa: "கோயம்புத்தூர் கிளை",
    region: "Interstate & Hubs",
    cityEn: "Coimbatore, Tamil Nadu",
    cityTa: "கோயம்புத்தூர், தமிழ்நாடு",
    hubTypeEn: "Wholesale Mandi Depot",
    hubTypeTa: "மொத்த மண்டி விநியோகம்",
    contact: "9655336376",
    focusEn: "Coconut and sesame oil bulk trading & sweet manufacturers",
    focusTa: "தேங்காய், நல்லெண்ணெய் மொத்த வர்த்தகம் & இனிப்பக சப்ளை",
  },
  {
    id: "b7",
    nameEn: "Chennai Metro Outlet",
    nameTa: "சென்னை மெட்ரோ கிளை",
    region: "Interstate & Hubs",
    cityEn: "Chennai, Tamil Nadu",
    cityTa: "சென்னை, தமிழ்நாடு",
    hubTypeEn: "Retail & Wholesale Hub",
    hubTypeTa: "சில்லறை & மொத்த விற்பனை கிளை",
    contact: "9150766377",
    focusEn: "Supermarket chains, retail supply, and catering orders",
    focusTa: "சூப்பர் மார்க்கெட் சப்ளை மற்றும் கேட்ரிங் மொத்த ஆர்டர்கள்",
  },
  {
    id: "b8",
    nameEn: "Erode Jaggery Center",
    nameTa: "ஈரோடு வெல்ல விநியோக மையம்",
    region: "Interstate & Hubs",
    cityEn: "Erode, Tamil Nadu",
    cityTa: "ஈரோடு, தமிழ்நாடு",
    hubTypeEn: "Agri-Procurement Hub",
    hubTypeTa: "கரும்பு விவசாய கொள்முதல் மையம்",
    contact: "9655336376",
    focusEn: "Pure sugarcane jaggery refinement & nattu sakkarai packing",
    focusTa: "நாட்டு சர்க்கரை, அச்சு வெல்லம் தயாரிப்பு மற்றும் பேக்கிங்",
  },
  {
    id: "b9",
    nameEn: "Tirupur Wholesale Depot",
    nameTa: "திருப்பூர் மொத்த விற்பனை மையம்",
    region: "Interstate & Hubs",
    cityEn: "Tirupur, Tamil Nadu",
    cityTa: "திருப்பூர், தமிழ்நாடு",
    hubTypeEn: "Commercial Supply Center",
    hubTypeTa: "வணிக சப்ளை மையம்",
    contact: "9150766377",
    focusEn: "Catering houses, canteens, and wholesale trade accounts",
    focusTa: "கேண்டீன்கள், கேட்டரிங் மற்றும் மொத்த வர்த்தக நிறுவனங்கள்",
  },
  {
    id: "b10",
    nameEn: "Hosur Corridor Hub",
    nameTa: "ஓசூர் எல்லை விநியோக மையம்",
    region: "Interstate & Hubs",
    cityEn: "Hosur, Tamil Nadu",
    cityTa: "ஓசூர், தமிழ்நாடு",
    hubTypeEn: "Interstate Cross-Dock",
    hubTypeTa: "மாநிலங்களுக்கு இடையிலான விநியோக மையம்",
    contact: "9655336376",
    focusEn: "Express transit between Karnataka and Tamil Nadu corridors",
    focusTa: "கர்நாடகா மற்றும் தமிழ்நாடு விரைவு சரக்கு போக்குவரத்து",
  },
];

export default function BranchesSection() {
  const [selectedRegion, setSelectedRegion] = useState<"All" | "Bengaluru" | "Interstate & Hubs">("All");
  const { language, t } = useLanguage();

  const filteredBranches =
    selectedRegion === "All"
      ? BRANCHES_DATA
      : BRANCHES_DATA.filter((b) => b.region === selectedRegion);

  return (
    <section id="branches" className="section-spacing" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="site-container">
        <div style={{ maxWidth: "700px", marginBottom: "36px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span className="monochrome-tag">{t.branchTag}</span>
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
            {t.branchHeading}
          </h2>
          <p
            className="font-inter"
            style={{
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: "#555750",
            }}
          >
            {t.branchDescription}
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
          <button
            onClick={() => setSelectedRegion("All")}
            style={{
              backgroundColor: selectedRegion === "All" ? "var(--accent-gold)" : "var(--bg-surface-1)",
              color: selectedRegion === "All" ? "#FFFFFF" : "var(--text-main)",
              padding: "8px 16px",
              borderRadius: "var(--radius-pill)",
              fontSize: "12px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {t.branchFilterAll}
          </button>
          <button
            onClick={() => setSelectedRegion("Bengaluru")}
            style={{
              backgroundColor:
                selectedRegion === "Bengaluru" ? "var(--accent-gold)" : "var(--bg-surface-1)",
              color: selectedRegion === "Bengaluru" ? "#FFFFFF" : "var(--text-main)",
              padding: "8px 16px",
              borderRadius: "var(--radius-pill)",
              fontSize: "12px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {t.branchFilterBlr}
          </button>
          <button
            onClick={() => setSelectedRegion("Interstate & Hubs")}
            style={{
              backgroundColor:
                selectedRegion === "Interstate & Hubs" ? "var(--accent-gold)" : "var(--bg-surface-1)",
              color: selectedRegion === "Interstate & Hubs" ? "#FFFFFF" : "var(--text-main)",
              padding: "8px 16px",
              borderRadius: "var(--radius-pill)",
              fontSize: "12px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {t.branchFilterInter}
          </button>
        </div>

        {/* Branches Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            width: "100%",
          }}
        >
          {filteredBranches.map((branch) => {
            const bName = language === "ta" ? branch.nameTa : branch.nameEn;
            const bCity = language === "ta" ? branch.cityTa : branch.cityEn;
            const bHub = language === "ta" ? branch.hubTypeTa : branch.hubTypeEn;
            const bFocus = language === "ta" ? branch.focusTa : branch.focusEn;

            return (
              <div
                key={branch.id}
                style={{
                  backgroundColor: "var(--bg-surface-1)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "var(--shadow-subtle)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#9E6F1B",
                      fontFamily: "var(--font-inter)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {bCity}
                  </span>

                  <h3
                    className="font-geist-light"
                    style={{
                      fontSize: "18px",
                      color: "#141612",
                      lineHeight: 1.25,
                      marginBottom: "4px",
                    }}
                  >
                    {bName}
                  </h3>

                  <span
                    style={{
                      fontSize: "11px",
                      color: "#7E8079",
                      fontFamily: "var(--font-inter)",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    {bHub}
                  </span>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "#555750",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-inter)",
                      marginBottom: "16px",
                    }}
                  >
                    {bFocus}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#7E8079",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.branchDirectLine}
                  </span>
                  <a
                    href={`tel:${branch.contact}`}
                    style={{
                      color: "#9E6F1B",
                      textDecoration: "none",
                      fontFamily: "var(--font-inter)",
                      fontSize: "12.5px",
                      fontWeight: 600,
                    }}
                  >
                    {branch.contact}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

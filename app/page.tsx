"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSelectModal from "@/components/LanguageSelectModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import ChekkuProcess from "@/components/ChekkuProcess";
import PackagingMatrix from "@/components/PackagingMatrix";
import WholesaleCalculator from "@/components/WholesaleCalculator";
import BranchesSection from "@/components/BranchesSection";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingCTA from "@/components/FloatingCTA";

function HomeContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState("Groundnut Oil");

  const handleOpenEnquiry = (productName?: string) => {
    if (productName) {
      setSelectedProductForModal(productName);
    }
    setModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setModalOpen(false);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#FFFFFF",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      {/* Entry Language Prompt Modal (Google / Site selection: தமிழ் vs English) */}
      <LanguageSelectModal />

      {/* Navigation Bar - Flat Pure White without Shadow */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Hero Section */}
      <Hero onOpenEnquiry={handleOpenEnquiry} />

      {/* Product Catalog */}
      <ProductCatalog onSelectProductForEnquiry={handleOpenEnquiry} />

      {/* Traditional Chekku Process */}
      <ChekkuProcess />

      {/* Packaging Matrix */}
      <PackagingMatrix onOpenEnquiry={handleOpenEnquiry} />

      {/* Interactive Wholesale B2B Estimator */}
      <WholesaleCalculator />

      {/* 10 Branches Network */}
      <BranchesSection />

      {/* Heritage & Brand Story */}
      <BrandStory />

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Bottom Right Floating CTA Button */}
      <FloatingCTA onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Direct Wholesale Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        defaultProduct={selectedProductForModal}
      />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

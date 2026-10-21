"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ta";

export interface Translations {
  // Brand
  brandName: string;
  brandSubtitle: string;
  brandTagline: string;
  heritageStoryShort: string;

  // Nav
  navProducts: string;
  navProcess: string;
  navCalculator: string;
  navPackaging: string;
  navBranches: string;
  navAbout: string;
  navQuoteCTA: string;
  navDirectLines: string;

  // Hero
  heroTag: string;
  heroHeading: string;
  heroSubheading: string;
  heroDescription: string;
  heroWholesaleCTA: string;
  heroStatBranches: string;
  heroStatBranchesSub: string;
  heroStatFounded: string;
  heroStatFoundedSub: string;
  heroStatSupply: string;
  heroStatSupplySub: string;
  heroStatEssentials: string;
  heroStatEssentialsSub: string;

  // Products
  prodTag: string;
  prodHeading: string;
  prodDescription: string;
  prodFilterAll: string;
  prodFilterOils: string;
  prodFilterEssentials: string;
  prodSizesLabel: string;
  prodQuoteBtn: string;
  prodBottleTin: string;

  // Process
  processTag: string;
  processHeading: string;
  processDescription: string;
  processStep1Title: string;
  processStep1Sub: string;
  processStep1Desc: string;
  processStep2Title: string;
  processStep2Sub: string;
  processStep2Desc: string;
  processStep3Title: string;
  processStep3Sub: string;
  processStep3Desc: string;
  processStep4Title: string;
  processStep4Sub: string;
  processStep4Desc: string;

  // Packaging
  packTag: string;
  packHeading: string;
  packDescription: string;
  packTargetLabel: string;
  packEnquireBtn: string;

  // Calculator
  calcTag: string;
  calcHeading: string;
  calcDescription: string;
  calcSelectProduct: string;
  calcPackagingFormat: string;
  calcQuantity: string;
  calcDeliveryCity: string;
  calcBusinessType: string;
  calcPhoneOptional: string;
  calcSummaryHeading: string;
  calcSummaryFormat: string;
  calcSummaryVolume: string;
  calcSummaryDestination: string;
  calcSummarySegment: string;
  calcSummaryDispatch: string;
  calcPerksTitle: string;
  calcPerksDesc: string;
  calcSendWhatsApp: string;

  // Branches
  branchTag: string;
  branchHeading: string;
  branchDescription: string;
  branchFilterAll: string;
  branchFilterBlr: string;
  branchFilterInter: string;
  branchDirectLine: string;

  // About
  aboutTag: string;
  aboutHeading: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  aboutP4: string;
  aboutMottoLabel: string;
  aboutMottoText: string;
  aboutPillar1Tag: string;
  aboutPillar1Title: string;
  aboutPillar1Desc: string;
  aboutPillar2Tag: string;
  aboutPillar2Title: string;
  aboutPillar2Desc: string;
  aboutPillar3Tag: string;
  aboutPillar3Title: string;
  aboutPillar3Desc: string;

  // Modal
  modalTag: string;
  modalHeading: string;
  modalSubheading: string;
  modalProduct: string;
  modalPackaging: string;
  modalQuantity: string;
  modalCity: string;
  modalName: string;
  modalBusiness: string;
  modalPhone: string;
  modalSubmit: string;
  modalSentTitle: string;
  modalSentDesc: string;
  modalClose: string;

  // Footer
  footerProducts: string;
  footerPackaging: string;
  footerContacts: string;
  footerRights: string;
  footerTrust: string;
  footerPrices: string;
  footerSupply: string;

  // Language Prompt
  langModalTitle: string;
  langModalSubtitle: string;
  langSelectEn: string;
  langSelectTa: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    brandName: "VS ORGANIC",
    brandSubtitle: "Chekku Oils Est. 2018",
    brandTagline: "Quality You Trust. Prices You Deserve.",
    heritageStoryShort:
      "Founded in 2018 by Mr. Vijayan & Mrs. Shanmugapriya. Under the leadership of Mr. Kishore Kumar VS., Managing Director, bringing traditional goodness across 10 branches.",

    navProducts: "Products",
    navProcess: "Process",
    navCalculator: "Calculator",
    navPackaging: "Sizes",
    navBranches: "Branches",
    navAbout: "About",
    navQuoteCTA: "Wholesale Quote",
    navDirectLines: "Direct Lines",

    heroTag: "Traditional Chekku Oils",
    heroHeading: "Pure & Natural Chekku Oils",
    heroSubheading: "Bringing Traditional Goodness to Every Home",
    heroDescription:
      "Founded in 2018, VS Organic supplies unrefined cold-pressed oils at fair, competitive prices. Direct supply from our mills to households, retailers, and supermarkets across 10 branches in Bengaluru and South India.",
    heroWholesaleCTA: "Wholesale Orders",
    heroStatBranches: "10",
    heroStatBranchesSub: "Branches in Bengaluru & States",
    heroStatFounded: "2018",
    heroStatFoundedSub: "Direct Quality Mills",
    heroStatSupply: "100%",
    heroStatSupplySub: "Direct Producer Pricing",
    heroStatEssentials: "6",
    heroStatEssentialsSub: "Oils, Ghee & Jaggery",

    prodTag: "Wholesale & Retail",
    prodHeading: "Product Lineup",
    prodDescription:
      "Cold-pressed chekku oils and organic kitchen essentials in food-grade bottles and 15 kg commercial tins.",
    prodFilterAll: "All Products (6)",
    prodFilterOils: "Chekku Oils (3)",
    prodFilterEssentials: "Ghee & Jaggery (3)",
    prodSizesLabel: "Available Sizes (Bottle & Tin)",
    prodQuoteBtn: "Wholesale Quote",
    prodBottleTin: "Bottle / Tin Available",

    processTag: "Traditional Extraction",
    processHeading: "The Chekku Process",
    processDescription:
      "Unlike industrial expellers that heat seeds past 180°C with chemical solvents, our traditional wooden chekkus preserve natural nutrients and purity.",
    processStep1Title: "Seed Selection",
    processStep1Sub: "Direct Farm Procurement",
    processStep1Desc:
      "Hand-selected groundnuts, native sesame seeds, and sun-dried copra sourced directly from farmers. Tested for zero chemical additives.",
    processStep2Title: "Wooden Chekku",
    processStep2Sub: "Low RPM Pressing",
    processStep2Desc:
      "Cold-pressed in slow Vaagai wood mortars. Operating temperatures remain below 45°C to preserve natural vitamins and aroma.",
    processStep3Title: "Settling & Filter",
    processStep3Sub: "No Chemical Bleaching",
    processStep3Desc:
      "Oil rests naturally for 48 hours and is filtered through virgin cotton mesh. Zero hexane, acid refining, or synthetic bleaching.",
    processStep4Title: "Sealed Dispatch",
    processStep4Sub: "Bottles & Heavy Tins",
    processStep4Desc:
      "Packed into food-grade bottles and tamper-proof 15 kg commercial tins with batch traceability stamps.",

    packTag: "Packaging Options",
    packHeading: "Available Packaging",
    packDescription:
      "Food-grade bottles and heavy commercial tins designed for home kitchens, retail stores, and wholesale kitchens.",
    packTargetLabel: "Target Segment",
    packEnquireBtn: "Enquire This Size",

    calcTag: "B2B Quotations",
    calcHeading: "Wholesale Calculator",
    calcDescription:
      "Direct dispatch to supermarkets, retail stores, and commercial kitchens across India with transparent producer pricing.",
    calcSelectProduct: "Product",
    calcPackagingFormat: "Packaging Format",
    calcQuantity: "Quantity (Units)",
    calcDeliveryCity: "Delivery City",
    calcBusinessType: "Business Type",
    calcPhoneOptional: "Phone (Optional)",
    calcSummaryHeading: "Specification Summary",
    calcSummaryFormat: "Packaging",
    calcSummaryVolume: "Volume",
    calcSummaryDestination: "Destination",
    calcSummarySegment: "Segment",
    calcSummaryDispatch: "Dispatch",
    calcPerksTitle: "Direct Supply Perks",
    calcPerksDesc:
      "No broker margin, freshly pressed batch dates, sealed tamper protection, and reliable logistics across South India.",
    calcSendWhatsApp: "Send Request via WhatsApp",

    branchTag: "Network Presence",
    branchHeading: "10 Branches Network",
    branchDescription:
      "Expanding across Bengaluru and South India to ensure prompt local dispatch and customer care.",
    branchFilterAll: "All 10 Branches",
    branchFilterBlr: "Bengaluru (4)",
    branchFilterInter: "Production Hubs (6)",
    branchDirectLine: "Direct Line",

    aboutTag: "Heritage & Vision",
    aboutHeading: "Founded on Trust.",
    aboutP1:
      "Founded in 2018 by Mr. Vijayan and Mrs. Shanmugapriya, V.S. Organics chekku oil provides pure cold-pressed oils at honest, competitive prices.",
    aboutP2:
      "By connecting production mills directly to customers and supermarkets, we eliminate middleman margins, delivering superior freshness and value.",
    aboutP3:
      "From a single traditional mill, we have expanded to 10 branches across Bengaluru and South India.",
    aboutP4:
      "Under the leadership of Mr. Kishore Kumar VS., Managing Director, we continue to expand direct supply logistics and wholesale accessibility.",
    aboutMottoLabel: "Our Motto",
    aboutMottoText: "Quality You Trust. Prices You Deserve.",
    aboutPillar1Tag: "Pillar One",
    aboutPillar1Title: "Quality",
    aboutPillar1Desc:
      "Native seeds selected directly at farm gates and slowly crushed in wooden chekkus under 45°C without chemicals or solvent extraction.",
    aboutPillar2Tag: "Pillar Two",
    aboutPillar2Title: "Fair Pricing",
    aboutPillar2Desc:
      "Direct mill supply avoids intermediary margins, ensuring fair rates for homes, retailers, and wholesale partners.",
    aboutPillar3Tag: "Pillar Three",
    aboutPillar3Title: "Customer Trust",
    aboutPillar3Desc:
      "Serving thousands of recurring families and retail partners since 2018 through honest quality and prompt service.",

    modalTag: "Wholesale Procurement",
    modalHeading: "Wholesale Quote",
    modalSubheading: "Connect directly with our desk: 9150766377 / 9655336376",
    modalProduct: "Product",
    modalPackaging: "Size / Packaging",
    modalQuantity: "Quantity",
    modalCity: "City / Location",
    modalName: "Your Name",
    modalBusiness: "Store / Business",
    modalPhone: "Mobile Number",
    modalSubmit: "Send via WhatsApp",
    modalSentTitle: "Request Sent",
    modalSentDesc: "Your enquiry has been transmitted to our wholesale desk on WhatsApp.",
    modalClose: "Close",

    footerProducts: "Products",
    footerPackaging: "Sizes & Packaging",
    footerContacts: "Direct Contacts",
    footerRights: "VS ORGANIC chekku OIL. All rights reserved.",
    footerTrust: "Quality You Trust",
    footerPrices: "Prices You Deserve",
    footerSupply: "Direct Supply",

    langModalTitle: "Welcome to VS Organic",
    langModalSubtitle: "Please select your preferred language / உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
    langSelectEn: "English",
    langSelectTa: "தமிழ் (Tamil)",
  },
  ta: {
    brandName: "வி.எஸ் ஆர்கானிக்",
    brandSubtitle: "மரச்செக்கு எண்ணெய்",
    brandTagline: "நீங்கள் நம்பும் தரம். நீங்கள் எதிர்பார்க்கும் நியாயமான விலை.",
    heritageStoryShort:
      "2018-ல் திரு. விஜயன் மற்றும் திருமதி. சண்முகப்பிரியா அவர்களால் தொடங்கப்பட்டது. நிர்வாக இயக்குனர் திரு. கிஷோர் குமார் வி.எஸ் தலைமையில் 10 கிளைகளுடன் பாரம்பரிய நன்மையை வழங்குகிறோம்.",

    navProducts: "பொருட்கள்",
    navProcess: "செக்கு முறை",
    navCalculator: "கணக்கீடு",
    navPackaging: "அளவுகள்",
    navBranches: "கிளைகள்",
    navAbout: "பற்றி",
    navQuoteCTA: "விலை கேட்க",
    navDirectLines: "எண்கள்",

    heroTag: "பாரம்பரிய மரச்செக்கு எண்ணெய்கள்",
    heroHeading: "தூய மற்றும் இயற்கை மரச்செக்கு எண்ணெய்கள்",
    heroSubheading: "பாரம்பரிய நன்மையை ஒவ்வொரு இல்லத்திற்கும் கொண்டு சேர்க்கிறோம்",
    heroDescription:
      "2018-ல் தொடங்கப்பட்ட வி.எஸ் ஆர்கானிக், சுத்தமான மரச்செக்கு எண்ணெய்களை நியாயமான விலையில் வழங்குகிறது. எங்கள் உற்பத்தி நிலையங்களிலிருந்து நேரடியாக இல்லங்கள், சில்லறை வணிகர்கள் மற்றும் பல்பொருள் அங்காடிகளுக்கு 10 கிளைகள் மூலம் விநியோகம் செய்கிறோம்.",
    heroWholesaleCTA: "மொத்த கொள்முதல்",
    heroStatBranches: "10",
    heroStatBranchesSub: "பெங்களூரு & தென் மாநில கிளைகள்",
    heroStatFounded: "2018",
    heroStatFoundedSub: "நேரடி மரச்செக்கு ஆலை",
    heroStatSupply: "100%",
    heroStatSupplySub: "இடைத்தரகர் இல்லாத விலை",
    heroStatEssentials: "6",
    heroStatEssentialsSub: "எண்ணெய்கள், நெய் & வெல்லம்",

    prodTag: "மொத்த & சில்லறை விநியோகம்",
    prodHeading: "எங்கள் தயாரிப்புகள்",
    prodDescription:
      "மரச்செக்கு எண்ணெய்கள் மற்றும் இயற்கை சமையல் பொருட்கள், பாட்டில்கள் மற்றும் 15 கிலோ வணிக டின்னில் கிடைக்கும்.",
    prodFilterAll: "அனைத்து தயாரிப்புகள் (6)",
    prodFilterOils: "மரச்செக்கு எண்ணெய்கள் (3)",
    prodFilterEssentials: "நெய் & வெல்லம் (3)",
    prodSizesLabel: "கிடைக்கும் அளவுகள் (பாட்டில் & டின்)",
    prodQuoteBtn: "மொத்த விலை கேட்க",
    prodBottleTin: "பாட்டில் / டின் கிடைக்கும்",

    processTag: "பாரம்பரிய உற்பத்தி தரம்",
    processHeading: "மரச்செக்கு தயாரிப்பு முறை",
    processDescription:
      "180°C சூடேற்றி ரசாயனம் கலக்கும் நவீன இயந்திரங்கள் போலன்றி, பாரம்பரிய வாகை மரச்செக்கில் குறைந்த வேகத்தில் சத்துக்கள் அழியாமல் பிழியப்படுகிறது.",
    processStep1Title: "தரமான விதைகள் தேர்வு",
    processStep1Sub: "நேரடி விவசாயிகள் கொள்முதல்",
    processStep1Desc:
      "விவசாயிகளிடமிருந்து நேரடியாக தேர்ந்தெடுக்கப்பட்ட நிலக்கடலை, எள் மற்றும் இயற்கையாக உலர்ந்த கொப்பரை தேங்காய். ரசாயனம் கலக்காதது.",
    processStep2Title: "வாகை மரச்செக்கு",
    processStep2Sub: "குறைந்த வேகத்தில் பிழிதல்",
    processStep2Desc:
      "பாரம்பரிய வாகை மர உரலில் மெதுவாக பிழியப்படுகிறது. 45°C-க்கு கீழ் வெப்பநிலை பராமரிக்கப்படுவதால் இயற்கை வைட்டமின்கள் மாறாமல் இருக்கும்.",
    processStep3Title: "இயற்கை வடித்தல்",
    processStep3Sub: "ரசாயன பிளீச்சிங் இல்லை",
    processStep3Desc:
      "எண்ணெய் 48 மணி நேரம் இயற்கையாக படிய வைக்கப்பட்டு, பருத்தி துணியால் வடிகட்டப்படுகிறது. அமிலங்கள் அல்லது ரசாயனங்கள் கலக்கப்படுவதில்லை.",
    processStep4Title: "பாதுகாப்பான பேக்கிங்",
    processStep4Sub: "பாட்டில்கள் & 15 கிலோ டின்",
    processStep4Desc:
      "உணவு தர பாட்டில்கள் மற்றும் சீல் வைக்கப்பட்ட 15 கிலோ வணிக டின்னில் பேக் செய்யப்பட்டு உடனடியாக விநியோகிக்கப்படுகிறது.",

    packTag: "பேக்கிங் அளவுகள்",
    packHeading: "கிடைக்கும் பேக்கிங் வடிவங்கள்",
    packDescription:
      "இல்லங்கள், கடைகள் மற்றும் உணவகங்களுக்கு ஏற்ற வகையில் தரமான பாட்டில்கள் மற்றும் வலுவான டின்னில் கிடைக்கிறது.",
    packTargetLabel: "பயன்பாட்டு பிரிவு",
    packEnquireBtn: "இந்த அளவு கேட்க",

    calcTag: "மொத்த விலை விவரம்",
    calcHeading: "மொத்த விற்பனை கணக்கீடு",
    calcDescription:
      "பல்பொருள் அங்காடிகள், கடைகள் மற்றும் உணவகங்களுக்கு இடைத்தரகர் இன்றி ஆலையிலிருந்து நேரடி விநியோகம்.",
    calcSelectProduct: "பொருள் தேர்வு செய்க",
    calcPackagingFormat: "பேக்கிங் வடிவம்",
    calcQuantity: "எண்ணிக்கை (யூனிட்கள்)",
    calcDeliveryCity: "விநியோக ஊர்",
    calcBusinessType: "வணிக வகை",
    calcPhoneOptional: "தொலைபேசி எண் (விருப்பம்)",
    calcSummaryHeading: "ஆர்டர் விவர சுருக்கம்",
    calcSummaryFormat: "பேக்கிங்",
    calcSummaryVolume: "அளவு",
    calcSummaryDestination: "இடம்",
    calcSummarySegment: "வணிக பிரிவு",
    calcSummaryDispatch: "விநியோகம்",
    calcPerksTitle: "நேரடி விநியோக பலன்கள்",
    calcPerksDesc:
      "இடைத்தரகர் கமிஷன் இல்லை, புதிய பேட்ச் தயாரிப்பு தேதி, பாதுகாப்பான சீல் மற்றும் தென் இந்தியா முழுவதும் துரித போக்குவரத்து.",
    calcSendWhatsApp: "வாட்ஸ்அப் மூலம் விலை கேட்க",

    branchTag: "கிளைகளின் கட்டமைப்பு",
    branchHeading: "எங்கள் 10 கிளைகள்",
    branchDescription:
      "பெங்களூரு மற்றும் தென் மாநிலங்களில் வாடிக்கையாளர்களுக்கு விரைவான விநியோகம் செய்ய 10 கிளைகள் செயல்படுகின்றன.",
    branchFilterAll: "அனைத்து 10 கிளைகள்",
    branchFilterBlr: "பெங்களூரு (4)",
    branchFilterInter: "உற்பத்தி & பிற கிளைகள் (6)",
    branchDirectLine: "நேரடி தொடர்பு",

    aboutTag: "பாரம்பரியமும் தொலைநோக்கும்",
    aboutHeading: "நம்பிக்கையின் மீது உருவானது.",
    aboutP1:
      "2018-ல் திரு. விஜயன் மற்றும் திருமதி. சண்முகப்பிரியா அவர்களால் தொடங்கப்பட்ட வி.எஸ் ஆர்கானிக், தரமான மரச்செக்கு எண்ணெய்களை நியாயமான விலையில் மக்களுக்கு வழங்கி வருகிறது.",
    aboutP2:
      "எண்ணெய் ஆலைகளை நேரடியாக நுகர்வோருடனும் கடைகளுடனும் இணைப்பதன் மூலம் இடைத்தரகர் கமிஷன்களை தவிர்த்து தரமான பொருளை குறைந்த விலையில் தருகிறோம்.",
    aboutP3:
      "ஒரு சிறிய மரச்செக்கு ஆலையாக தொடங்கி, இன்று பெங்களூரு மற்றும் பிற பகுதிகளில் 10 கிளைகளுடன் வளர்ந்துள்ளோம்.",
    aboutP4:
      "நிர்வாக இயக்குனர் திரு. கிஷோர் குமார் வி.எஸ் அவர்களின் தலைமையில் நேரடி விநியோகத்தை மேலும் விரிவுபடுத்தி வருகிறோம்.",
    aboutMottoLabel: "எங்கள் தாரக மந்திரம்",
    aboutMottoText: "நீங்கள் நம்பும் தரம். நீங்கள் எதிர்பார்க்கும் நியாயமான விலை.",
    aboutPillar1Tag: "முதல் பலம்",
    aboutPillar1Title: "நிகரற்ற தரம்",
    aboutPillar1Desc:
      "விவசாயிகளிடமிருந்து நேரடியாக விதை தேர்வு செய்து, வாகை மரச்செக்கில் 45°C-க்கு கீழ் இயற்கை முறையில் பிழியப்படுகிறது.",
    aboutPillar2Tag: "இரண்டாம் பலம்",
    aboutPillar2Title: "நியாயமான விலை",
    aboutPillar2Desc:
      "ஆலையிலிருந்து நேரடி விநியோகம் செய்வதால் இடைத்தரகர் இன்றி குறைந்த மற்றும் நேர்மையான விலை சாத்தியமாகிறது.",
    aboutPillar3Tag: "மூன்றாம் பலம்",
    aboutPillar3Title: "வாடிக்கையாளர் நம்பிக்கை",
    aboutPillar3Desc:
      "2018 முதல் ஆயிரக்கணக்கான குடும்பங்கள் மற்றும் வணிகர்களின் நன்மதிப்பை நேர்மையான சேவையால் பெற்றுள்ளோம்.",

    modalTag: "மொத்த கொள்முதல் பதிவு",
    modalHeading: "மொத்த விலை விவரம்",
    modalSubheading: "நேரடி உதவி எண்கள்: 9150766377 / 9655336376",
    modalProduct: "தயாரிப்பு",
    modalPackaging: "அளவு / பேக்கிங்",
    modalQuantity: "எண்ணிக்கை",
    modalCity: "ஊர் / நகரம்",
    modalName: "உங்கள் பெயர்",
    modalBusiness: "கடை / வணிக பெயர்",
    modalPhone: "கைபேசி எண்",
    modalSubmit: "வாட்ஸ்அப் மூலம் அனுப்பவும்",
    modalSentTitle: "கோரிக்கை அனுப்பப்பட்டது",
    modalSentDesc: "உங்கள் விவரங்கள் எங்கள் மொத்த விற்பனை பிரிவிற்கு வாட்ஸ்அப் வழியாக அனுப்பப்பட்டுள்ளது.",
    modalClose: "மூடுக",

    footerProducts: "தயாரிப்புகள்",
    footerPackaging: "அளவுகள் & பேக்கிங்",
    footerContacts: "நேரடி எண்கள்",
    footerRights: "வி.எஸ் ஆர்கானிக் மரச்செக்கு எண்ணெய். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footerTrust: "நீங்கள் நம்பும் தரம்",
    footerPrices: "நியாயமான விலை",
    footerSupply: "நேரடி விநியோகம்",

    langModalTitle: "வி.எஸ் ஆர்கானிக்-க்கு நல்வரவு",
    langModalSubtitle: "உங்கள் விருப்ப மொழியை தேர்ந்தெடுக்கவும் / Select Your Language",
    langSelectEn: "English",
    langSelectTa: "தமிழ் (Tamil)",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  showPrompt: boolean;
  setShowPrompt: (show: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [showPrompt, setShowPrompt] = useState<boolean>(true);

  useEffect(() => {
    // Check if user has chosen language in this session
    const stored = sessionStorage.getItem("vs_lang_preference");
    if (stored === "en" || stored === "ta") {
      setLanguageState(stored);
      setShowPrompt(false);
    } else {
      setShowPrompt(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    sessionStorage.setItem("vs_lang_preference", lang);
    setShowPrompt(false);

    // Also support Google Translate cookie if Google Translate is active
    try {
      document.cookie = `googtrans=/en/${lang}; path=/;`;
    } catch {
      // Ignore cookie errors
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        showPrompt,
        setShowPrompt,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

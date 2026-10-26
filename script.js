/* EVENIR • Phase 01 V3
 * Three-language locale state: Czech (default), English, German.
 * Future sections can be translated with the same data-i18n attribute pattern.
 * Fully local vanilla JS: no translations API, packages or runtime dependencies.
 */
(() => {
  'use strict';

  // Official SVG artwork on EVENIR's own site, with local PNG fallback for offline previews.
  // If the remote SVG fails before deferred JS starts, naturalWidth === 0 catches it.
  const restorePartnerLogo = (img) => {
    const fallback = img.dataset.logoFallback;
    if (fallback && img.getAttribute('src') !== fallback) {
      img.setAttribute('src', fallback);
      img.removeAttribute('data-logo-fallback');
    }
  };
  document.querySelectorAll('img[data-logo-fallback]').forEach((img) => {
    img.addEventListener('error', () => restorePartnerLogo(img), {once:true});
    if (img.complete && img.naturalWidth === 0) restorePartnerLogo(img);
  });
  const aboutPages = Object.freeze({
    cs:'https://evenir.cz/o-nas/',
    en:'https://evenir.cz/en/about-us/',
    de:'https://evenir.cz/de/uber-uns/'
  });
  const translations = Object.freeze({
    cs: {
      aboutEyebrow: 'POZNEJTE EVENIR',
      aboutTitle1: 'Technologie, na které',
      aboutTitle2: 'se můžete spolehnout.',
      aboutDescription: 'EVENIR spojuje zkušenosti z různých, vzájemně se doplňujících oblastí IT. Firmám pomáhá budovat bezpečné a spolehlivé technologické zázemí a zavádět praktická AI řešení.',
      aboutSecondary: 'Věříme v individuální přístup, kvalitní implementaci a dlouhodobou spolupráci — od infrastruktury a cloudu až po kybernetickou bezpečnost a AI.',
      aboutValuesAria: 'Hodnoty EVENIR',
      aboutValue1: 'Zkušený tým',
      aboutValue2: 'Bezpečnost a stabilita',
      aboutValue3: 'Řešení na míru',
      aboutLink: 'VÍCE O SPOLEČNOSTI',
      aboutVisualAria: 'Tým EVENIR během pracovní porady',
      aboutVisualIT: 'Infrastruktura',
      aboutVisualCloud: 'Cloud',
      aboutVisualSecure: 'Bezpečnost',
      aboutVisualSolutions: 'Řešení',
      aboutVisualCaption: 'ODBORNOST · DŮVĚRA · INOVACE',
      pageTitle: 'EVENIR — Chytré AI řešení pro reálné výsledky',
      descriptionMeta: 'Chytré AI řešení pro reálné výsledky. EVENIR propojuje umělou inteligenci, firemní data a zkušenosti z IT.',
      skip: 'Přeskočit na obsah', navAbout: 'O nás', navServices: 'Služby', navSolutions: 'Řešení',
      navCases: 'Případové studie', navCareers: 'Kariéra', navContact: 'KONTAKT',
      menuServicesTitle: 'Naše služby', menuAllServices: 'Všechny služby', menuAiServices: 'AI řešení',
      menuInfrastructure: 'IT infrastruktura a cloud', menuSecurity: 'Kybernetická bezpečnost',
      menuSolutionsTitle: 'AI pro firmy', menuCustomAI: 'AI řešení na míru',
      heroEyebrow: 'AI ŘEŠENÍ PRO MODERNÍ FIRMY',
      heroTitleLine: 'Chytré AI řešení', heroTitlePrefix: 'pro ', heroTitleAccent: 'reálné výsledky',
      heroDescription: 'Propojujeme umělou inteligenci, vaše data a odborné know-how, abychom vytvářeli praktická řešení, která zefektivňují procesy, šetří čas a podporují růst a konkurenceschopnost vaší firmy.',
      primaryCta: 'PROZKOUMAT AI ŘEŠENÍ', secondaryCta: 'DOMLUVIT KONZULTACI',
      featuresLabel: 'Výhody spolupráce s EVENIR',feature1: 'Řešení na míru',feature2: 'Zkušený tým',
      feature3: 'Bezpečná infrastruktura',feature4: 'Dlouhodobá podpora',partnersTitle: 'DŮVĚŘUJÍ NÁM',
      searchLabel: 'Hledat na webu EVENIR',searchPlaceholder: 'Hledat…',searchButton: 'Hledat',
      searchToggle: 'Otevřít vyhledávání', searchClose: 'Zavřít vyhledávání',
      mobileOpen: 'Otevřít nabídku',mobileClose: 'Zavřít nabídku',
      partnersNext: 'Zobrazit další loga',
      casesDialogEyebrow: 'DALŠÍ FÁZE',casesDialogTitle: 'Případové studie',
      casesDialogBody: 'Tato sekce bude připravena v další fázi návrhu webu. Zatím si můžete prohlédnout oficiální stránky EVENIR.',
      visitSite: 'PŘEJÍT NA WEB EVENIR',close: 'Zavřít',
      hudAnalysis: 'Analýza dat', hudAutomation: 'Automatizace procesů', hudCommunication: 'Lepší komunikace', hudGrowth: 'Růst obchodu', hudAssistant: 'AI asistent', hudIntegration: 'Integrace systémů', partnersCarouselLabel: 'Loga klientů a partnerů',
      customAiStageLabel: 'Ukázka propojení firemních dat s AI a výsledky',
      customAiCaption: 'Data · Analýza · Automatizace · Integrace · Výsledky',
      strategyCardTitle: 'AI strategie a poradenství',
      strategyCardDescription: 'Odhalíme možnosti využití AI, připravíme realistickou cestovní mapu a strategii pro vaši firmu.',
      strategyCardLink: 'PROZKOUMAT AI STRATEGII',
      strategyCardAria: 'AI strategie a poradenství – více informací',
      strategyVisualBadge: 'AI STRATEGIE',
      developmentCardTitle: 'Vývoj a integrace AI',
      developmentCardDescription: 'Vyvíjíme AI řešení na míru, která propojují vaše data, nástroje a procesy – s podporou při implementaci.',
      developmentCardLink: 'PROZKOUMAT VÝVOJ AI',
      developmentCardAria: 'Vývoj a integrace AI – více informací',
      developmentVisualBadge: 'AI INTEGRACE',
      developmentNodeData: 'DATA',
      developmentNodeCloud: 'CLOUD',
      developmentNodeApps: 'APLIKACE',
      developmentCore: 'AI',
      customAiEyebrow: 'NAŠE HLAVNÍ ŘEŠENÍ',
      customAiTitleLine1: 'AI řešení na míru', customAiTitleLine2: 'pro vaše podnikání',
            salesVisualBadge: 'AI PRODEJ', callVisualBadge: 'HLASOVÁ AI',
      catalogueLabel: 'AI produkty a IT služby EVENIR',
      itGridAria: 'Další IT služby EVENIR',
      solutionMore: 'VÍCE INFORMACÍ',
      salesCardTitle: 'Evenir AI Sales – AI pro obchod', callCardTitle: 'Call Care AI – Péče o zákazníky',
      salesCardDescription: 'AI asistent pro obchodní týmy, který podporuje analýzu dat a oslovování zákazníků.',
      salesCardAria: 'Evenir AI Sales – AI pro obchod – více informací',
      callCardDescription: 'Hlasový AI asistent pro zákaznické dotazy, rezervace a každodenní komunikaci.',
      callCardAria: 'Call Care AI – Péče o zákazníky – více informací',
      serviceOutsource: 'Outsourcing kapacit',
      serviceOutsourceSub: 'Specialisté pro váš tým',
      outsourcingAria: 'Outsourcing – více informací',
      serviceInfrastructure: 'Správa infrastruktury',
      serviceInfrastructureSub: 'Monitoring a správa IT',
      infrastructureAria: 'Správa infrastruktury – více informací',
      serviceCloud: 'Cloudové služby',
      serviceCloudSub: 'Flexibilní cloudová řešení',
      cloudAria: 'Cloud – více informací',
      serviceMicrosoft: 'Microsoft 365',
      serviceMicrosoftSub: 'Moderní pracovní prostředí',
      microsoftAria: 'Microsoft 365 – více informací',
      serviceCyber: 'Kyberbezpečnost',
      serviceCyberSub: 'Ochrana firemních systémů',
      cyberAria: 'Kybernetická bezpečnost – více informací',
      serviceVirtual: 'Virtualizace',
      serviceVirtualSub: 'Efektivní virtuální prostředí',
      virtualAria: 'Virtualizace – více informací',
      customAiDescription: 'Navrhujeme a implementujeme AI řešení na míru, která se přizpůsobí vašim procesům, systémům a obchodním cílům.',
      customAiButton: 'VÍCE O AI ŘEŠENÍCH NA MÍRU', customAiListLabel: 'Hlavní přínosy řešení',
      customAiList1: 'Automatizace rutinních úkolů', customAiList2: 'Inteligentní práce s daty',
      customAiList3: 'Integrace s vašimi systémy', customAiList4: 'Měřitelné výsledky',
      customAiInputTitle: 'Data\nz vašich systémů', customAiCore1: 'Analýza', customAiCore2: 'Automatizace', customAiCore3: 'Integrace',
      customAiResultsTitle: 'Vaše výsledky', customAiResult1: 'Efektivnější procesy', customAiResult2: 'Lepší rozhodování', customAiResult3: 'Úspora času', customAiResult4: 'Podpora růstu',

      aiProductsEyebrow: 'NAŠE AI PRODUKTY',
      productSalesTitle: 'Evenir AI Sales',
      productSalesDescription: 'AI asistent pro vyhledávání obchodních příležitostí a personalizovanou komunikaci.',
      productCallTitle: 'Call Care AI',
      productCallDescription: 'AI telefonní asistent pro zákaznické dotazy, rezervace a efektivní zpracování hovorů.',
      productRealTitle: 'Real Estate AI',
      productRealDescription: 'AI řešení pro realitní trh a správu nemovitostí.',
      productMoreTitle: 'A další řešení',
      productMoreDescription: 'Průběžně rozšiřujeme portfolio AI nástrojů a služeb podle potřeb našich klientů.',
      productLink: 'VÍCE INFORMACÍ',
      productAllLink: 'VŠECHNA ŘEŠENÍ',
      practiceEyebrow: 'AI V PRAXI',
      practiceTitleLine1: 'Reálné využití',
      practiceTitleLine2: 'v každodenním podnikání',
      practiceDescription: 'Pomáháme firmám automatizovat rutinní úkoly, pracovat s daty chytřeji a zlepšovat zákaznickou zkušenost.',
      practiceAllLink: 'ZOBRAZIT VŠECHNY MOŽNOSTI →',
      practiceCard1Title: 'Automatizace procesů',
      practiceCard1Text: 'Méně manuální práce, více času na to podstatné.',
      practiceCard2Title: 'Zákaznická komunikace',
      practiceCard2Text: 'Rychlejší a kvalitnější odpovědi 24/7.',
      practiceCard3Title: 'Práce s dokumenty',
      practiceCard3Text: 'Inteligentní zpracování, vyhledávání a třídění.',
      practiceCard4Title: 'Analýza a reporty',
      practiceCard4Text: 'Přehledná data pro lepší rozhodování.',
      integrationEyebrow: 'PROPOJENÍ A INTEGRACE',
      integrationTitle: 'AI, která se přizpůsobí vašemu ekosystému',
      integrationDescription: 'Naše řešení snadno integrujeme do vašich stávajících systémů a procesů.',
      integrationLink: 'VÍCE O INTEGRACI →',
      integrationNode1: 'Microsoft 365',
      integrationNode2: 'CRM',
      integrationNode3: 'ERP',
      integrationNode4: 'Databáze',
      integrationNode5: 'Webové aplikace',
      integrationNode6: 'E-mail a komunikace',
      integrationNode7: 'Interní nástroje',
      integrationNode8: 'Další systémy',
      integrationBenefitsTitle: 'Jedno řešení. Vše propojeno.',
      integrationBenefit1: 'Bezpečná integrace',
      integrationBenefit2: 'Minimální zásah do provozu',
      integrationBenefit3: 'Škálovatelné řešení',
      integrationBenefit4: 'Podpora a rozvoj',
       caseEyebrow: 'PŘÍPADOVÉ STUDIE',
      caseTitleA: 'Příklady využití.',
      caseTitleB: 'AI v praxi.',
      caseDescription: 'Prohlédněte si koncepty studií zaměřených na automatizaci a praktické využití AI. Schválené výsledky doplníme po dodání klientských podkladů.',
      caseAll: 'PROHLÉDNOUT VŠECHNY STUDIE →',
      caseCarouselLabel: 'Přehled návrhů případových studií',
      casePrev: 'Předchozí studie',
      caseNext: 'Další studie',
      caseView: 'Zobrazit studii',
      caseTag1: 'PRŮMYSL',
      caseTag2: 'REAL ESTATE',
      caseTag3: 'SLUŽBY',
      caseTag4: 'OBCHOD',
      caseTag5: 'ZÁKAZNICKÁ PÉČE',
      caseCard1: 'Automatizace zákaznické komunikace',
      caseCard2: 'AI asistent pro realitní kancelář',
      caseCard3: 'Inteligentní zpracování dat a reportů',
      caseCard4: 'AI podpora obchodního procesu',
      caseCard5: 'AI zákaznická podpora',
      securityEyebrow: 'BEZPEČNOST A SPOLEHLIVOST',
      securityTitle: 'Vaše data jsou v bezpečí',
      securityDescription: 'Stavíme na moderní infrastruktuře, osvědčených postupech a odpovědném přístupu k AI.',
      securityCardsLabel: 'Zásady bezpečnosti a spolehlivosti',
      securityCard1Title: 'Ochrana dat',
      securityCard1Text: 'Moderní bezpečnostní standardy',
      securityCard2Title: 'Spolehlivá infrastruktura',
      securityCard2Text: 'Stabilní a škálovatelné prostředí',
      securityCard3Title: 'Odpovědné nasazení AI',
      securityCard3Text: 'Etická a transparentní řešení',

      processEyebrow: 'JAK SPOLUPRACUJEME', processTitle: 'Od nápadu k výsledkům', processStepsLabel: 'Čtyři fáze naší spolupráce',
      processStep1: 'Analýza a konzultace', processStep2: 'Návrh řešení na míru', processStep3: 'Implementace a integrace', processStep4: 'Podpora a rozvoj',
      collabTitle: 'Máte zájem o spolupráci?', collabText: 'Rádi s vámi probereme vaše potřeby a navrhneme vhodné řešení.', collabButton: 'KONTAKTUJTE NÁS',
      faqEyebrow: 'ČASTÉ DOTAZY', faqTitle: 'O AI řešeních', faqDescription: 'Zde najdete odpovědi na nejčastější otázky. Další dotazy s námi můžete probrat individuálně.', faqAllLink: 'ZOBRAZIT VŠECHNY DOTAZY',
      faqQ1: 'Jak dlouho trvá implementace AI řešení?', faqA1: 'Doba závisí na rozsahu, kvalitě dostupných dat a potřebných integracích. Po úvodní konzultaci připravíme plán a odhad harmonogramu.',
      faqQ2: 'Lze AI propojit s našimi stávajícími systémy?', faqA2: 'Často ano. Nejdříve ověříme dostupná rozhraní a bezpečnostní požadavky vašich aplikací, například Microsoft 365, CRM nebo ERP.',
      faqQ3: 'Jak je zajištěna bezpečnost našich dat?', faqA3: 'Bezpečnost řešíme již při návrhu: přístupy, způsob zpracování dat a vhodná technická opatření stanovujeme podle konkrétního prostředí a požadavků.',
      faqQ4: 'Je možné začít menším pilotním projektem?', faqA4: 'Ano, u vhodných zadání lze začít pilotním projektem. Pomůže ověřit přínosy, technickou proveditelnost a další postup před rozšířením.',
      contactEyebrow: "NEZÁVAZNÁ KONZULTACE",
      contactTitle: "Připraveni posunout vaše podnikání vpřed?",
      contactDescription: "Domluvte si nezávaznou konzultaci a zjistěte, jak může AI podpořit vaše cíle.",
      contactFormAria: "Kontaktní formulář EVENIR",
      contactNameLabel: "Jméno a příjmení (povinné)",
      contactEmailLabel: "E-mail (povinný)",
      contactPhoneLabel: "Telefonní číslo",
      contactMessageLabel: "Zpráva",
      contactNamePlaceholder: "Jméno a příjmení *",
      contactEmailPlaceholder: "E-mail *",
      contactPhonePlaceholder: "Telefonní číslo",
      contactMessagePlaceholder: "Zpráva",
      contactSubmit: "ODESLAT",
      contactPrivacyBefore: "Odesláním formuláře souhlasíte se ",
      contactPrivacyLink: "Zásadami ochrany osobních údajů",
      contactNameRequired: "Vyplňte prosím své jméno a příjmení.",
      contactEmailRequired: "Vyplňte prosím e-mailovou adresu.",
      contactEmailInvalid: "Zadejte prosím platnou e-mailovou adresu.",
      contactMailSubject: "Poptávka konzultace — web EVENIR",
      contactMailReady: "Otevře se váš e-mailový program s připravenou zprávou. Zprávu je ještě potřeba v programu odeslat.",
      contactMailBlocked: "Pokud se e-mailový program neotevřel, napište prosím na info@evenir.cz.",
      contactServerError: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo napište na info@evenir.cz.",
      contactServerSuccess: "Děkujeme. Vaše zpráva byla úspěšně přijata.",
      contactEmailBodyName: "Jméno",
      contactEmailBodyEmail: "E-mail",
      contactEmailBodyPhone: "Telefon",
      contactEmailBodyMessage: "Zpráva",
 brandHome: 'EVENIR — úvodní stránka', mainNavLabel: 'Hlavní navigace', mobileNavLabel: 'Mobilní navigace', languageLabel: 'Jazyk webu'
    },
    en: {
      aboutEyebrow: 'ABOUT EVENIR',
      aboutTitle1: 'Technology you can',
      aboutTitle2: 'depend on.',
      aboutDescription: 'EVENIR brings together expertise from complementary areas of IT. We help businesses build secure, reliable technology foundations and introduce practical AI solutions.',
      aboutSecondary: 'We believe in a personal approach, thoughtful implementation and long-term cooperation — from infrastructure and cloud to cyber security and AI.',
      aboutValuesAria: 'EVENIR values',
      aboutValue1: 'Experienced team',
      aboutValue2: 'Security and reliability',
      aboutValue3: 'Tailored solutions',
      aboutLink: 'MORE ABOUT EVENIR',
      aboutVisualAria: 'The EVENIR team collaborating during a meeting',
      aboutVisualIT: 'Infrastructure',
      aboutVisualCloud: 'Cloud',
      aboutVisualSecure: 'Security',
      aboutVisualSolutions: 'Solutions',
      aboutVisualCaption: 'EXPERTISE · TRUST · INNOVATION',
      pageTitle: 'EVENIR — Smart AI solutions for real results',
      descriptionMeta: 'Smart AI solutions for real business results. EVENIR brings together artificial intelligence, business data and IT expertise.',
      skip: 'Skip to main content',navAbout: 'About us',navServices: 'Services',navSolutions: 'Solutions',
      navCases: 'Case studies',navCareers: 'Careers',navContact: 'CONTACT',
      menuServicesTitle: 'Our services',menuAllServices: 'All services',menuAiServices: 'AI solutions',
      menuInfrastructure: 'IT infrastructure & cloud',menuSecurity: 'Cybersecurity',
      menuSolutionsTitle: 'AI for business',menuCustomAI: 'Custom AI solutions',
      heroEyebrow: 'AI SOLUTIONS FOR MODERN BUSINESSES',
      heroTitleLine: 'Smart AI solutions',heroTitlePrefix: 'for ',heroTitleAccent: 'real results',
      heroDescription: 'We combine artificial intelligence, your data and expert know-how to deliver practical solutions that streamline operations, save time, and help your business grow and compete.',
      primaryCta: 'EXPLORE AI SOLUTIONS',secondaryCta: 'BOOK A CONSULTATION',
      featuresLabel: 'Why work with EVENIR',feature1: 'Tailored solutions',feature2: 'Experienced team',
      feature3: 'Secure infrastructure',feature4: 'Long-term support',partnersTitle: 'TRUSTED BY',
      searchLabel: 'Search EVENIR',searchPlaceholder: 'Search…',searchButton: 'Search',
      searchToggle: 'Open search',searchClose: 'Close search',
      mobileOpen: 'Open navigation menu',mobileClose: 'Close navigation menu',
      partnersNext: 'Show more partner logos',
      casesDialogEyebrow: 'NEXT DESIGN PHASE',casesDialogTitle: 'Case studies',
      casesDialogBody: 'The case study section will be designed in the next phase. You can visit the current EVENIR website in the meantime.',
      visitSite: 'VISIT EVENIR WEBSITE',close: 'Close',
      hudAnalysis: 'Data analytics', hudAutomation: 'Process automation', hudCommunication: 'Better communication', hudGrowth: 'Business growth', hudAssistant: 'AI assistant', hudIntegration: 'System integration', partnersCarouselLabel: 'Client and partner logos',
      customAiStageLabel: 'Illustration of business data, AI processing and results',
      customAiCaption: 'Data · Analysis · Automation · Integration · Results',
      strategyCardTitle: 'AI Strategy & Consulting',
      strategyCardDescription: 'Discover high-value AI opportunities, shape a practical roadmap and define a solution strategy for your business.',
      strategyCardLink: 'EXPLORE AI STRATEGY',
      strategyCardAria: 'AI Strategy and Consulting – learn more',
      strategyVisualBadge: 'AI STRATEGY',
      developmentCardTitle: 'AI Development & Integration',
      developmentCardDescription: 'Build tailored AI workflows that connect your data, tools and processes—with reliable implementation support.',
      developmentCardLink: 'EXPLORE AI DEVELOPMENT',
      developmentCardAria: 'AI Development and Integration – learn more',
      developmentVisualBadge: 'AI INTEGRATION',
      developmentNodeData: 'DATA',
      developmentNodeCloud: 'CLOUD',
      developmentNodeApps: 'APPS',
      developmentCore: 'AI',
      customAiEyebrow: 'OUR CORE SOLUTION',
      customAiTitleLine1: 'Custom AI Solutions', customAiTitleLine2: 'for your business',
            salesVisualBadge: 'AI SALES', callVisualBadge: 'VOICE AI',
      catalogueLabel: 'EVENIR AI products and IT services',
      itGridAria: 'Additional EVENIR IT services',
      solutionMore: 'MORE INFORMATION',
      salesCardTitle: 'Evenir AI Sales – AI for sales', callCardTitle: 'Call Care AI – Customer care',
      salesCardDescription: 'An AI assistant that helps sales teams analyze data and reach prospective customers.',
      salesCardAria: 'Evenir AI Sales – AI for sales – learn more',
      callCardDescription: 'A voice AI assistant for customer enquiries, bookings and everyday communication.',
      callCardAria: 'Call Care AI – Customer care – learn more',
      serviceOutsource: 'IT staffing',
      serviceOutsourceSub: 'Skilled specialists for your team',
      outsourcingAria: 'Outsourcing – learn more',
      serviceInfrastructure: 'IT infrastructure',
      serviceInfrastructureSub: 'IT operations and monitoring',
      infrastructureAria: 'IT infrastructure management – learn more',
      serviceCloud: 'Cloud services',
      serviceCloudSub: 'Flexible cloud solutions',
      cloudAria: 'Cloud – learn more',
      serviceMicrosoft: 'Microsoft 365',
      serviceMicrosoftSub: 'Modern digital workplace',
      microsoftAria: 'Microsoft 365 – learn more',
      serviceCyber: 'Cyber security',
      serviceCyberSub: 'Protecting business systems',
      cyberAria: 'Cyber security – learn more',
      serviceVirtual: 'Virtualization',
      serviceVirtualSub: 'Efficient virtual environments',
      virtualAria: 'Virtualization – learn more',
      customAiDescription: 'We design and implement tailored AI solutions that adapt to your processes, systems and business goals.',
      customAiButton: 'MORE ABOUT CUSTOM AI SOLUTIONS', customAiListLabel: 'Main solution benefits',
      customAiList1: 'Automation of routine tasks', customAiList2: 'Intelligent work with data',
      customAiList3: 'Integration with your systems', customAiList4: 'Measurable results',
      customAiInputTitle: 'Data\nfrom your systems', customAiCore1: 'Analysis', customAiCore2: 'Automation', customAiCore3: 'Integration',
      customAiResultsTitle: 'Your results', customAiResult1: 'More efficient processes', customAiResult2: 'Better decision-making', customAiResult3: 'Time savings', customAiResult4: 'Growth support',

      aiProductsEyebrow: 'OUR AI PRODUCTS',
      productSalesTitle: 'Evenir AI Sales',
      productSalesDescription: 'An AI assistant for identifying sales opportunities and personalized communication.',
      productCallTitle: 'Call Care AI',
      productCallDescription: 'An AI phone assistant for customer enquiries, bookings and efficient call handling.',
      productRealTitle: 'Real Estate AI',
      productRealDescription: 'AI solutions for the real estate market and property management.',
      productMoreTitle: 'And more solutions',
      productMoreDescription: 'We continuously expand our portfolio of AI tools and services based on client needs.',
      productLink: 'MORE INFORMATION',
      productAllLink: 'ALL SOLUTIONS',
      practiceEyebrow: 'AI IN PRACTICE',
      practiceTitleLine1: 'Real use cases',
      practiceTitleLine2: 'for everyday business',
      practiceDescription: 'We help companies automate routine work, work smarter with data and improve customer experience.',
      practiceAllLink: 'SEE ALL USE CASES →',
      practiceCard1Title: 'Process automation',
      practiceCard1Text: 'Less manual work, more time for what matters.',
      practiceCard2Title: 'Customer communication',
      practiceCard2Text: 'Faster and higher-quality responses 24/7.',
      practiceCard3Title: 'Document workflows',
      practiceCard3Text: 'Intelligent processing, search and classification.',
      practiceCard4Title: 'Analytics and reporting',
      practiceCard4Text: 'Clear data for better decision-making.',
      integrationEyebrow: 'CONNECTIONS & INTEGRATION',
      integrationTitle: 'AI that adapts to your ecosystem',
      integrationDescription: 'We integrate our solutions smoothly into your existing systems and processes.',
      integrationLink: 'MORE ABOUT INTEGRATION →',
      integrationNode1: 'Microsoft 365',
      integrationNode2: 'CRM',
      integrationNode3: 'ERP',
      integrationNode4: 'Databases',
      integrationNode5: 'Web applications',
      integrationNode6: 'Email & communication',
      integrationNode7: 'Internal tools',
      integrationNode8: 'Other systems',
      integrationBenefitsTitle: 'One solution. Fully connected.',
      integrationBenefit1: 'Secure integration',
      integrationBenefit2: 'Minimal operational disruption',
      integrationBenefit3: 'Scalable solution',
      integrationBenefit4: 'Support and growth',
       caseEyebrow: 'CASE STUDIES',
      caseTitleA: 'Project concepts.',
      caseTitleB: 'Designed for impact.',
      caseDescription: 'Explore case-study concepts focused on automation and practical AI. Verified client outcomes will be added when approved case materials are available.',
      caseAll: 'VIEW ALL CASE STUDIES →',
      caseCarouselLabel: 'Case study concept carousel',
      casePrev: 'Previous case study',
      caseNext: 'Next case study',
      caseView: 'View study',
      caseTag1: 'INDUSTRY',
      caseTag2: 'REAL ESTATE',
      caseTag3: 'SERVICES',
      caseTag4: 'SALES',
      caseTag5: 'CUSTOMER CARE',
      caseCard1: 'Automated customer communication',
      caseCard2: 'AI assistant for a real estate agency',
      caseCard3: 'Intelligent data processing and reporting',
      caseCard4: 'AI-powered sales workflows',
      caseCard5: 'AI customer support',
      securityEyebrow: 'SECURITY & RELIABILITY',
      securityTitle: 'Your data is in safe hands',
      securityDescription: 'We build on modern infrastructure, established practices and a responsible approach to AI.',
      securityCardsLabel: 'Security and reliability principles',
      securityCard1Title: 'Data protection',
      securityCard1Text: 'Modern security standards',
      securityCard2Title: 'Reliable infrastructure',
      securityCard2Text: 'Stable and scalable environment',
      securityCard3Title: 'Responsible AI',
      securityCard3Text: 'Ethical and transparent solutions',

      processEyebrow: 'HOW WE WORK', processTitle: 'From idea to impact', processStepsLabel: 'Our four-step collaboration process',
      processStep1: 'Discovery & consultation', processStep2: 'Tailored solution design', processStep3: 'Deployment & integration', processStep4: 'Support & growth',
      collabTitle: 'Ready to work together?', collabText: 'Tell us about your goals. We will discuss your needs and explore the right approach.', collabButton: 'CONTACT US',
      faqEyebrow: 'FREQUENTLY ASKED QUESTIONS', faqTitle: 'About AI solutions', faqDescription: 'Find answers to common questions. We are happy to discuss your specific requirements.', faqAllLink: 'VIEW ALL QUESTIONS',
      faqQ1: 'How long does AI implementation take?', faqA1: 'The timeframe depends on scope, data readiness and required integrations. After the initial consultation, we can outline a plan and an estimated schedule.',
      faqQ2: 'Can AI connect to our existing systems?', faqA2: 'Often, yes. We first assess the available interfaces and security requirements of your tools, such as Microsoft 365, CRM or ERP platforms.',
      faqQ3: 'How is our data protected?', faqA3: 'We consider security from the design stage, evaluating access controls, data processing and appropriate technical safeguards for your environment and requirements.',
      faqQ4: 'Can we start with a smaller pilot project?', faqA4: 'Yes, where suitable, a pilot can help validate the value, technical feasibility and next steps before wider rollout.',
      contactEyebrow: "LET’S TALK",
      contactTitle: "Ready to move your business forward?",
      contactDescription: "Book a no-obligation consultation and discover how AI can support your goals.",
      contactFormAria: "EVENIR enquiry form",
      contactNameLabel: "Full name (required)",
      contactEmailLabel: "Email (required)",
      contactPhoneLabel: "Phone number",
      contactMessageLabel: "Message",
      contactNamePlaceholder: "Full name *",
      contactEmailPlaceholder: "Email *",
      contactPhonePlaceholder: "Phone number",
      contactMessagePlaceholder: "Message",
      contactSubmit: "SEND",
      contactPrivacyBefore: "By submitting this form, you agree to the ",
      contactPrivacyLink: "Privacy Policy",
      contactNameRequired: "Please enter your full name.",
      contactEmailRequired: "Please enter your email address.",
      contactEmailInvalid: "Please enter a valid email address.",
      contactMailSubject: "Consultation enquiry — EVENIR website",
      contactMailReady: "Your email app should open with a prepared message. You still need to press Send in your email app.",
      contactMailBlocked: "If no email app opened, please email info@evenir.cz directly.",
      contactServerError: "Your message could not be sent. Please try again or email info@evenir.cz.",
      contactServerSuccess: "Thank you. Your enquiry has been received.",
      contactEmailBodyName: "Name",
      contactEmailBodyEmail: "Email",
      contactEmailBodyPhone: "Phone",
      contactEmailBodyMessage: "Message",
 brandHome: 'EVENIR — homepage', mainNavLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation', languageLabel: 'Website language'
    },
    de: {
      aboutEyebrow: 'ÜBER EVENIR',
      aboutTitle1: 'Technologie, auf die Sie',
      aboutTitle2: 'sich verlassen können.',
      aboutDescription: 'EVENIR vereint Kompetenzen aus unterschiedlichen, sich ergänzenden IT-Bereichen. Wir unterstützen Unternehmen mit einer sicheren, zuverlässigen IT-Infrastruktur und praxistauglichen KI-Lösungen.',
      aboutSecondary: 'Wir stehen für persönliche Betreuung, sorgfältige Umsetzung und langfristige Zusammenarbeit — von Infrastruktur und Cloud bis hin zu Cybersicherheit und KI.',
      aboutValuesAria: 'Werte von EVENIR',
      aboutValue1: 'Erfahrenes Team',
      aboutValue2: 'Sicherheit und Zuverlässigkeit',
      aboutValue3: 'Individuelle Lösungen',
      aboutLink: 'MEHR ÜBER EVENIR',
      aboutVisualAria: 'Das EVENIR-Team bei einer gemeinsamen Besprechung',
      aboutVisualIT: 'Infrastruktur',
      aboutVisualCloud: 'Cloud',
      aboutVisualSecure: 'Sicherheit',
      aboutVisualSolutions: 'Lösungen',
      aboutVisualCaption: 'KOMPETENZ · VERTRAUEN · INNOVATION',
      pageTitle: 'EVENIR — Intelligente KI-Lösungen für echte Ergebnisse',
      descriptionMeta: 'Intelligente KI-Lösungen für messbare Geschäftsergebnisse. EVENIR verbindet künstliche Intelligenz, Unternehmensdaten und IT-Know-how.',
      skip: 'Zum Inhalt springen',navAbout: 'Über uns',navServices: 'Leistungen',navSolutions: 'Lösungen',
      navCases: 'Referenzprojekte',navCareers: 'Karriere',navContact: 'KONTAKT',
      menuServicesTitle: 'Unsere Leistungen',menuAllServices: 'Alle Leistungen',menuAiServices: 'KI-Lösungen',
      menuInfrastructure: 'IT-Infrastruktur & Cloud',menuSecurity: 'Cybersicherheit',
      menuSolutionsTitle: 'KI für Unternehmen',menuCustomAI: 'Individuelle KI-Lösungen',
      heroEyebrow: 'KI-LÖSUNGEN FÜR MODERNE UNTERNEHMEN',
      heroTitleLine: 'Intelligente KI-Lösungen',heroTitlePrefix: 'für ',heroTitleAccent: 'echte Ergebnisse',
      heroDescription: 'Wir verbinden künstliche Intelligenz, Ihre Daten und fundiertes Fachwissen zu praxisnahen Lösungen, die Prozesse optimieren, Zeit sparen und das Wachstum und die Wettbewerbsfähigkeit Ihres Unternehmens fördern.',
      primaryCta: 'KI-LÖSUNGEN ENTDECKEN',secondaryCta: 'BERATUNG VEREINBAREN',
      featuresLabel: 'Ihre Vorteile mit EVENIR',feature1: 'Maßgeschneiderte Lösungen',feature2: 'Erfahrenes Team',
      feature3: 'Sichere Infrastruktur',feature4: 'Langfristiger Support',partnersTitle: 'SIE VERTRAUEN UNS',
      searchLabel: 'EVENIR durchsuchen',searchPlaceholder: 'Suchen…',searchButton: 'Suchen',
      searchToggle: 'Suche öffnen',searchClose: 'Suche schließen',
      mobileOpen: 'Menü öffnen',mobileClose: 'Menü schließen',
      partnersNext: 'Weitere Partnerlogos anzeigen',
      casesDialogEyebrow: 'NÄCHSTE PROJEKTPHASE',casesDialogTitle: 'Referenzprojekte',
      casesDialogBody: 'Der Bereich mit Referenzprojekten wird in der nächsten Designphase erstellt. Bis dahin können Sie die offizielle EVENIR-Website besuchen.',
      visitSite: 'EVENIR-WEBSITE BESUCHEN',close: 'Schließen',
      hudAnalysis: 'Datenanalyse', hudAutomation: 'Prozessautomatisierung', hudCommunication: 'Bessere Kommunikation', hudGrowth: 'Geschäftswachstum', hudAssistant: 'KI-Assistent', hudIntegration: 'Systemintegration', partnersCarouselLabel: 'Kunden- und Partnerlogos',
      customAiStageLabel: 'Darstellung von Unternehmensdaten, KI-Verarbeitung und Ergebnissen',
      customAiCaption: 'Daten · Analyse · Automatisierung · Integration · Ergebnisse',
      strategyCardTitle: 'KI-Strategie & Beratung',
      strategyCardDescription: 'Identifizieren Sie wertvolle KI-Potenziale und entwickeln Sie eine praxisnahe Roadmap für Ihr Unternehmen.',
      strategyCardLink: 'KI-STRATEGIE ENTDECKEN',
      strategyCardAria: 'KI-Strategie und Beratung – mehr erfahren',
      strategyVisualBadge: 'KI-STRATEGIE',
      developmentCardTitle: 'KI-Entwicklung & Integration',
      developmentCardDescription: 'Maßgeschneiderte KI-Workflows verbinden Daten, Tools und Prozesse – mit zuverlässiger Unterstützung bei der Einführung.',
      developmentCardLink: 'KI-ENTWICKLUNG ENTDECKEN',
      developmentCardAria: 'KI-Entwicklung und Integration – mehr erfahren',
      developmentVisualBadge: 'KI-INTEGRATION',
      developmentNodeData: 'DATEN',
      developmentNodeCloud: 'CLOUD',
      developmentNodeApps: 'APPS',
      developmentCore: 'KI',
      customAiEyebrow: 'UNSERE KERNLÖSUNG',
      customAiTitleLine1: 'Individuelle KI-Lösungen', customAiTitleLine2: 'für Ihr Unternehmen',
            salesVisualBadge: 'KI-VERTRIEB', callVisualBadge: 'SPRACH-KI',
      catalogueLabel: 'EVENIR KI-Produkte und IT-Leistungen',
      itGridAria: 'Weitere IT-Leistungen von EVENIR',
      solutionMore: 'MEHR ERFAHREN',
      salesCardTitle: 'Evenir AI Sales – KI für Vertrieb', callCardTitle: 'Call Care AI – Kundenbetreuung',
      salesCardDescription: 'KI-Unterstützung für Vertriebsteams bei Datenanalyse und Kundenansprache.',
      salesCardAria: 'Evenir AI Sales – KI für Vertrieb – mehr erfahren',
      callCardDescription: 'Ein Sprach-KI-Assistent für Kundenanfragen, Termine und tägliche Kommunikation.',
      callCardAria: 'Call Care AI – Kundenbetreuung – mehr erfahren',
      serviceOutsource: 'IT-Fachkräfte',
      serviceOutsourceSub: 'Fachkräfte für Ihr Team',
      outsourcingAria: 'Outsourcing – mehr erfahren',
      serviceInfrastructure: 'IT-Infrastruktur',
      serviceInfrastructureSub: 'IT-Betrieb und Monitoring',
      infrastructureAria: 'IT-Infrastrukturmanagement – mehr erfahren',
      serviceCloud: 'Cloud-Dienste',
      serviceCloudSub: 'Flexible Cloud-Lösungen',
      cloudAria: 'Cloud – mehr erfahren',
      serviceMicrosoft: 'Microsoft 365',
      serviceMicrosoftSub: 'Moderner digitaler Arbeitsplatz',
      microsoftAria: 'Microsoft 365 – mehr erfahren',
      serviceCyber: 'Cybersicherheit',
      serviceCyberSub: 'Schutz Ihrer Unternehmenssysteme',
      cyberAria: 'Cybersicherheit – mehr erfahren',
      serviceVirtual: 'Virtualisierung',
      serviceVirtualSub: 'Effiziente virtuelle Umgebungen',
      virtualAria: 'Virtualisierung – mehr erfahren',
      customAiDescription: 'Wir entwerfen und implementieren maßgeschneiderte KI-Lösungen, die sich an Ihre Prozesse, Systeme und Geschäftsziele anpassen.',
      customAiButton: 'MEHR ÜBER INDIVIDUELLE KI-LÖSUNGEN', customAiListLabel: 'Zentrale Vorteile der Lösung',
      customAiList1: 'Automatisierung von Routineaufgaben', customAiList2: 'Intelligente Arbeit mit Daten',
      customAiList3: 'Integration in Ihre Systeme', customAiList4: 'Messbare Ergebnisse',
      customAiInputTitle: 'Daten\naus Ihren Systemen', customAiCore1: 'Analyse', customAiCore2: 'Automatisierung', customAiCore3: 'Integration',
      customAiResultsTitle: 'Ihre Ergebnisse', customAiResult1: 'Effizientere Prozesse', customAiResult2: 'Bessere Entscheidungen', customAiResult3: 'Zeitersparnis', customAiResult4: 'Wachstumsunterstützung',

      aiProductsEyebrow: 'UNSERE KI-PRODUKTE',
      productSalesTitle: 'Evenir AI Sales',
      productSalesDescription: 'Ein KI-Assistent zur Identifizierung von Vertriebschancen und für personalisierte Kommunikation.',
      productCallTitle: 'Call Care AI',
      productCallDescription: 'Ein KI-Telefonassistent für Kundenanfragen, Reservierungen und effiziente Gesprächsabwicklung.',
      productRealTitle: 'Real Estate AI',
      productRealDescription: 'KI-Lösungen für den Immobilienmarkt und die Verwaltung von Immobilien.',
      productMoreTitle: 'Und weitere Lösungen',
      productMoreDescription: 'Wir erweitern unser Portfolio an KI-Tools und Services laufend entsprechend den Bedürfnissen unserer Kunden.',
      productLink: 'MEHR ERFAHREN',
      productAllLink: 'ALLE LÖSUNGEN',
      practiceEyebrow: 'KI IN DER PRAXIS',
      practiceTitleLine1: 'Praxisnahe Nutzung',
      practiceTitleLine2: 'im täglichen Geschäft',
      practiceDescription: 'Wir helfen Unternehmen, Routineaufgaben zu automatisieren, Daten intelligenter zu nutzen und die Kundenerfahrung zu verbessern.',
      practiceAllLink: 'ALLE MÖGLICHKEITEN ANZEIGEN →',
      practiceCard1Title: 'Prozessautomatisierung',
      practiceCard1Text: 'Weniger manuelle Arbeit, mehr Zeit für das Wesentliche.',
      practiceCard2Title: 'Kundenkommunikation',
      practiceCard2Text: 'Schnellere und bessere Antworten – rund um die Uhr.',
      practiceCard3Title: 'Dokumentenarbeit',
      practiceCard3Text: 'Intelligente Verarbeitung, Suche und Klassifizierung.',
      practiceCard4Title: 'Analyse und Reporting',
      practiceCard4Text: 'Klare Daten für bessere Entscheidungen.',
      integrationEyebrow: 'VERBINDUNG & INTEGRATION',
      integrationTitle: 'KI, die sich an Ihr Ökosystem anpasst',
      integrationDescription: 'Unsere Lösungen integrieren wir reibungslos in Ihre bestehenden Systeme und Prozesse.',
      integrationLink: 'MEHR ZUR INTEGRATION →',
      integrationNode1: 'Microsoft 365',
      integrationNode2: 'CRM',
      integrationNode3: 'ERP',
      integrationNode4: 'Datenbanken',
      integrationNode5: 'Webanwendungen',
      integrationNode6: 'E-Mail & Kommunikation',
      integrationNode7: 'Interne Tools',
      integrationNode8: 'Weitere Systeme',
      integrationBenefitsTitle: 'Eine Lösung. Alles verbunden.',
      integrationBenefit1: 'Sichere Integration',
      integrationBenefit2: 'Minimaler Eingriff in den Betrieb',
      integrationBenefit3: 'Skalierbare Lösung',
      integrationBenefit4: 'Support und Weiterentwicklung',
       caseEyebrow: 'REFERENZPROJEKTE',
      caseTitleA: 'Projektkonzepte.',
      caseTitleB: 'Praxisnah gedacht.',
      caseDescription: 'Entdecken Sie Konzepte für Fallstudien rund um Automatisierung und praktische KI. Verifizierte Ergebnisse ergänzen wir, sobald freigegebene Kundendaten vorliegen.',
      caseAll: 'ALLE FALLSTUDIEN ANSEHEN →',
      caseCarouselLabel: 'Karussell mit Fallstudienentwürfen',
      casePrev: 'Vorherige Fallstudie',
      caseNext: 'Nächste Fallstudie',
      caseView: 'Studie ansehen',
      caseTag1: 'INDUSTRIE',
      caseTag2: 'IMMOBILIEN',
      caseTag3: 'DIENSTLEISTUNGEN',
      caseTag4: 'VERTRIEB',
      caseTag5: 'KUNDENSERVICE',
      caseCard1: 'Automatisierte Kundenkommunikation',
      caseCard2: 'KI-Assistent für Immobilienbüros',
      caseCard3: 'Intelligente Datenverarbeitung und Berichte',
      caseCard4: 'KI-gestützte Vertriebsprozesse',
      caseCard5: 'KI-Kundensupport',
      securityEyebrow: 'SICHERHEIT & ZUVERLÄSSIGKEIT',
      securityTitle: 'Ihre Daten sind geschützt',
      securityDescription: 'Wir setzen auf moderne Infrastruktur, bewährte Verfahren und einen verantwortungsvollen Umgang mit KI.',
      securityCardsLabel: 'Grundsätze für Sicherheit und Zuverlässigkeit',
      securityCard1Title: 'Datenschutz',
      securityCard1Text: 'Moderne Sicherheitsstandards',
      securityCard2Title: 'Zuverlässige Infrastruktur',
      securityCard2Text: 'Stabile und skalierbare Umgebung',
      securityCard3Title: 'Verantwortliche KI',
      securityCard3Text: 'Ethische und transparente Lösungen',

      processEyebrow: 'SO ARBEITEN WIR', processTitle: 'Von der Idee zum Ergebnis', processStepsLabel: 'Unser Ablauf in vier Schritten',
      processStep1: 'Analyse & Beratung', processStep2: 'Individuelle Konzeption', processStep3: 'Umsetzung & Integration', processStep4: 'Betreuung & Ausbau',
      collabTitle: 'Interesse an einer Zusammenarbeit?', collabText: 'Wir sprechen gerne über Ihre Ziele und erarbeiten einen passenden Ansatz.', collabButton: 'KONTAKTIEREN SIE UNS',
      faqEyebrow: 'HÄUFIGE FRAGEN', faqTitle: 'Über KI-Lösungen', faqDescription: 'Hier finden Sie Antworten auf häufige Fragen. Individuelle Anliegen besprechen wir gerne persönlich.', faqAllLink: 'ALLE FRAGEN ANSEHEN',
      faqQ1: 'Wie lange dauert die Implementierung einer KI-Lösung?', faqA1: 'Die Dauer hängt vom Umfang, dem Datenstand und den nötigen Integrationen ab. Nach dem Erstgespräch erstellen wir einen Plan und eine Zeitschätzung.',
      faqQ2: 'Lässt sich KI in unsere bestehenden Systeme integrieren?', faqA2: 'Oft ja. Zuerst prüfen wir die Schnittstellen und Sicherheitsanforderungen Ihrer Anwendungen, etwa Microsoft 365, CRM- oder ERP-Systeme.',
      faqQ3: 'Wie werden unsere Daten geschützt?', faqA3: 'Sicherheit berücksichtigen wir bereits bei der Konzeption. Zugriffsrechte, Datenverarbeitung und geeignete technische Maßnahmen werden an Ihre Umgebung angepasst.',
      faqQ4: 'Können wir mit einem kleineren Pilotprojekt beginnen?', faqA4: 'Ja, sofern es zur Aufgabenstellung passt. Ein Pilot hilft, Nutzen, technische Machbarkeit und nächste Schritte vor einer breiteren Einführung zu prüfen.',
      contactEyebrow: "KONTAKTIEREN SIE UNS",
      contactTitle: "Bereit, Ihr Unternehmen voranzubringen?",
      contactDescription: "Vereinbaren Sie ein unverbindliches Gespräch und erfahren Sie, wie KI Ihre Ziele unterstützen kann.",
      contactFormAria: "EVENIR Kontaktformular",
      contactNameLabel: "Vor- und Nachname (Pflichtfeld)",
      contactEmailLabel: "E-Mail (Pflichtfeld)",
      contactPhoneLabel: "Telefonnummer",
      contactMessageLabel: "Nachricht",
      contactNamePlaceholder: "Vor- und Nachname *",
      contactEmailPlaceholder: "E-Mail *",
      contactPhonePlaceholder: "Telefonnummer",
      contactMessagePlaceholder: "Nachricht",
      contactSubmit: "SENDEN",
      contactPrivacyBefore: "Mit dem Absenden des Formulars stimmen Sie der ",
      contactPrivacyLink: "Datenschutzerklärung",
      contactNameRequired: "Bitte geben Sie Ihren Vor- und Nachnamen ein.",
      contactEmailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      contactEmailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      contactMailSubject: "Beratungsanfrage — EVENIR Website",
      contactMailReady: "Ihr E-Mail-Programm sollte sich mit einer vorbereiteten Nachricht öffnen. Bitte senden Sie die Nachricht noch selbst ab.",
      contactMailBlocked: "Falls sich kein E-Mail-Programm öffnet, schreiben Sie bitte an info@evenir.cz.",
      contactServerError: "Die Nachricht konnte nicht gesendet werden. Versuchen Sie es erneut oder schreiben Sie an info@evenir.cz.",
      contactServerSuccess: "Vielen Dank. Ihre Anfrage wurde erfolgreich empfangen.",
      contactEmailBodyName: "Name",
      contactEmailBodyEmail: "E-Mail",
      contactEmailBodyPhone: "Telefon",
      contactEmailBodyMessage: "Nachricht",
 brandHome: 'EVENIR — Startseite', mainNavLabel: 'Hauptnavigation', mobileNavLabel: 'Mobile Navigation', languageLabel: 'Sprache der Website',
    }
  });
  const LOCALE_KEY = 'evenir-site-language';
  const safeStore = {
    get(){ try { return localStorage.getItem(LOCALE_KEY); } catch{ return null; } },
    set(value){ try { localStorage.setItem(LOCALE_KEY,value); } catch { /* private browsing */ } }
  };
  let locale='cs';
  const $=(s, root=document)=>root.querySelector(s);
  const $$=(s, root=document)=>[...root.querySelectorAll(s)];

  function setLocale(next, persist=true){
    if(!translations[next]) return;
    locale=next;
    const t=translations[next];
    document.documentElement.lang=next;
    document.querySelectorAll('[data-about-official]').forEach(link => {
      link.href = aboutPages[next] || aboutPages.cs;
    });
    document.title=t.pageTitle;
    $('meta[name="description"]').setAttribute('content',t.descriptionMeta);
    $$('[data-i18n]').forEach(el => { const key=el.dataset.i18n; if(t[key]!==undefined) el.textContent=t[key]; });
    $$('[data-i18n-placeholder]').forEach(el=>{ const key=el.dataset.i18nPlaceholder; if(t[key]!==undefined) el.placeholder=t[key]; });
    $$('[data-i18n-aria-label]').forEach(el=>{ const key=el.dataset.i18nAriaLabel; if(t[key]!==undefined) el.setAttribute('aria-label',t[key]); });
    $$('[data-lang]').forEach(el=>{
      const isActive=el.dataset.lang===next;
      el.classList.toggle('is-active',isActive);
      el.setAttribute('aria-pressed',String(isActive));
      if(isActive) el.setAttribute('aria-current','true'); else el.removeAttribute('aria-current');
    });
    $('[data-search-toggle]').setAttribute('aria-label',t.searchToggle);
    $('[data-search-toggle]').setAttribute('title',t.searchToggle);
    $('[data-search-close]').setAttribute('aria-label',t.searchClose);
    $('[data-partners-next]').setAttribute('aria-label',t.partnersNext);
    $('[data-partners-next]').setAttribute('title',t.partnersNext);
    $('[data-close-cases]').setAttribute('aria-label',t.close);
    document.documentElement.dataset.locale = next;
    updateMobileToggleLabel();
    if(persist) safeStore.set(next);
    document.dispatchEvent(new CustomEvent('evenir:languagechange',{detail:{locale:next}}));
  }

  // Navigation dropdowns: click, outside click and Esc work with keyboard & mouse.
  function closeMenus(){
    $$('[data-menu]').forEach(menu=>{
      const button=$('button',menu); const panel=$('.nav-dropdown',menu);
      panel.hidden=true;button.setAttribute('aria-expanded','false');
    });
  }
  $$('[data-menu]').forEach(menu=>{
    const button=$('button',menu);const panel=$('.nav-dropdown',menu);
    button.addEventListener('click',()=>{
      const shouldOpen=panel.hidden;
      closeMenus();
      panel.hidden=!shouldOpen;
      button.setAttribute('aria-expanded',String(shouldOpen));
    });
  });

  const mobileButton=$('[data-mobile-toggle]');
  const mobilePanel=$('#mobile-navigation');
  function updateMobileToggleLabel(){
    const isOpen=mobileButton.getAttribute('aria-expanded')==='true';
    mobileButton.setAttribute('aria-label',translations[locale][isOpen?'mobileClose':'mobileOpen']);
  }
  function toggleMobile(force){
    const next=typeof force==='boolean'?force:mobilePanel.hidden;
    mobilePanel.hidden=!next;
    mobileButton.setAttribute('aria-expanded',String(next));
    updateMobileToggleLabel();
  }
  mobileButton.addEventListener('click',()=>toggleMobile());

  const searchForm=$('#site-search');
  const searchButton=$('[data-search-toggle]');
  function closeSearch(){searchForm.hidden=true;searchButton.setAttribute('aria-expanded','false');}
  searchButton.addEventListener('click',()=>{
    const shouldOpen=searchForm.hidden;
    closeMenus();closeSearch();toggleMobile(false);
    searchForm.hidden=!shouldOpen;searchButton.setAttribute('aria-expanded',String(shouldOpen));
    if(shouldOpen) $('#search-input').focus();
  });
  $('[data-search-close]').addEventListener('click',()=>{closeSearch();searchButton.focus();});
  $('[data-mobile-search]').addEventListener('click',()=>{toggleMobile(false);searchButton.click();});

  const casesDialog=$('#cases-dialog');
  // The approved case-studies section replaces the previous future-phase modal.
  $$('[data-open-cases]').forEach(b=>b.addEventListener('click',()=>{
    closeMenus();toggleMobile(false);
    window.location.href='case-studies.html';
  }));
  $('[data-close-cases]').addEventListener('click',()=>casesDialog.close());
  casesDialog.addEventListener('click',e=>{if(e.target===casesDialog)casesDialog.close();});

  document.addEventListener('click',e=>{
    if(!e.target.closest('[data-menu]'))closeMenus();
    if(!e.target.closest('#mobile-navigation')&&!e.target.closest('[data-mobile-toggle]') && !mobilePanel.hidden)toggleMobile(false);
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeMenus();toggleMobile(false);closeSearch();}
  });
  window.addEventListener('resize',()=>{if(window.innerWidth>1160)toggleMobile(false);});

  // Logo marquee: measured group-width loop (no visual jump), pointer drag, arrow,
  // hover/focus pause, reduced-motion support, and automatic off-screen suspension.
  const marqueeViewport = $('[data-partners-viewport]');
  const marqueeTrack = $('[data-partners-track]');
  const marqueeFirstGroup = $('.partners__group', marqueeTrack);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const partnersNext = $('[data-partners-next]');
  let logoOffset = 0;
  let lastFrame = 0;
  let onScreen = true;
  let hovered = false;
  let focused = false;
  let dragging = false;
  let pointerX = 0;
  let burstUntil = 0;
  let rafId = 0;
  const groupWidth = () => marqueeFirstGroup.getBoundingClientRect().width;
  const normalize = () => {
    const width = groupWidth();
    if(width) logoOffset = ((logoOffset % width) + width) % width;
  };
  const renderMarquee = () => {
    normalize();
    marqueeTrack.style.transform = `translate3d(${-logoOffset}px, 0, 0)`;
  };
  function animate(now) {
    rafId = requestAnimationFrame(animate);
    if (!lastFrame) { lastFrame = now; return; }
    const dt = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    if (!onScreen || document.hidden || reduceMotion.matches || hovered || focused || dragging) return;
    logoOffset += (now < burstUntil ? 255 : 33) * dt;
    renderMarquee();
  }
  marqueeViewport.addEventListener('pointerenter', () => { hovered = true; });
  marqueeViewport.addEventListener('pointerleave', () => { hovered = false; });
  marqueeViewport.addEventListener('focusin', () => { focused = true; });
  marqueeViewport.addEventListener('focusout', e => {
    if(!marqueeViewport.contains(e.relatedTarget)) focused = false;
  });
  marqueeViewport.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true;
    pointerX = e.clientX;
    marqueeViewport.setPointerCapture(e.pointerId);
  });
  marqueeViewport.addEventListener('pointermove', e => {
    if (!dragging) return;
    logoOffset += pointerX - e.clientX;
    pointerX = e.clientX;
    renderMarquee();
  });
  ['pointerup','pointercancel','lostpointercapture'].forEach(type => {
    marqueeViewport.addEventListener(type, () => { dragging = false; });
  });
  partnersNext.addEventListener('click', () => {
    if (reduceMotion.matches) {
      logoOffset += groupWidth() / 6;
      renderMarquee();
    } else {
      hovered = false;
      burstUntil = performance.now() + 950;
      logoOffset += 30;
      renderMarquee();
    }
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      onScreen = entries.some(entry => entry.isIntersecting);
      lastFrame = 0;
    }, { threshold: 0 });
    observer.observe(marqueeViewport);
  }
  document.addEventListener('visibilitychange', () => { lastFrame = 0; });
  window.addEventListener('resize', renderMarquee, { passive: true });
  // Avoid a layout jump before the first paint and normalize after images resolve.
  renderMarquee();
  rafId = requestAnimationFrame(animate);

  $$('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLocale(button.dataset.lang)));
  // Match reference default (Czech), but respect a visitor's previous manual selection.
  setLocale(safeStore.get() || 'cs',false);

  // Accessible study carousel: button controls and touch/trackpad scroll.
  const caseScroller=$('[data-cases-scroller]');
  const casePrev=$('[data-case-prev]');
  const caseNext=$('[data-case-next]');
  if(caseScroller && casePrev && caseNext){
    const getCardStep=()=>{
      const c=caseScroller.querySelector('.case-tile');
      if(!c) return caseScroller.clientWidth;
      const styles=getComputedStyle(caseScroller);
      return c.getBoundingClientRect().width+parseFloat(styles.columnGap||styles.gap||0);
    };
    const updateControls=()=>{
      const max=caseScroller.scrollWidth-caseScroller.clientWidth;
      casePrev.disabled=caseScroller.scrollLeft<=2;
      caseNext.disabled=caseScroller.scrollLeft>=max-2;
    };
    const slide=(direction)=>{
      caseScroller.scrollBy({left:direction*getCardStep(),behavior:reduceMotion.matches?'instant':'smooth'});
      window.setTimeout(updateControls,500);
    };
    casePrev.addEventListener('click',()=>slide(-1));
    caseNext.addEventListener('click',()=>slide(1));
    caseScroller.addEventListener('scroll',updateControls,{passive:true});
    window.addEventListener('resize',updateControls);
    updateControls();
  }


  // Phase 06 FAQ accordion: one open item, keyboard-native buttons, synchronized ARIA.
  const faqEntries = $$('[data-faq-item]');
  faqEntries.forEach(entry => {
    const trigger = $('[data-faq-trigger]', entry);
    const panel = $(`#${trigger.getAttribute('aria-controls')}`);
    trigger.addEventListener('click', () => {
      const shouldOpen = trigger.getAttribute('aria-expanded') !== 'true';
      faqEntries.forEach(other => {
        const btn = $('[data-faq-trigger]', other);
        const answer = $(`#${btn.getAttribute('aria-controls')}`);
        btn.setAttribute('aria-expanded', 'false');
        answer.hidden = true;
        other.classList.remove('is-open');
      });
      if (shouldOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
        entry.classList.add('is-open');
      }
    });
  });

  // “View all questions” expands every answer in place instead of navigating away.
  const faqShowAll = $('[data-faq-show-all]');
  if (faqShowAll) faqShowAll.addEventListener('click', () => {
    faqEntries.forEach(entry => {
      const btn = $('[data-faq-trigger]', entry);
      const answer = $(`#${btn.getAttribute('aria-controls')}`);
      btn.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
      entry.classList.add('is-open');
    });
    const firstFaq = $('[data-faq-trigger]');
    if (firstFaq) firstFaq.focus({preventScroll:true});
  });


  // Phase 07 contact form. Standalone build defaults to mailto; no fake success.
  // CMS integration: put a same-origin HTTPS POST URL in data-endpoint on #contact-form.
  const contactForm = $('[data-contact-form]');
  if(contactForm){
    const fields={
      name: $('#contact-name',contactForm),
      email: $('#contact-email',contactForm),
      phone: $('#contact-phone',contactForm),
      message: $('#contact-message',contactForm)
    };
    const status = $('[data-contact-status]', contactForm);
    const submitBtn = $('[data-contact-submit]', contactForm);
    const statusMessage = (msg, kind='info') => {
      status.textContent=msg;
      status.dataset.kind=kind;
    };
    const fieldMessages=()=>{
      const t=translations[locale];
      if(!fields.name.value.trim()) return {target:fields.name,message:t.contactNameRequired};
      if(!fields.email.value.trim()) return {target:fields.email,message:t.contactEmailRequired};
      if(!fields.email.validity.valid) return {target:fields.email,message:t.contactEmailInvalid};
      return null;
    };
    Object.values(fields).forEach(field => field.addEventListener('input', () => {
      field.removeAttribute('aria-invalid');
      field.setCustomValidity('');
      if(status.dataset.kind==='error') statusMessage('');
    }));
    document.addEventListener('evenir:languagechange',()=>{
      contactForm.setAttribute('aria-label',translations[locale].contactFormAria);
      Object.values(fields).forEach(field=>{field.setCustomValidity('');field.removeAttribute('aria-invalid')});
      if(status.textContent) statusMessage('');
    });
    contactForm.addEventListener('submit',async (event)=>{
      event.preventDefault();
      const invalid=fieldMessages();
      if(invalid){
        invalid.target.setCustomValidity(invalid.message);
        invalid.target.setAttribute('aria-invalid','true');
        statusMessage(invalid.message,'error');
        invalid.target.reportValidity();
        invalid.target.focus();
        return;
      }
      const t=translations[locale];
      const data={
        name:fields.name.value.trim(),
        email:fields.email.value.trim(),
        phone:fields.phone.value.trim(),
        message:fields.message.value.trim(),
        language:locale
      };
      const endpoint=contactForm.dataset.endpoint?.trim();
      if(endpoint){
        // A real CMS endpoint must validate, rate-limit and send the message server-side.
        if(!/^\//.test(endpoint) && !/^https:\/\//.test(endpoint)){
          statusMessage(t.contactServerError,'error');return;
        }
        submitBtn.disabled=true;
        try{
          const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),credentials:'same-origin'});
          if(!response.ok) throw new Error('Failed to submit');
          contactForm.reset();
          statusMessage(t.contactServerSuccess);
        }catch(_error){statusMessage(t.contactServerError,'error')}
        finally{submitBtn.disabled=false}
      }else{
        const body=[
          `${t.contactEmailBodyName}: ${data.name}`,
          `${t.contactEmailBodyEmail}: ${data.email}`,
          `${t.contactEmailBodyPhone}: ${data.phone || '—'}`,
          '',
          `${t.contactEmailBodyMessage}:`,
          data.message || '—'
        ].join('\n');
        const emailUrl='mailto:info@evenir.cz?subject='+encodeURIComponent(t.contactMailSubject)+'&body='+encodeURIComponent(body);
        statusMessage(t.contactMailReady);
        // Navigating to the OS email handler does not imply an email has been sent.
        window.location.href=emailUrl;
      }
    });
  }
})();

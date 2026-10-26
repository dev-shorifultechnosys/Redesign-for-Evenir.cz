(() => {
 'use strict';
 const t={
  cs:{eyebrow:'NAVIGACE',title:'Mapa webu',intro:'Rychlý přehled sekcí webu a služeb EVENIR.',group1:'Na tomto webu',home:'Úvod',products:'AI produkty',cases:'Případové studie',security:'Bezpečnost',faq:'Časté dotazy',contact:'Kontakt',group2:'Řešení & služby',custom:'AI řešení na míru',services:'Všechny IT služby',group3:'Společnost',about:'O nás',career:'Kariéra',privacy:'Zásady ochrany osobních údajů',extendedHead:'Další stránky',extendedAbout:'O společnosti EVENIR',extendedServices:'Všechny služby',extendedSolutions:'AI a technologie',extendedCases:'Ukázkové scénáře',extendedCareers:'Kariéra'},
  en:{eyebrow:'NAVIGATION',title:'Sitemap',intro:'A quick overview of EVENIR website sections and services.',group1:'On this website',home:'Home',products:'AI products',cases:'Case studies',security:'Security',faq:'Frequently asked questions',contact:'Contact',group2:'Solutions & services',custom:'Custom AI solutions',services:'All IT services',group3:'Company',about:'About us',career:'Careers',privacy:'Privacy Policy',extendedHead:'More pages',extendedAbout:'About EVENIR',extendedServices:'All services',extendedSolutions:'AI & technology platforms',extendedCases:'Example project concepts',extendedCareers:'Careers'},
  de:{eyebrow:'NAVIGATION',title:'Sitemap',intro:'Ein Überblick über die Websitebereiche und Leistungen von EVENIR.',group1:'Auf dieser Website',home:'Startseite',products:'KI-Produkte',cases:'Fallstudien',security:'Sicherheit',faq:'Häufige Fragen',contact:'Kontakt',group2:'Lösungen & Leistungen',custom:'Individuelle KI-Lösungen',services:'Alle IT-Leistungen',group3:'Unternehmen',about:'Über uns',career:'Karriere',privacy:'Datenschutzerklärung',extendedHead:'Weitere Seiten',extendedAbout:'Über EVENIR',extendedServices:'Alle Leistungen',extendedSolutions:'KI & Technologieplattformen',extendedCases:'Projektbeispiele',extendedCareers:'Karriere'}
 };
 function setLang(locale){if(!t[locale])return;document.documentElement.lang=locale;document.title='EVENIR — '+t[locale].title;
 document.querySelectorAll('[data-map-i18n]').forEach(el=>{const v=t[locale][el.dataset.mapI18n];if(v)el.textContent=v});
 document.querySelectorAll('[data-map-lang]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.mapLang===locale))});
 try{localStorage.setItem('evenir-site-language',locale)}catch{}
 document.dispatchEvent(new CustomEvent('evenir:languagechange',{detail:{locale}}));}
 document.querySelectorAll('[data-map-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.mapLang)));
 let lang='cs';try{lang=localStorage.getItem('evenir-site-language')||'cs'}catch{}setLang(t[lang]?lang:'cs');
})();

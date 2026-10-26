/* EVENIR Phase 08: footer translations and real Cookie information dialog.
 * Shared between homepage, case-study template and sitemap.
 * No network requests, trackers, extra storage or dependencies.
 */
(() => {
  'use strict';
  const dict = {
    cs: {
      homeAria: 'EVENIR — domovská stránka', socialAria: 'Sociální sítě',
      facebookPending: 'Facebook — odkaz na oficiální profil bude doplněn',
      youtubePending: 'YouTube — odkaz na oficiální kanál bude doplněn',
      servicesHeading: 'S ČÍM VÁM POMŮŽEME', customAI: 'Custom AI řešení', cloud: 'Cloud',
      cyber: 'Kybernetická bezpečnost', outsource: 'IT outsourcing', infrastructure: 'Správa infrastruktury', virtualization: 'Virtualizace',
      contactHeading: 'RYCHLÉ KONTAKTY', city: 'Praha 3', district: 'Žižkov 130 00',
      badgesAria: 'Partnerská označení uvedená v podkladech klienta',
      rights: 'Všechna práva vyhrazena.', legalAria: 'Právní odkazy', privacy: 'Zásady ochrany osobních údajů', cookies: 'Cookies', sitemap: 'Mapa webu',
      cookieTitle: 'Cookies a soukromí', cookieText: 'Tento statický návrh nepoužívá analytické ani reklamní cookies. Vybraný jazyk ukládá lokálně v prohlížeči, abyste ho nemuseli nastavovat znovu.',
      cookieStatus: 'Žádné volitelné cookies nejsou aktivní.', cookieClose: 'Rozumím', closeAria: 'Zavřít informace o cookies'
    },
    en: {
      homeAria: 'EVENIR — homepage', socialAria: 'Social networks',
      facebookPending: 'Facebook — official profile link pending', youtubePending: 'YouTube — official channel link pending',
      servicesHeading: 'HOW WE CAN HELP', customAI: 'Custom AI Solutions', cloud: 'Cloud',
      cyber: 'Cybersecurity', outsource: 'IT outsourcing', infrastructure: 'Infrastructure management', virtualization: 'Virtualization',
      contactHeading: 'QUICK CONTACTS', city: 'Prague 3', district: 'Žižkov 130 00',
      badgesAria: 'Partner badges as supplied in the client reference',
      rights: 'All rights reserved.', legalAria: 'Legal links', privacy: 'Privacy Policy', cookies: 'Cookies', sitemap: 'Sitemap',
      cookieTitle: 'Cookies & privacy', cookieText: 'This static website preview does not use analytics or advertising cookies. It only stores your language choice locally in your browser for convenience.',
      cookieStatus: 'No optional cookies are active.', cookieClose: 'Got it', closeAria: 'Close cookie information'
    },
    de: {
      homeAria: 'EVENIR — Startseite', socialAria: 'Soziale Netzwerke',
      facebookPending: 'Facebook — Link zum offiziellen Profil folgt', youtubePending: 'YouTube — Link zum offiziellen Kanal folgt',
      servicesHeading: 'WIE WIR HELFEN KÖNNEN', customAI: 'Individuelle KI-Lösungen', cloud: 'Cloud',
      cyber: 'Cybersicherheit', outsource: 'IT-Outsourcing', infrastructure: 'Infrastrukturmanagement', virtualization: 'Virtualisierung',
      contactHeading: 'SCHNELLE KONTAKTE', city: 'Prag 3', district: 'Žižkov 130 00',
      badgesAria: 'Partnerkennzeichnungen nach Kundenvorlage',
      rights: 'Alle Rechte vorbehalten.', legalAria: 'Rechtliche Informationen', privacy: 'Datenschutzerklärung', cookies: 'Cookies', sitemap: 'Sitemap',
      cookieTitle: 'Cookies & Datenschutz', cookieText: 'Diese statische Website-Vorschau verwendet keine Analyse- oder Werbe-Cookies. Lediglich Ihre Sprachauswahl wird lokal im Browser gespeichert.',
      cookieStatus: 'Es sind keine optionalen Cookies aktiv.', cookieClose: 'Verstanden', closeAria: 'Cookie-Informationen schließen'
    }
  };
  const select = (q,root=document)=>root.querySelector(q);
  const selectAll = (q,root=document)=>Array.from(root.querySelectorAll(q));
  const cookieDialog = select('#e-footer-cookie-dialog');
  const opener = select('[data-footer-cookies]');
  let currentLocale = 'cs';
  const readLang = ()=> {
    const lang=document.documentElement.lang;
    if(dict[lang])return lang;
    try {const persisted=localStorage.getItem('evenir-site-language'); if(dict[persisted])return persisted;}catch{}
    return 'cs';
  };
  function setLocale(lang){
    if(!dict[lang])return;
    currentLocale=lang;
    const t=dict[lang];
    selectAll('[data-footer-i18n]').forEach(node=>{
      if(Object.prototype.hasOwnProperty.call(t,node.dataset.footerI18n))node.textContent=t[node.dataset.footerI18n];
    });
    selectAll('[data-footer-aria]').forEach(node=>{
      const value=t[node.dataset.footerAria];if(value)node.setAttribute('aria-label',value);
      if(node.hasAttribute('title')&&value)node.title=value;
    });
    selectAll('[data-footer-cookie-close]').forEach(button=>{
      if(button.classList.contains('e-cookie-dialog__close'))button.setAttribute('aria-label',t.closeAria);
    });
  }
  setLocale(readLang());
  const yearNode=select('[data-footer-year]');
  if(yearNode)yearNode.textContent=String(new Date().getFullYear());
  document.addEventListener('evenir:languagechange', event=>{
    setLocale(event.detail?.locale||readLang());
  });
  // Detail and sitemap locales are managed by their own JS. They update HTML lang first.
  document.addEventListener('click', event=>{
    if(event.target.closest('[data-case-lang],[data-map-lang]')){
      queueMicrotask(()=>setLocale(readLang()));
    }
  });
  if(cookieDialog&&opener){
    let previousFocus=null;
    opener.addEventListener('click',()=>{
      previousFocus=document.activeElement;
      if(typeof cookieDialog.showModal==='function')cookieDialog.showModal();
      else cookieDialog.setAttribute('open','');
      const closeButton=select('.e-cookie-dialog__close',cookieDialog);
      if(closeButton)closeButton.focus();
    });
    const close=()=>{
      if(typeof cookieDialog.close==='function')cookieDialog.close();
      else cookieDialog.removeAttribute('open');
      if(previousFocus?.focus)previousFocus.focus();
    };
    selectAll('[data-footer-cookie-close]',cookieDialog).forEach(btn=>btn.addEventListener('click',close));
    cookieDialog.addEventListener('click',event=>{
      if(event.target===cookieDialog)close();
    });
  }
})();

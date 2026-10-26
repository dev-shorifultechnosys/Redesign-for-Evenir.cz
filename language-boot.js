/* EVENIR instant locale — executes before deferred page scripts. */
(()=>{'use strict';
 const key='evenir-site-language';
 function initial(){let l='cs';try{l=localStorage.getItem(key)||'cs'}catch{}return ['cs','en','de'].includes(l)?l:'cs'}
 const first=initial();document.documentElement.lang=first;document.documentElement.dataset.locale=first;
 window.__evenirInitialLocale=first;
 document.addEventListener('pointerdown',event=>{const btn=event.target.closest?.('[data-lang],[data-case-lang],[data-map-lang]');if(!btn)return;const next=btn.dataset.lang||btn.dataset.caseLang||btn.dataset.mapLang;if(!['cs','en','de'].includes(next))return;
   try{localStorage.setItem(key,next)}catch{}document.documentElement.lang=next;document.documentElement.dataset.locale=next;
   document.querySelectorAll('[data-lang],[data-case-lang],[data-map-lang]').forEach(el=>{const active=(el.dataset.lang||el.dataset.caseLang||el.dataset.mapLang)===next;el.classList.toggle('is-active',active);el.setAttribute('aria-pressed',String(active))});
 },true);
})();

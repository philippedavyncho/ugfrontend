import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, l as renderScript } from '../chunks/astro/server_0AjLyGG5.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bv64Bh11.mjs';
import { $ as $$MarketingIcon } from '../chunks/MarketingIcon_TLWSRWAh.mjs';
/* empty css                                   */
/* empty css                                               */
export { renderers } from '../renderers.mjs';

const $$InterventionRapide = createComponent(($$result, $$props, $$slots) => {
  const emergencyHighlights = [
    {
      icon: "repair",
      tone: "red",
      title: "BRIS DE",
      subtitle: "GLACE"
    },
    {
      icon: "shield",
      tone: "blue",
      title: "MISE EN",
      subtitle: "SECURITE"
    },
    {
      icon: "glass",
      tone: "blue",
      title: "REPOSE",
      subtitle: "SUR MESURE"
    }
  ];
  const interventionTrustItems = [
    {
      icon: "clock",
      label: "DIAGNOSTIC RAPIDE"
    },
    {
      icon: "shield",
      label: "SITE SECURISE"
    },
    {
      icon: "quality",
      label: "FINITION PROPRE"
    },
    {
      icon: "people",
      label: "PRISE EN CHARGE CLAIRE"
    }
  ];
  const emergencyCases = [
    {
      icon: "repair",
      title: "Bris de glace",
      description: "Fenetre fissuree, vitrage casse ou baie endommagee: nous organisons une intervention rapide pour remettre les lieux en etat."
    },
    {
      icon: "shield",
      title: "Mise en securite",
      description: "Protection provisoire, fermeture de zone et remise en protection des acces pour limiter les risques et les intrusions."
    },
    {
      icon: "glass",
      title: "Vitrine et facade",
      description: "Commerce, hall ou facade vitree: remplacement et reorganisation du vitrage avec une finition propre et professionnelle."
    }
  ];
  const workSteps = [
    {
      step: "01",
      title: "Qualification",
      description: "Nous identifions le type de vitrage, le niveau d'urgence et la meilleure marche a suivre."
    },
    {
      step: "02",
      title: "Securisation",
      description: "La zone est protegee et isolee pour eviter tout risque supplementaire pour les occupants."
    },
    {
      step: "03",
      title: "Remplacement",
      description: "Nous preparons la repose avec les bonnes dimensions, le bon vitrage et la bonne finition."
    }
  ];
  const responseCommitments = [
    "Diagnostic rapide de la casse et de la solution adaptee",
    "Mise en securite immediate si le remplacement n'est pas possible sur place",
    "Organisation du remplacement avec vitrage adapte au support",
    "Finitions propres pour retrouver un site presentable rapidement"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Intervention rapide", "description": "Page dediee aux interventions rapides de vitrerie professionnelle.", "data-astro-cid-pomhtseb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home-shell" data-astro-cid-pomhtseb> <section class="hero-card" data-astro-cid-pomhtseb> <div class="hero-main" data-astro-cid-pomhtseb> <div class="hero-copy" data-astro-cid-pomhtseb> <div class="hero-copy__bg" aria-hidden="true" data-astro-cid-pomhtseb></div> <a class="brand-lockup" href="/" aria-label="Univers Glass" data-astro-cid-pomhtseb> <img class="brand-lockup__logo" src="/goodlogo.png" alt="" aria-hidden="true" width="682" height="366" loading="eager" decoding="async" data-astro-cid-pomhtseb> </a> <h1 class="hero-title" data-astro-cid-pomhtseb> <span data-astro-cid-pomhtseb>INTERVENTION</span> <span class="hero-title--accent" data-astro-cid-pomhtseb>RAPIDE ET</span> <span data-astro-cid-pomhtseb>PROPRE</span> </h1> <span class="hero-rule" aria-hidden="true" data-astro-cid-pomhtseb></span> <p class="hero-description" data-astro-cid-pomhtseb>
En cas de casse, de vitrage fragilise ou de facade a securiser, nous
            intervenons pour proteger vite, remettre en securite et relancer une
            finition serieuse.
</p> <div class="feature-list" data-astro-cid-pomhtseb> ${emergencyHighlights.map((feature) => renderTemplate`<div${addAttribute(`feature-item feature-item--${feature.tone}`, "class")} data-astro-cid-pomhtseb> <span class="feature-item__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": feature.icon, "data-astro-cid-pomhtseb": true })} </span> <span class="feature-item__copy" data-astro-cid-pomhtseb> <span data-astro-cid-pomhtseb>${feature.title}</span> <span data-astro-cid-pomhtseb>${feature.subtitle}</span> </span> </div>`)} </div> <div class="hero-actions" data-astro-cid-pomhtseb> <a class="hero-button hero-button--red" href="/devis" data-astro-cid-pomhtseb> <span class="hero-button__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow", "data-astro-cid-pomhtseb": true })} </span> <span class="hero-button__copy" data-astro-cid-pomhtseb> <small data-astro-cid-pomhtseb>DECLENCHER UNE</small> <strong data-astro-cid-pomhtseb>DEMANDE D'INTERVENTION</strong> </span> </a> <a class="hero-button hero-button--blue" href="#intervention-method" data-astro-cid-pomhtseb> <span class="hero-button__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "shield", "data-astro-cid-pomhtseb": true })} </span> <span class="hero-button__copy" data-astro-cid-pomhtseb> <small data-astro-cid-pomhtseb>VOIR LA</small> <strong data-astro-cid-pomhtseb>METHODE D'INTERVENTION</strong> </span> </a> </div> </div> <div class="hero-media" data-astro-cid-pomhtseb> <img src="/fonds.png" alt="Facade vitree moderne a remettre rapidement en securite" loading="eager" data-astro-cid-pomhtseb> </div> </div> <div class="hero-bottom" data-astro-cid-pomhtseb> <div class="hero-bottom__items" data-astro-cid-pomhtseb> ${interventionTrustItems.map((item) => renderTemplate`<div class="trust-item" data-astro-cid-pomhtseb> <span class="trust-item__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-pomhtseb": true })} </span> <span class="trust-item__label" data-astro-cid-pomhtseb>${item.label}</span> </div>`)} </div> <a class="contact-panel" href="/contact" data-astro-cid-pomhtseb> <span class="contact-panel__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "mail", "data-astro-cid-pomhtseb": true })} </span> <span class="contact-panel__copy" data-astro-cid-pomhtseb> <strong data-astro-cid-pomhtseb>CONTACTEZ-NOUS</strong> <small data-astro-cid-pomhtseb>Detaillez l'urgence et la prise en charge souhaitee</small> </span> </a> </div> </section> <section class="showcase-section" data-animate="showcase" data-astro-cid-pomhtseb> <div class="showcase-heading" data-astro-cid-pomhtseb> <span class="section-kicker" data-astro-cid-pomhtseb>CAS PRIS EN CHARGE</span> <h2 data-astro-cid-pomhtseb>Des urgences traitees avec la meme tenue visuelle que la home.</h2> <p data-astro-cid-pomhtseb>
Chaque intervention reste cadre, lisible et organisee, que l'on parle
          d'une casse simple, d'une securisation provisoire ou d'une reprise
          plus complete.
</p> </div> <div class="intervention-cases-grid" data-astro-cid-pomhtseb> ${emergencyCases.map((item) => renderTemplate`<article class="intervention-case-card" data-astro-cid-pomhtseb> <span class="intervention-case-card__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-pomhtseb": true })} </span> <h3 data-astro-cid-pomhtseb>${item.title}</h3> <p data-astro-cid-pomhtseb>${item.description}</p> </article>`)} </div> </section> <section class="signature-section" id="intervention-method" data-animate="signature" data-astro-cid-pomhtseb> <div class="signature-copy" data-astro-cid-pomhtseb> <span class="section-kicker" data-astro-cid-pomhtseb>METHODE D'INTERVENTION</span> <h2 data-astro-cid-pomhtseb>Une methode claire pour aller vite sans improviser.</h2> <p data-astro-cid-pomhtseb>
L'urgence n'empeche pas la precision. Qualification, securisation et
          remplacement suivent une logique simple et solide.
</p> </div> <div class="signature-grid" data-astro-cid-pomhtseb> ${workSteps.map((item) => renderTemplate`<article class="signature-card" data-astro-cid-pomhtseb> <span class="signature-card__step" data-astro-cid-pomhtseb>${item.step}</span> <h3 data-astro-cid-pomhtseb>${item.title}</h3> <p data-astro-cid-pomhtseb>${item.description}</p> </article>`)} </div> </section> <section class="showcase-section" data-astro-cid-pomhtseb> <div class="showcase-heading" data-astro-cid-pomhtseb> <span class="section-kicker" data-astro-cid-pomhtseb>ENGAGEMENT CHANTIER</span> <h2 data-astro-cid-pomhtseb>Ce que vous devez retrouver apres notre passage.</h2> <p data-astro-cid-pomhtseb>
Une zone plus sure, une fermeture mieux geree et une reprise
          visuellement propre pour retrouver vite un site presentable.
</p> </div> <div class="intervention-commitments-grid" data-astro-cid-pomhtseb> ${responseCommitments.map((item) => renderTemplate`<article class="intervention-commitment-card" data-astro-cid-pomhtseb> <span class="intervention-commitment-card__mark" aria-hidden="true" data-astro-cid-pomhtseb></span> <p data-astro-cid-pomhtseb>${item}</p> </article>`)} </div> </section> <section class="signature-section intervention-cta-section" data-astro-cid-pomhtseb> <div class="signature-copy" data-astro-cid-pomhtseb> <span class="section-kicker" data-astro-cid-pomhtseb>BESOIN D'AGIR VITE</span> <h2 data-astro-cid-pomhtseb>Declenchez votre demande d'intervention.</h2> <p data-astro-cid-pomhtseb>
Donnez les dimensions, le type de vitrage et la nature du besoin pour
          lancer la prise en charge dans de bonnes conditions.
</p> </div> <div class="intervention-cta-actions" data-astro-cid-pomhtseb> <a class="hero-button hero-button--red" href="/devis" data-astro-cid-pomhtseb> <span class="hero-button__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "quote", "data-astro-cid-pomhtseb": true })} </span> <span class="hero-button__copy" data-astro-cid-pomhtseb> <small data-astro-cid-pomhtseb>ACCEDER AU</small> <strong data-astro-cid-pomhtseb>FORMULAIRE DE DEVIS</strong> </span> </a> <a class="hero-button hero-button--blue" href="/" data-astro-cid-pomhtseb> <span class="hero-button__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": "arrow", "data-astro-cid-pomhtseb": true })} </span> <span class="hero-button__copy" data-astro-cid-pomhtseb> <small data-astro-cid-pomhtseb>REVENIR A</small> <strong data-astro-cid-pomhtseb>L'ACCUEIL</strong> </span> </a> </div> </section> </main> ${renderScript($$result2, "C:/Users/EMMA/ug/ugfrontend/src/pages/intervention-rapide.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/EMMA/ug/ugfrontend/src/pages/intervention-rapide.astro", void 0);

const $$file = "C:/Users/EMMA/ug/ugfrontend/src/pages/intervention-rapide.astro";
const $$url = "/intervention-rapide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InterventionRapide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

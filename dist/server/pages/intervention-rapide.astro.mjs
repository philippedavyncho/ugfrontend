import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D-0x7zcX.mjs';
import 'piccolore';
import { $ as $$MarketingLayout } from '../chunks/MarketingLayout_5Pq_SZ-z.mjs';
import { $ as $$MarketingIcon } from '../chunks/MarketingIcon_Btb0Ru1u.mjs';
/* empty css                                               */
export { renderers } from '../renderers.mjs';

const $$InterventionRapide = createComponent(($$result, $$props, $$slots) => {
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
  const responseCommitments = [
    "Diagnostic rapide de la casse et de la solution adaptee",
    "Mise en securite immediate si le remplacement n'est pas possible sur place",
    "Organisation du remplacement avec vitrage adapte au support",
    "Finitions propres pour retrouver un site presentable rapidement"
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
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Intervention rapide", "description": "Page dediee aux interventions rapides de vitrerie professionnelle.", "data-astro-cid-pomhtseb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-shell intervention-page" data-astro-cid-pomhtseb> <section class="intervention-hero" data-astro-cid-pomhtseb> <div class="intervention-hero__copy" data-astro-cid-pomhtseb> <p class="eyebrow" data-astro-cid-pomhtseb>Intervention rapide</p> <h1 data-astro-cid-pomhtseb>Une intervention vitrerie rapide, propre et organisee.</h1> <p class="intervention-hero__lead" data-astro-cid-pomhtseb>
En cas de casse, de vitrage fragilise ou de facade a securiser, nous
          intervenons avec une logique simple: proteger vite, remplacer juste
          et remettre le site en ordre avec une finition serieuse.
</p> <div class="intervention-actions" data-astro-cid-pomhtseb> <a class="button-link" href="/devis" data-astro-cid-pomhtseb>Demander une intervention</a> <a class="button-link button-link--secondary" href="/" data-astro-cid-pomhtseb>Retour a l'accueil</a> </div> <div class="intervention-flags" aria-label="Points forts" data-astro-cid-pomhtseb> <span data-astro-cid-pomhtseb>Urgence</span> <span data-astro-cid-pomhtseb>Mise en securite</span> <span data-astro-cid-pomhtseb>Remplacement sur mesure</span> </div> </div> <aside class="intervention-hero__panel" data-astro-cid-pomhtseb> <p class="intervention-panel__eyebrow" data-astro-cid-pomhtseb>Ce que nous prenons en charge</p> <ul class="intervention-panel__list" data-astro-cid-pomhtseb> <li data-astro-cid-pomhtseb>Fenetres cassees ou fissurees</li> <li data-astro-cid-pomhtseb>Vitrines de commerce endommagees</li> <li data-astro-cid-pomhtseb>Baies vitrees a remettre en securite</li> <li data-astro-cid-pomhtseb>Parois et ensembles vitres a remplacer</li> </ul> <div class="intervention-panel__note" data-astro-cid-pomhtseb> <strong data-astro-cid-pomhtseb>Objectif:</strong> <span data-astro-cid-pomhtseb>retablir vite la securite, la fermeture et une presentation propre du site.</span> </div> </aside> </section> <section class="intervention-cases" data-astro-cid-pomhtseb> ${emergencyCases.map((item) => renderTemplate`<article class="intervention-case page-card" data-astro-cid-pomhtseb> <span class="intervention-case__icon" data-astro-cid-pomhtseb> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-pomhtseb": true })} </span> <h2 data-astro-cid-pomhtseb>${item.title}</h2> <p data-astro-cid-pomhtseb>${item.description}</p> </article>`)} </section> <section class="intervention-layout" data-astro-cid-pomhtseb> <article class="page-card intervention-steps" data-astro-cid-pomhtseb> <p class="eyebrow" data-astro-cid-pomhtseb>Deroule d'intervention</p> <h2 data-astro-cid-pomhtseb>Une methode claire pour aller vite sans improviser.</h2> <div class="intervention-steps__grid" data-astro-cid-pomhtseb> ${workSteps.map((item) => renderTemplate`<div class="intervention-step" data-astro-cid-pomhtseb> <span class="intervention-step__number" data-astro-cid-pomhtseb>${item.step}</span> <div data-astro-cid-pomhtseb> <h3 data-astro-cid-pomhtseb>${item.title}</h3> <p data-astro-cid-pomhtseb>${item.description}</p> </div> </div>`)} </div> </article> <aside class="page-card intervention-commitments" data-astro-cid-pomhtseb> <p class="eyebrow" data-astro-cid-pomhtseb>Engagement chantier</p> <h2 data-astro-cid-pomhtseb>Ce que vous devez retrouver apres notre passage.</h2> <ul class="intervention-commitments__list" data-astro-cid-pomhtseb> ${responseCommitments.map((item) => renderTemplate`<li data-astro-cid-pomhtseb>${item}</li>`)} </ul> </aside> </section> <section class="intervention-cta" data-astro-cid-pomhtseb> <div data-astro-cid-pomhtseb> <p class="eyebrow" data-astro-cid-pomhtseb>Besoin d'agir vite</p> <h2 data-astro-cid-pomhtseb>Declenchez votre demande d'intervention.</h2> <p data-astro-cid-pomhtseb>
Donnez les dimensions, le type de vitrage et la nature du besoin pour
          lancer la prise en charge dans de bonnes conditions.
</p> </div> <div class="intervention-cta__actions" data-astro-cid-pomhtseb> <a class="button-link" href="/devis" data-astro-cid-pomhtseb>Acceder au devis</a> <a class="button-link button-link--secondary" href="/" data-astro-cid-pomhtseb>Revenir a l'accueil</a> </div> </section> </main>  ` })}`;
}, "C:/Users/EMMA/ug/frontend/src/pages/intervention-rapide.astro", void 0);

const $$file = "C:/Users/EMMA/ug/frontend/src/pages/intervention-rapide.astro";
const $$url = "/intervention-rapide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InterventionRapide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

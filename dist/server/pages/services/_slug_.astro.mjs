import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_D-0x7zcX.mjs';
import 'piccolore';
import { $ as $$MarketingLayout } from '../../chunks/MarketingLayout_5Pq_SZ-z.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug = "service" } = Astro2.params;
  const serviceName = slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  const servicePoints = [
    "Analyse du support et des contraintes de pose",
    "Preparation du vitrage adapte a l'usage et aux dimensions",
    "Finition propre pour un rendu net et durable"
  ];
  const serviceBenefits = [
    {
      title: "Pose maitrisee",
      description: "Des alignements propres, des appuis soignes et une lecture visuelle plus nette du projet."
    },
    {
      title: "Choix du vitrage",
      description: "Le bon niveau d'isolation, de securite ou de transparence selon l'usage attendu."
    },
    {
      title: "Rendu professionnel",
      description: "Une intervention pensee pour la durabilite, la proprete du chantier et la tenue dans le temps."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": `${serviceName} | Univers Glass`, "description": `Presentation du service ${serviceName} pour vitrerie professionnelle.`, "data-astro-cid-tcy35dad": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-shell service-page" data-astro-cid-tcy35dad> <section class="service-hero" data-astro-cid-tcy35dad> <div class="service-hero__copy" data-astro-cid-tcy35dad> <p class="eyebrow" data-astro-cid-tcy35dad>Service vitrerie</p> <h1 data-astro-cid-tcy35dad>${serviceName || "Service"} avec une execution propre et serieuse.</h1> <p data-astro-cid-tcy35dad>
Cette page peut servir de point d'entree SEO ou commercial pour
          presenter un service precis avec un discours plus metier, plus clair
          et mieux cadre pour la prise de contact.
</p> <div class="actions" data-astro-cid-tcy35dad> <a class="button-link" href="/devis" data-astro-cid-tcy35dad>Demander un devis</a> <a class="button-link button-link--secondary" href="/intervention-rapide" data-astro-cid-tcy35dad>Voir l'intervention rapide</a> </div> </div> <aside class="service-hero__panel" data-astro-cid-tcy35dad> <p class="eyebrow" data-astro-cid-tcy35dad>Point de controle</p> <ul data-astro-cid-tcy35dad> ${servicePoints.map((item) => renderTemplate`<li data-astro-cid-tcy35dad>${item}</li>`)} </ul> </aside> </section> <section class="service-grid" data-astro-cid-tcy35dad> ${serviceBenefits.map((item) => renderTemplate`<article class="page-card service-card" data-astro-cid-tcy35dad> <h2 data-astro-cid-tcy35dad>${item.title}</h2> <p data-astro-cid-tcy35dad>${item.description}</p> </article>`)} </section> </main>  ` })}`;
}, "C:/Users/EMMA/ug/frontend/src/pages/services/[slug].astro", void 0);

const $$file = "C:/Users/EMMA/ug/frontend/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

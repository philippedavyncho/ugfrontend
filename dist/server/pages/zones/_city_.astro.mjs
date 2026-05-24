import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_D-0x7zcX.mjs';
import 'piccolore';
import { $ as $$MarketingLayout } from '../../chunks/MarketingLayout_5Pq_SZ-z.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$city = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$city;
  const { city = "votre ville" } = Astro2.params;
  const cityName = city.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  const localPromises = [
    "Interventions organisees pour les urgences et mises en securite",
    "Pose de vitrages et remplacement avec approche propre et professionnelle",
    "Prise de contact simplifiee pour accelerer l'estimation du besoin"
  ];
  const localCards = [
    {
      title: "Urgence locale",
      description: "Une page de zone peut rassurer immediatement sur la capacite d'intervention dans la ville visee."
    },
    {
      title: "Confort commercial",
      description: "Elle peut aussi servir d'entree SEO locale pour les demandes de devis ou de remplacement."
    },
    {
      title: "Discours adapte",
      description: "Le message peut etre affine ensuite avec des services, quartiers ou cas d'usage plus precis."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": `Zone d'intervention ${cityName} | Univers Glass`, "description": `Presentation de la zone d'intervention ${cityName}.`, "data-astro-cid-2a4bxvgd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-shell zone-page" data-astro-cid-2a4bxvgd> <section class="zone-hero" data-astro-cid-2a4bxvgd> <div class="zone-hero__copy" data-astro-cid-2a4bxvgd> <p class="eyebrow" data-astro-cid-2a4bxvgd>Zone d'intervention</p> <h1 data-astro-cid-2a4bxvgd>Univers Glass peut se presenter clairement pour ${cityName || "votre ville"}.</h1> <p data-astro-cid-2a4bxvgd>
Cette page peut accueillir un contenu local plus detaille pour capter
          les demandes de vitrerie dans une ville precise tout en gardant une
          image propre, technique et rassurante.
</p> <div class="actions" data-astro-cid-2a4bxvgd> <a class="button-link" href="/devis" data-astro-cid-2a4bxvgd>Demander un devis</a> <a class="button-link button-link--secondary" href="/intervention-rapide" data-astro-cid-2a4bxvgd>Intervention rapide</a> </div> </div> <aside class="zone-hero__panel" data-astro-cid-2a4bxvgd> <p class="eyebrow" data-astro-cid-2a4bxvgd>Promesse locale</p> <ul data-astro-cid-2a4bxvgd> ${localPromises.map((item) => renderTemplate`<li data-astro-cid-2a4bxvgd>${item}</li>`)} </ul> </aside> </section> <section class="zone-grid" data-astro-cid-2a4bxvgd> ${localCards.map((item) => renderTemplate`<article class="page-card zone-card" data-astro-cid-2a4bxvgd> <h2 data-astro-cid-2a4bxvgd>${item.title}</h2> <p data-astro-cid-2a4bxvgd>${item.description}</p> </article>`)} </section> </main>  ` })}`;
}, "C:/Users/EMMA/ug/frontend/src/pages/zones/[city].astro", void 0);

const $$file = "C:/Users/EMMA/ug/frontend/src/pages/zones/[city].astro";
const $$url = "/zones/[city]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$city,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

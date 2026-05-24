import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D-0x7zcX.mjs';
import 'piccolore';
import { $ as $$MarketingLayout } from '../../chunks/MarketingLayout_5Pq_SZ-z.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Merci = createComponent(($$result, $$props, $$slots) => {
  const nextSteps = [
    "Verifier les dimensions et le type de vitrage a prevoir",
    "Confirmer la nature de l'intervention ou de la pose",
    "Revenir vers vous avec une suite claire et exploitable"
  ];
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Merci", "description": "Confirmation de votre demande.", "data-astro-cid-tqmpshr5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-shell thank-you-page" data-astro-cid-tqmpshr5> <section class="thank-you-hero" data-astro-cid-tqmpshr5> <div class="thank-you-hero__copy" data-astro-cid-tqmpshr5> <p class="eyebrow" data-astro-cid-tqmpshr5>Confirmation recue</p> <h1 data-astro-cid-tqmpshr5>Merci, votre demande est bien prise en compte.</h1> <p data-astro-cid-tqmpshr5>
Le besoin est maintenant pose dans le bon cadre. La suite consiste a
          verifier les informations utiles et a revenir avec une reponse claire.
</p> <div class="actions" data-astro-cid-tqmpshr5> <a class="button-link" href="/" data-astro-cid-tqmpshr5>Retour a l'accueil</a> <a class="button-link button-link--secondary" href="/devis" data-astro-cid-tqmpshr5>Faire un autre devis</a> </div> </div> <aside class="thank-you-hero__panel" data-astro-cid-tqmpshr5> <p class="eyebrow" data-astro-cid-tqmpshr5>Suite logique</p> <ul data-astro-cid-tqmpshr5> ${nextSteps.map((item) => renderTemplate`<li data-astro-cid-tqmpshr5>${item}</li>`)} </ul> </aside> </section> </main>  ` })}`;
}, "C:/Users/EMMA/ug/frontend/src/pages/devis/merci.astro", void 0);

const $$file = "C:/Users/EMMA/ug/frontend/src/pages/devis/merci.astro";
const $$url = "/devis/merci";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Merci,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

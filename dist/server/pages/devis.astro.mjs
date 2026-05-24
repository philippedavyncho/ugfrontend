import { e as createComponent, k as renderComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_D-0x7zcX.mjs';
import 'piccolore';
import { $ as $$MarketingLayout } from '../chunks/MarketingLayout_5Pq_SZ-z.mjs';
import { $ as $$MarketingIcon } from '../chunks/MarketingIcon_Btb0Ru1u.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const apiBaseUrl = "http://127.0.0.1:8000/api";
  const quoteBenefits = [
    {
      icon: "glass",
      title: "Vitrage adapte",
      description: "Choisissez le bon type de vitrage selon l'usage, le rendu et la surface a traiter."
    },
    {
      icon: "thermo",
      title: "Lecture technique",
      description: "L'estimation prend en compte les options, l'epaisseur et la nature de la prestation."
    },
    {
      icon: "repair",
      title: "Suite exploitable",
      description: "Le resultat sert de base claire pour avancer rapidement sur une demande serieuse."
    }
  ];
  const quoteChecklist = [
    "Largeur et hauteur utiles de l'ouverture",
    "Type de vitrage souhaite ou niveau de performance vise",
    "Nature exacte de la pose ou du remplacement"
  ];
  return renderTemplate`${renderComponent($$result, "MarketingLayout", $$MarketingLayout, { "title": "Demande de devis", "description": "Calculez un devis vitrerie relie au backend.", "data-astro-cid-236iqep3": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="page-shell" data-astro-cid-236iqep3> <section class="quote-page"', ` data-astro-cid-236iqep3> <section class="quote-hero" data-astro-cid-236iqep3> <div class="quote-hero__copy" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Demande de devis</p> <h1 data-astro-cid-236iqep3>Calculez une estimation claire pour votre projet vitrerie.</h1> <p data-astro-cid-236iqep3>
Cette page relie maintenant les configurations, les prestations et
            le calcul du prix au backend. Vous gardez un parcours simple, mais
            avec une lecture beaucoup plus propre du besoin.
</p> <div class="actions" data-astro-cid-236iqep3> <a class="button-link" href="/intervention-rapide" data-astro-cid-236iqep3>Besoin d'une urgence</a> <a class="button-link button-link--secondary" href="/" data-astro-cid-236iqep3>Retour a l'accueil</a> </div> </div> <aside class="quote-hero__panel" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Avant de commencer</p> <ul class="quote-hero__list" data-astro-cid-236iqep3> `, ' </ul> <span class="quote-hero__badge" data-astro-cid-236iqep3>Estimation structuree et rapide</span> </aside> </section> <section class="quote-benefits" data-astro-cid-236iqep3> ', ` </section> <div class="quote-layout" data-astro-cid-236iqep3> <section class="page-card quote-form-card" data-astro-cid-236iqep3> <div class="quote-panel__intro" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Configuration</p> <h2 data-astro-cid-236iqep3>Renseignez les caracteristiques du vitrage.</h2> <p data-astro-cid-236iqep3>
Selectionnez le vitrage, l'epaisseur, la prestation et les options
              pour lancer une estimation propre.
</p> </div> <div class="quote-status" data-role="status" data-astro-cid-236iqep3>Chargement de la configuration...</div> <form class="quote-form" data-role="form" data-astro-cid-236iqep3> <div class="form-grid" data-astro-cid-236iqep3> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Largeur (cm)</span> <input name="width" type="number" min="1" step="0.01" value="120" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Hauteur (cm)</span> <input name="height" type="number" min="1" step="0.01" value="150" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Type de vitrage</span> <select name="glass_type" data-role="glass-type" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Epaisseur</span> <select name="thickness" data-role="thickness" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> <label class="field field--wide" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Type de prestation</span> <select name="work_type" data-role="work-type" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> </div> <fieldset class="options" data-role="options-group" disabled data-astro-cid-236iqep3> <legend data-astro-cid-236iqep3>Options</legend> <div class="options__grid" data-role="options" data-astro-cid-236iqep3></div> </fieldset> <div class="form-actions" data-astro-cid-236iqep3> <button class="button-link" type="submit" data-role="submit" disabled data-astro-cid-236iqep3>
Calculer le devis
</button> <a class="button-link button-link--secondary" href="/" data-astro-cid-236iqep3>Retour a l'accueil</a> </div> </form> </section> <aside class="page-card quote-result-card" data-astro-cid-236iqep3> <div class="quote-panel__intro" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Resultat</p> <h2 data-astro-cid-236iqep3>Votre estimation apparait ici.</h2> <p data-astro-cid-236iqep3>
Le detail du cout s'affiche apres calcul avec une lecture simple
              de la surface, du vitrage, de la main d'oeuvre et des options.
</p> </div> <div class="result-empty" data-role="placeholder" data-astro-cid-236iqep3>
Lancez un calcul pour afficher le prix estime et le detail du devis.
</div> <div class="result-panel" data-role="result" hidden data-astro-cid-236iqep3> <div class="result-total" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Total estime</span> <strong data-role="total-price" data-astro-cid-236iqep3>-</strong> </div> <div class="result-summary" data-astro-cid-236iqep3> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Surface</span> <strong data-role="area" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Vitrage</span> <strong data-role="glass-cost" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Main d'oeuvre</span> <strong data-role="work-cost" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Options</span> <strong data-role="options-cost" data-astro-cid-236iqep3>-</strong> </div> </div> <div class="result-breakdown" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Detail</p> <ul class="simple-list" data-role="breakdown" data-astro-cid-236iqep3></ul> </div> </div> </aside> </div> </section> </main> <script>
    (() => {
      const root = document.querySelector(".quote-page");
      if (!root) return;

      const apiBase = root.dataset.apiBase?.replace(/\\/$/, "") || "";
      const status = root.querySelector('[data-role="status"]');
      const form = root.querySelector('[data-role="form"]');
      const submitButton = root.querySelector('[data-role="submit"]');
      const glassTypeSelect = root.querySelector('[data-role="glass-type"]');
      const thicknessSelect = root.querySelector('[data-role="thickness"]');
      const workTypeSelect = root.querySelector('[data-role="work-type"]');
      const optionsWrapper = root.querySelector('[data-role="options"]');
      const optionsGroup = root.querySelector('[data-role="options-group"]');
      const placeholder = root.querySelector('[data-role="placeholder"]');
      const resultPanel = root.querySelector('[data-role="result"]');
      const totalPrice = root.querySelector('[data-role="total-price"]');
      const area = root.querySelector('[data-role="area"]');
      const glassCost = root.querySelector('[data-role="glass-cost"]');
      const workCost = root.querySelector('[data-role="work-cost"]');
      const optionsCost = root.querySelector('[data-role="options-cost"]');
      const breakdown = root.querySelector('[data-role="breakdown"]');

      const setStatus = (message, type = "info") => {
        if (!status) return;
        status.textContent = message;
        status.dataset.state = type;
      };

      const clearSelect = (select, placeholderText) => {
        if (!select) return;
        select.innerHTML = "";
        const option = document.createElement("option");
        option.value = "";
        option.textContent = placeholderText;
        select.appendChild(option);
      };

      const money = (value, currency) => {
        const amount = Number.parseFloat(value);
        if (Number.isNaN(amount)) return \`\${value} \${currency}\`;
        return \`\${amount.toLocaleString("fr-FR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} \${currency}\`;
      };

      const renderConfig = (config) => {
        clearSelect(glassTypeSelect, "Choisir un vitrage");
        clearSelect(thicknessSelect, "Choisir une epaisseur");
        clearSelect(workTypeSelect, "Choisir une prestation");

        config.glass_types.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.id;
          option.textContent = \`\${item.name} (\${money(item.price_per_m2, config.currency)}/m2)\`;
          glassTypeSelect.appendChild(option);
        });

        config.thicknesses.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.value;
          option.textContent = item.label;
          thicknessSelect.appendChild(option);
        });

        config.work_types.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.id;
          option.textContent = \`\${item.name} (\${money(item.price, config.currency)})\`;
          workTypeSelect.appendChild(option);
        });

        optionsWrapper.innerHTML = "";
        config.options.forEach((item) => {
          const label = document.createElement("label");
          label.className = "option-item";

          const input = document.createElement("input");
          input.type = "checkbox";
          input.name = "options";
          input.value = String(item.id);

          const text = document.createElement("span");
          text.textContent = \`\${item.name} (\${money(item.price, config.currency)})\`;

          label.append(input, text);
          optionsWrapper.appendChild(label);
        });

        glassTypeSelect.disabled = false;
        thicknessSelect.disabled = false;
        workTypeSelect.disabled = false;
        optionsGroup.disabled = false;
        submitButton.disabled = false;
        setStatus("Configuration chargee. Vous pouvez calculer un devis.", "success");
      };

      const renderResult = (result) => {
        placeholder.hidden = true;
        resultPanel.hidden = false;
        totalPrice.textContent = money(result.total_price, result.currency);
        area.textContent = \`\${result.area} m2\`;
        glassCost.textContent = money(result.glass_cost, result.currency);
        workCost.textContent = money(result.work_cost, result.currency);
        optionsCost.textContent = money(result.options_cost, result.currency);
        breakdown.innerHTML = "";

        result.details.breakdown.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = \`\${item.label}: \${money(item.amount, result.currency)}\`;
          breakdown.appendChild(li);
        });
      };

      const loadConfig = async () => {
        try {
          setStatus("Chargement de la configuration...", "info");
          const response = await fetch(\`\${apiBase}/config/\`);
          if (!response.ok) throw new Error(\`Erreur \${response.status}\`);
          const config = await response.json();
          renderConfig(config);
        } catch (error) {
          console.error(error);
          setStatus("Impossible de charger le backend. Verifiez que Django tourne sur le port 8000.", "error");
        }
      };

      form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        submitButton.disabled = true;
        setStatus("Calcul du devis en cours...", "info");

        const formData = new FormData(form);
        const payload = {
          width: formData.get("width"),
          height: formData.get("height"),
          glass_type: Number(formData.get("glass_type")),
          thickness: Number(formData.get("thickness")),
          work_type: Number(formData.get("work_type")),
          options: formData.getAll("options").map((value) => Number(value)),
          holes: []
        };

        try {
          const response = await fetch(\`\${apiBase}/quote/\`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const data = await response.json();
          if (!response.ok) {
            const firstError = JSON.stringify(data);
            throw new Error(firstError);
          }

          renderResult(data);
          setStatus("Devis calcule avec succes.", "success");
        } catch (error) {
          console.error(error);
          setStatus("Le calcul a echoue. Verifiez les champs ou la disponibilite du backend.", "error");
        } finally {
          submitButton.disabled = false;
        }
      });

      loadConfig();
    })();
  </script>  `], [" ", '<main class="page-shell" data-astro-cid-236iqep3> <section class="quote-page"', ` data-astro-cid-236iqep3> <section class="quote-hero" data-astro-cid-236iqep3> <div class="quote-hero__copy" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Demande de devis</p> <h1 data-astro-cid-236iqep3>Calculez une estimation claire pour votre projet vitrerie.</h1> <p data-astro-cid-236iqep3>
Cette page relie maintenant les configurations, les prestations et
            le calcul du prix au backend. Vous gardez un parcours simple, mais
            avec une lecture beaucoup plus propre du besoin.
</p> <div class="actions" data-astro-cid-236iqep3> <a class="button-link" href="/intervention-rapide" data-astro-cid-236iqep3>Besoin d'une urgence</a> <a class="button-link button-link--secondary" href="/" data-astro-cid-236iqep3>Retour a l'accueil</a> </div> </div> <aside class="quote-hero__panel" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Avant de commencer</p> <ul class="quote-hero__list" data-astro-cid-236iqep3> `, ' </ul> <span class="quote-hero__badge" data-astro-cid-236iqep3>Estimation structuree et rapide</span> </aside> </section> <section class="quote-benefits" data-astro-cid-236iqep3> ', ` </section> <div class="quote-layout" data-astro-cid-236iqep3> <section class="page-card quote-form-card" data-astro-cid-236iqep3> <div class="quote-panel__intro" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Configuration</p> <h2 data-astro-cid-236iqep3>Renseignez les caracteristiques du vitrage.</h2> <p data-astro-cid-236iqep3>
Selectionnez le vitrage, l'epaisseur, la prestation et les options
              pour lancer une estimation propre.
</p> </div> <div class="quote-status" data-role="status" data-astro-cid-236iqep3>Chargement de la configuration...</div> <form class="quote-form" data-role="form" data-astro-cid-236iqep3> <div class="form-grid" data-astro-cid-236iqep3> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Largeur (cm)</span> <input name="width" type="number" min="1" step="0.01" value="120" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Hauteur (cm)</span> <input name="height" type="number" min="1" step="0.01" value="150" required data-astro-cid-236iqep3> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Type de vitrage</span> <select name="glass_type" data-role="glass-type" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> <label class="field" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Epaisseur</span> <select name="thickness" data-role="thickness" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> <label class="field field--wide" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Type de prestation</span> <select name="work_type" data-role="work-type" required disabled data-astro-cid-236iqep3> <option data-astro-cid-236iqep3>Chargement...</option> </select> </label> </div> <fieldset class="options" data-role="options-group" disabled data-astro-cid-236iqep3> <legend data-astro-cid-236iqep3>Options</legend> <div class="options__grid" data-role="options" data-astro-cid-236iqep3></div> </fieldset> <div class="form-actions" data-astro-cid-236iqep3> <button class="button-link" type="submit" data-role="submit" disabled data-astro-cid-236iqep3>
Calculer le devis
</button> <a class="button-link button-link--secondary" href="/" data-astro-cid-236iqep3>Retour a l'accueil</a> </div> </form> </section> <aside class="page-card quote-result-card" data-astro-cid-236iqep3> <div class="quote-panel__intro" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Resultat</p> <h2 data-astro-cid-236iqep3>Votre estimation apparait ici.</h2> <p data-astro-cid-236iqep3>
Le detail du cout s'affiche apres calcul avec une lecture simple
              de la surface, du vitrage, de la main d'oeuvre et des options.
</p> </div> <div class="result-empty" data-role="placeholder" data-astro-cid-236iqep3>
Lancez un calcul pour afficher le prix estime et le detail du devis.
</div> <div class="result-panel" data-role="result" hidden data-astro-cid-236iqep3> <div class="result-total" data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Total estime</span> <strong data-role="total-price" data-astro-cid-236iqep3>-</strong> </div> <div class="result-summary" data-astro-cid-236iqep3> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Surface</span> <strong data-role="area" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Vitrage</span> <strong data-role="glass-cost" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Main d'oeuvre</span> <strong data-role="work-cost" data-astro-cid-236iqep3>-</strong> </div> <div data-astro-cid-236iqep3> <span data-astro-cid-236iqep3>Options</span> <strong data-role="options-cost" data-astro-cid-236iqep3>-</strong> </div> </div> <div class="result-breakdown" data-astro-cid-236iqep3> <p class="eyebrow" data-astro-cid-236iqep3>Detail</p> <ul class="simple-list" data-role="breakdown" data-astro-cid-236iqep3></ul> </div> </div> </aside> </div> </section> </main> <script>
    (() => {
      const root = document.querySelector(".quote-page");
      if (!root) return;

      const apiBase = root.dataset.apiBase?.replace(/\\\\/$/, "") || "";
      const status = root.querySelector('[data-role="status"]');
      const form = root.querySelector('[data-role="form"]');
      const submitButton = root.querySelector('[data-role="submit"]');
      const glassTypeSelect = root.querySelector('[data-role="glass-type"]');
      const thicknessSelect = root.querySelector('[data-role="thickness"]');
      const workTypeSelect = root.querySelector('[data-role="work-type"]');
      const optionsWrapper = root.querySelector('[data-role="options"]');
      const optionsGroup = root.querySelector('[data-role="options-group"]');
      const placeholder = root.querySelector('[data-role="placeholder"]');
      const resultPanel = root.querySelector('[data-role="result"]');
      const totalPrice = root.querySelector('[data-role="total-price"]');
      const area = root.querySelector('[data-role="area"]');
      const glassCost = root.querySelector('[data-role="glass-cost"]');
      const workCost = root.querySelector('[data-role="work-cost"]');
      const optionsCost = root.querySelector('[data-role="options-cost"]');
      const breakdown = root.querySelector('[data-role="breakdown"]');

      const setStatus = (message, type = "info") => {
        if (!status) return;
        status.textContent = message;
        status.dataset.state = type;
      };

      const clearSelect = (select, placeholderText) => {
        if (!select) return;
        select.innerHTML = "";
        const option = document.createElement("option");
        option.value = "";
        option.textContent = placeholderText;
        select.appendChild(option);
      };

      const money = (value, currency) => {
        const amount = Number.parseFloat(value);
        if (Number.isNaN(amount)) return \\\`\\\${value} \\\${currency}\\\`;
        return \\\`\\\${amount.toLocaleString("fr-FR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} \\\${currency}\\\`;
      };

      const renderConfig = (config) => {
        clearSelect(glassTypeSelect, "Choisir un vitrage");
        clearSelect(thicknessSelect, "Choisir une epaisseur");
        clearSelect(workTypeSelect, "Choisir une prestation");

        config.glass_types.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.id;
          option.textContent = \\\`\\\${item.name} (\\\${money(item.price_per_m2, config.currency)}/m2)\\\`;
          glassTypeSelect.appendChild(option);
        });

        config.thicknesses.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.value;
          option.textContent = item.label;
          thicknessSelect.appendChild(option);
        });

        config.work_types.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.id;
          option.textContent = \\\`\\\${item.name} (\\\${money(item.price, config.currency)})\\\`;
          workTypeSelect.appendChild(option);
        });

        optionsWrapper.innerHTML = "";
        config.options.forEach((item) => {
          const label = document.createElement("label");
          label.className = "option-item";

          const input = document.createElement("input");
          input.type = "checkbox";
          input.name = "options";
          input.value = String(item.id);

          const text = document.createElement("span");
          text.textContent = \\\`\\\${item.name} (\\\${money(item.price, config.currency)})\\\`;

          label.append(input, text);
          optionsWrapper.appendChild(label);
        });

        glassTypeSelect.disabled = false;
        thicknessSelect.disabled = false;
        workTypeSelect.disabled = false;
        optionsGroup.disabled = false;
        submitButton.disabled = false;
        setStatus("Configuration chargee. Vous pouvez calculer un devis.", "success");
      };

      const renderResult = (result) => {
        placeholder.hidden = true;
        resultPanel.hidden = false;
        totalPrice.textContent = money(result.total_price, result.currency);
        area.textContent = \\\`\\\${result.area} m2\\\`;
        glassCost.textContent = money(result.glass_cost, result.currency);
        workCost.textContent = money(result.work_cost, result.currency);
        optionsCost.textContent = money(result.options_cost, result.currency);
        breakdown.innerHTML = "";

        result.details.breakdown.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = \\\`\\\${item.label}: \\\${money(item.amount, result.currency)}\\\`;
          breakdown.appendChild(li);
        });
      };

      const loadConfig = async () => {
        try {
          setStatus("Chargement de la configuration...", "info");
          const response = await fetch(\\\`\\\${apiBase}/config/\\\`);
          if (!response.ok) throw new Error(\\\`Erreur \\\${response.status}\\\`);
          const config = await response.json();
          renderConfig(config);
        } catch (error) {
          console.error(error);
          setStatus("Impossible de charger le backend. Verifiez que Django tourne sur le port 8000.", "error");
        }
      };

      form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        submitButton.disabled = true;
        setStatus("Calcul du devis en cours...", "info");

        const formData = new FormData(form);
        const payload = {
          width: formData.get("width"),
          height: formData.get("height"),
          glass_type: Number(formData.get("glass_type")),
          thickness: Number(formData.get("thickness")),
          work_type: Number(formData.get("work_type")),
          options: formData.getAll("options").map((value) => Number(value)),
          holes: []
        };

        try {
          const response = await fetch(\\\`\\\${apiBase}/quote/\\\`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const data = await response.json();
          if (!response.ok) {
            const firstError = JSON.stringify(data);
            throw new Error(firstError);
          }

          renderResult(data);
          setStatus("Devis calcule avec succes.", "success");
        } catch (error) {
          console.error(error);
          setStatus("Le calcul a echoue. Verifiez les champs ou la disponibilite du backend.", "error");
        } finally {
          submitButton.disabled = false;
        }
      });

      loadConfig();
    })();
  </script>  `])), maybeRenderHead(), addAttribute(apiBaseUrl, "data-api-base"), quoteChecklist.map((item) => renderTemplate`<li data-astro-cid-236iqep3>${item}</li>`), quoteBenefits.map((item) => renderTemplate`<article class="page-card quote-benefit" data-astro-cid-236iqep3> <span class="quote-benefit__icon" data-astro-cid-236iqep3> ${renderComponent($$result2, "MarketingIcon", $$MarketingIcon, { "name": item.icon, "data-astro-cid-236iqep3": true })} </span> <h2 data-astro-cid-236iqep3>${item.title}</h2> <p data-astro-cid-236iqep3>${item.description}</p> </article>`)) })}`;
}, "C:/Users/EMMA/ug/frontend/src/pages/devis/index.astro", void 0);
const $$file = "C:/Users/EMMA/ug/frontend/src/pages/devis/index.astro";
const $$url = "/devis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

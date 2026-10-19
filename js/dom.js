// Petit utilitaire de création d'éléments.
// h("button", { class: "btn", onclick: f }, "Texte", autreElement)
// L'attribut spécial `html` reçoit du HTML déjà sûr (sortie de md.js).
export function h(tag, attrs = {}, ...enfants) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === "html") el.innerHTML = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "class") el.className = v;
    else if (k === "style" && typeof v === "object") for (const [p, x] of Object.entries(v)) el.style.setProperty(p, x);
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const e of enfants.flat()) {
    if (e == null || e === false) continue;
    el.append(e instanceof Node ? e : document.createTextNode(String(e)));
  }
  return el;
}

// Remplace le contenu d'un élément en ignorant les valeurs absentes (null, false) :
// replaceChildren(null) écrirait littéralement « null » à l'écran.
export function remplacer(el, ...enfants) {
  el.replaceChildren(...enfants.flat().filter((e) => e != null && e !== false));
}

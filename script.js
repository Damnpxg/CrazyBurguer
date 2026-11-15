/* ====== CONFIGURA AQUÍ ====== */
const WA = "58XXXXXXXXXX"; // WhatsApp del negocio: 58 + número sin 0
const PAGO = { banco: "[Tu Banco]", tel: "0424-XXXXXXX", id: "V-XXXXXXXX" };
const HERO_IMGS = ["img/hero1.jpg", "img/hero2.jpg", "img/hero3.jpg"]; // opcionales

/* Productos: [categoría, grupo, nombre, descripción, precio, tipo]
   tipo: p = Personalizar, a = Agregar directo, n = Agregar nota */
const CATS = [
  ["ham", "Hamburguesas", "🍔"], ["perro", "Perros Calientes", "🌭"],
  ["pepito", "Pepitos & Shawarmas", "🥪"], ["salchi", "Salchipapas & ClubHouse", "🍟"],
  ["papas", "Papas Fritas", "🍟"], ["beb", "Bebidas", "🥤"]
];
const X = "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maíz, tocineta + papas fritas.";
const P = [
  ["ham","Hamburguesas Normales","Normal de Carne","Carne de 90 gramos, lechuga, tomate, papas ralladas + queso amarillo.",5.5,"p"],
  ["ham","Hamburguesas Normales","Normal de Pollo","Milanesa de pollo, lechuga, tomate, papas ralladas + queso amarillo.",5.5,"p"],
  ["ham","Hamburguesas Normales","Normal de Chuleta","Chuleta ahumada, lechuga, tomate, papas ralladas + queso amarillo.",5.5,"p"],
  ["ham","Especiales y Mixtas","Especial de Carne",X,7,"p"], /* EDITAR: no se vio en el vídeo */
  ["ham","Especiales y Mixtas","Pollo Crispy",X,7,"p"],
  ["ham","Especiales y Mixtas","Especial de Chuleta",X,7,"p"],
  ["ham","Especiales y Mixtas","Carne & Pollo (Mixta)",X,8.5,"p"],
  ["ham","Especiales y Mixtas","Pollo & Chuleta (Mixta)",X,8.5,"p"],
  ["ham","Especiales y Mixtas","Chuleta & Carne (Mixta)",X,8.5,"p"],
  ["ham","Especiales y Mixtas","Carne & Crispy (Mixta)",X,8.5,"p"],
  ["ham","Especiales y Mixtas","Pollo & Crispy (Mixta)",X,8.5,"p"],
  ["ham","Especiales y Mixtas","Chuleta & Crispy (Mixta)",X,8.5,"p"],
  ["perro","Perros Calientes","Perro Normal","Ensalada, cebolla, papas ralladas, queso amarillo + salsas.",2,"p"],
  ["perro","Perros Calientes","Perro Especial","Ensalada, cebolla, papas ralladas, queso amarillo, maíz + salsas.",2.5,"p"],
  ["pepito","Pepitos","Pepito Mini (Carne, Pollo o Mixtos)","Pan granjero, lechuga, tomate, papas ralladas, queso amarillo, maíz, tocineta + papas fritas.",8,"p"],
  ["pepito","Pepitos","Pepito Grande (Carne, Pollo o Mixtos)","Pan canilla, lechuga, tomate, papas ralladas, queso amarillo, maíz, tocineta + papas fritas.",14,"p"],
  ["pepito","Shawarmas","Shawarma de Carne","Pan árabe, carne jugosa, vegetales frescos, salsa de la casa y papas.",7,"p"],
  ["pepito","Shawarmas","Shawarma de Pollo","Pan árabe, pollo marinado, vegetales frescos, salsa de la casa y papas.",7,"p"],
  ["salchi","Salchipapas & ClubHouse","Salchipapa Pequeña","Salchichas, pollo crispy, queso amarillo, 300g de papas.",6,"a"],
  /* EDITAR: agrega aquí las otras salchipapas y ClubHouse con su precio */
  ["papas","Papas Fritas","Ración de Papas Fritas","Porción de papas fritas (250g).",3.5,"a"],
  ["beb","Bebidas","Nestea","Bebida refrescante.",1.5,"n"],
  ["beb","Bebidas","Refresco de Botella","Bebida fría.",0,"n"] /* EDITAR: precio no visible en el vídeo */
];
const QUITAR = ["lechuga", "tomate", "cebolla", "queso"];

/* ====== UTILIDADES ====== */
const $ = s => document.querySelector(s);
const money = n => "$" + n.toFixed(2);
const slug = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
let toastT;
function toast(t) { const e = $("#toast"); e.textContent = t; e.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => e.classList.remove("on"), 2200); }
const lock = on => document.documentElement.classList.toggle("lock", on);

/* ====== MENÚ ====== */
let cat = "ham";
function renderTabs() {
  $("#tabs").innerHTML = CATS.map(c => `<button class="tab ${c[0] === cat ? "on" : ""}" data-c="${c[0]}">${c[2]} ${c[1]}</button>`).join("");
}
function renderMenu() {
  const items = P.map((p, i) => ({ p, i })).filter(o => o.p[0] === cat);
  let html = "", g = "";
  items.forEach(({ p, i }) => {
    if (p[1] !== g) { if (g) html += "</div>"; g = p[1]; html += `<h3 class="group">${esc(g)}</h3><div class="grid">`; }
    const emoji = CATS.find(c => c[0] === p[0])[2];
    const btn = p[5] === "p" ? "+ Personalizar" : p[5] === "n" ? "+ Agregar Nota" : "+ Agregar";
    html += `<article class="card"><div class="media"><span class="ph">${emoji}</span>
      <img src="img/${slug(p[2])}.jpg" alt="${esc(p[2])}" loading="lazy" onerror="this.remove()"></div>
      <h3>${esc(p[2])}</h3><p>${esc(p[3])}</p>
      <div class="buy"><span class="price">${p[4] ? money(p[4]) : "Consultar"}</span>
      <button class="add" data-i="${i}">${btn}</button></div></article>`;
  });
  $("#list").innerHTML = html + "</div>";
}
$("#tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  cat = b.dataset.c; renderTabs(); renderMenu();
});
$("#list").addEventListener("click", e => {
  const b = e.target.closest(".add"); if (!b) return;
  const i = +b.dataset.i, p = P[i];
  if (p[5] === "a") { addToCart(p[2], p[4], [], ""); toast("Agregado: " + p[2]); }
  else openModal(i);
});

/* ====== MODAL PERSONALIZAR ====== */
let cur = null;
function openModal(i) {
  cur = i; const p = P[i];
  $("#mTitle").textContent = p[2];
  $("#mBody").innerHTML = p[5] === "p"
    ? `<span class="lbl">Quitar ingredientes:</span>` + QUITAR.map(q => `<label class="chk"><input type="checkbox" value="Sin ${q}"> Sin ${q}</label>`).join("")
      + `<label class="lbl" for="mNote">Notas especiales:</label><input id="mNote" class="note" maxlength="120" placeholder="Ej: Salsa aparte, bien tostado...">`
    : `<label class="lbl" for="mNote">Nota adicional para tu ${esc(p[2])}:</label><input id="mNote" class="note" maxlength="120" placeholder="Ej: Muy frío, con hielo...">`;
  $("#modal").hidden = false; $("#overlay").classList.add("on"); lock(true);
}
function closeModal() { $("#modal").hidden = true; if (!$("#cart").classList.contains("on")) { $("#overlay").classList.remove("on"); lock(false); } cur = null; }
$("#mAdd").onclick = () => {
  if (cur === null) return; const p = P[cur];
  const opts = [...document.querySelectorAll("#mBody input[type=checkbox]:checked")].map(c => c.value);
  addToCart(p[2], p[4], opts, $("#mNote").value.trim());
  toast("Agregado: " + p[2]); closeModal();
};
$("#mClose").onclick = closeModal;
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });

/* ====== CARRITO ====== */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("cb_cart")) || []; } catch (e) { cart = []; }
const save = () => { try { localStorage.setItem("cb_cart", JSON.stringify(cart)); } catch (e) {} };
function addToCart(name, price, opts, note) {
  const key = name + "|" + opts.join(",") + "|" + note;
  const f = cart.find(c => c.key === key);
  f ? f.qty++ : cart.push({ key, name, price, opts, note, qty: 1 });
  renderCart();
}
function renderCart() {
  save();
  const n = cart.reduce((s, c) => s + c.qty, 0), t = cart.reduce((s, c) => s + c.qty * c.price, 0);
  $("#badge").textContent = n; $("#total").textContent = money(t);
  $("#cItems").innerHTML = cart.length ? cart.map((c, i) => {
    const d = [...c.opts, c.note ? "Nota: " + c.note : ""].filter(Boolean).join(", ");
    return `<div class="item"><div><h4>${esc(c.name)}</h4>${d ? `<small>${esc(d)}</small>` : ""}<b>${money(c.price * c.qty)}</b></div>
      <div class="qty"><button data-d="-1" data-i="${i}" aria-label="Quitar uno">-</button>${c.qty}<button data-d="1" data-i="${i}" aria-label="Agregar uno">+</button></div></div>`;
  }).join("") : `<p class="empty">Tu carrito está vacío 🍔</p>`;
}
$("#cItems").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const c = cart[+b.dataset.i]; c.qty += +b.dataset.d;
  if (c.qty <= 0) cart.splice(+b.dataset.i, 1);
  renderCart();
});
function openCart() { $("#cart").classList.add("on"); $("#cart").setAttribute("aria-hidden", "false"); $("#overlay").classList.add("on"); lock(true); askGPS(); }
function closeCart() { $("#cart").classList.remove("on"); $("#cart").setAttribute("aria-hidden", "true"); $("#overlay").classList.remove("on"); lock(false); }
$("#openCart").onclick = openCart; $("#cClose").onclick = closeCart;
$("#overlay").onclick = () => { if (!$("#modal").hidden) closeModal(); else closeCart(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") { if (!$("#modal").hidden) closeModal(); else closeCart(); } });

/* ====== GPS ====== */
let pos = null;
function askGPS() {
  const g = $("#gps");
  if (pos) return;
  if (!navigator.geolocation) { g.textContent = "No disponible en este dispositivo"; return; }
  g.textContent = "Solicitando permiso de ubicación...";
  navigator.geolocation.getCurrentPosition(
    p => { pos = { lat: p.coords.latitude, lng: p.coords.longitude }; g.textContent = "Ubicación lista ✅"; },
    () => { g.textContent = "Sin ubicación (podrás escribir tu dirección por WhatsApp)"; },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
  );
}

/* ====== PAGO MÓVIL (copiar) ====== */
$("#pBank").textContent = PAGO.banco; $("#pTel").textContent = PAGO.tel; $("#pId").textContent = PAGO.id;
document.addEventListener("click", async e => {
  const b = e.target.closest(".copy"); if (!b) return;
  const txt = $("#" + b.dataset.c).textContent;
  try { await navigator.clipboard.writeText(txt); }
  catch (x) { const t = document.createElement("textarea"); t.value = txt; t.style.cssText = "position:fixed;opacity:0"; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); } catch (y) {} t.remove(); }
  toast("Copiado: " + txt);
});

/* ====== ENVIAR POR WHATSAPP ====== */
$("#send").onclick = () => {
  if (!cart.length) { toast("Agrega algo al carrito primero"); return; }
  let m = "*Nuevo pedido - CrazyBurguer*\n\n";
  cart.forEach(c => {
    m += `• ${c.qty}x ${c.name} (${money(c.price * c.qty)})\n`;
    if (c.opts.length) m += `   ${c.opts.join(", ")}\n`;
    if (c.note) m += `   Nota: ${c.note}\n`;
  });
  m += `\n*Total: ${$("#total").textContent}*`;
  if (pos) m += `\n📍 Mi ubicación: https://www.google.com/maps?q=${pos.lat},${pos.lng}`;
  m += "\n\nPagaré por Pago Móvil. Enviaré el comprobante.";
  window.open(`https://wa.me/584244629938${WA}?text=${encodeURIComponent(m)}`, "_blank", "noopener");
};
$("#waLink").href = `https://wa.me/584244629938${WA}`;

/* ====== NAV ACTIVO + HERO ====== */
const links = document.querySelectorAll(".links a");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle("on", a.dataset.s === en.target.id));
  }), { rootMargin: "-40% 0px -55% 0px" });
  ["inicio", "menu", "nosotros"].forEach(id => io.observe($("#" + id)));
}
const hf = $("#heroFrame"); let hi = 0;
HERO_IMGS.forEach(src => { const im = new Image(); im.alt = ""; im.onload = () => { hf.appendChild(im); if (hf.querySelectorAll("img").length === 1) im.classList.add("on"); }; im.src = src; });
setInterval(() => { const l = hf.querySelectorAll("img"); if (l.length < 2) return; l[hi % l.length].classList.remove("on"); hi++; l[hi % l.length].classList.add("on"); }, 3500);

renderTabs(); renderMenu(); renderCart();


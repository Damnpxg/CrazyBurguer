/* =====================================================
   CONFIGURACIÓN (cambia estos datos)
   ===================================================== */
const NUMERO_WHATSAPP = "584244629938"; // formato internacional: 58 + número sin el 0 inicial
const DATOS_PAGO_MOVIL = { banco: "[Tu Banco]", telefono: "0424-XXXXXXX", cedula: "V-XXXXXXXX" };
const FOTOS_PORTADA = ["img/hero1.jpg", "img/hero2.jpg", "img/hero3.jpg"]; // opcionales

// Videos tipo propaganda (se reproducen solos, sin sonido y en bucle, como un GIF).
// Pon tus archivos en la carpeta "video/". Puedes agregar todos los que quieras.
const VIDEOS_PROPAGANDA = [
  { archivo: "Samy.mp4", titulo: "Hamburguesas demenciales" },
  { archivo: "tree.mp4", titulo: "Los mejores Perros Palientes" },
  { archivo: "two.mp4", titulo: "Club House de locos" }
  // { archivo: "video/promo4.mp4", titulo: "Tu texto aquí" },
];

const CATEGORIAS = [
  { id: "hamburguesas", nombre: "Hamburguesas", emoji: "" },
  { id: "perros", nombre: "Perros Calientes", emoji: "" },
  { id: "pepitos", nombre: "Pepitos & Shawarmas", emoji: "" },
  { id: "salchipapas", nombre: "Salchipapas & ClubHouse", emoji: "" },
  { id: "papas", nombre: "Papas Fritas", emoji: "" },
  { id: "bebidas", nombre: "Bebidas", emoji: "" }
];

/* Tipos de botón:
   "personalizar" = abre la ventana para quitar ingredientes y escribir nota
   "agregar"      = lo agrega directo al carrito
   "nota"         = abre la ventana solo con una nota (bebidas) */
function producto(categoria, grupo, nombre, descripcion, precio, tipoBoton) {
  return { categoria, grupo, nombre, descripcion, precio, tipoBoton };
}
const DESCRIPCION_ESPECIAL = "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maíz, tocineta + papas fritas.";

const PRODUCTOS = [
  producto("hamburguesas", "Hamburguesas Normales", "Normal de Carne", "Carne de 90 gramos, lechuga, tomate, papas ralladas + queso amarillo.", 5.5, "personalizar"),
  producto("hamburguesas", "Hamburguesas Normales", "Normal de Pollo", "Milanesa de pollo, lechuga, tomate, papas ralladas + queso amarillo.", 5.5, "personalizar"),
  producto("hamburguesas", "Hamburguesas Normales", "Normal de Chuleta", "Chuleta ahumada, lechuga, tomate, papas ralladas + queso amarillo.", 5.5, "personalizar"),
  producto("hamburguesas", "Especiales y Mixtas", "Especial de Carne", DESCRIPCION_ESPECIAL, 7, "personalizar"), // EDITAR: no se vio en el vídeo
  producto("hamburguesas", "Especiales y Mixtas", "Pollo Crispy", DESCRIPCION_ESPECIAL, 7, "personalizar"),
  producto("hamburguesas", "Especiales y Mixtas", "Especial de Chuleta", DESCRIPCION_ESPECIAL, 7, "personalizar"),
  producto("hamburguesas", "Especiales y Mixtas", "Carne & Pollo (Mixta)", DESCRIPCION_ESPECIAL, 8.5, "personalizar"),
  producto("hamburguesas", "Especiales y Mixtas", "Pollo & Chuleta (Mixta)", DESCRIPCION_ESPECIAL, 8.5, "personalizar"),
  producto("hamburguesas", "Especiales y Mixtas", "Chuleta & Carne (Mixta)", DESCRIPCION_ESPECIAL, 8.5, "personalizar"),
  producto("hamburguesas", "Especiales y Mixtas", "Carne & Crispy (Mixta)", DESCRIPCION_ESPECIAL, 8.5, "personalizar"),
  producto("hamburguesas", "Especiales y Mixtas", "Pollo & Crispy (Mixta)", DESCRIPCION_ESPECIAL, 8.5, "personalizar"),
  producto("hamburguesas", "Especiales y Mixtas", "Chuleta & Crispy (Mixta)", DESCRIPCION_ESPECIAL, 8.5, "personalizar"),

  producto("perros", "Perros Calientes", "Perro Normal", "Ensalada, cebolla, papas ralladas, queso amarillo + salsas.", 2, "personalizar"),
  producto("perros", "Perros Calientes", "Perro Especial", "Ensalada, cebolla, papas ralladas, queso amarillo, maíz + salsas.", 2.5, "personalizar"),

  producto("pepitos", "Pepitos", "Pepito Mini (Carne, Pollo o Mixtos)", "Pan granjero, lechuga, tomate, papas ralladas, queso amarillo, maíz, tocineta + papas fritas.", 8, "personalizar"),
  producto("pepitos", "Pepitos", "Pepito Grande (Carne, Pollo o Mixtos)", "Pan canilla, lechuga, tomate, papas ralladas, queso amarillo, maíz, tocineta + papas fritas.", 14, "personalizar"),
  producto("pepitos", "Shawarmas", "Shawarma de Carne", "Pan árabe, carne jugosa, vegetales frescos, salsa de la casa y papas.", 7, "personalizar"),
  producto("pepitos", "Shawarmas", "Shawarma de Pollo", "Pan árabe, pollo marinado, vegetales frescos, salsa de la casa y papas.", 7, "personalizar"),

  producto("salchipapas", "Salchipapas & ClubHouse", "Salchipapa Pequeña", "Salchichas, pollo crispy, queso amarillo, 300g de papas.", 6, "agregar"),
  // EDITAR: agrega aquí las otras salchipapas y los ClubHouse con su precio

  producto("papas", "Papas Fritas", "Ración de Papas Fritas", "Porción de papas fritas (250g).", 3.5, "agregar"),

  producto("bebidas", "Bebidas", "Nestea", "Bebida refrescante.", 1.5, "nota"),
  producto("bebidas", "Bebidas", "Refresco de Botella", "Bebida fría.", 0, "nota") // EDITAR: precio no visible en el vídeo
];

const INGREDIENTES_QUITABLES = ["lechuga", "tomate", "cebolla", "queso"];

/* =====================================================
   FUNCIONES AUXILIARES
   ===================================================== */
const elemento = selector => document.querySelector(selector);

function formatearPrecio(numero) { return "$" + numero.toFixed(2); }

// "Normal de Carne" -> "normal-de-carne" (nombre del archivo de la foto)
function nombreParaArchivo(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Evita que un texto escrito por el cliente rompa el HTML
function escaparHtml(texto) {
  const reemplazos = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(texto).replace(/[&<>"']/g, letra => reemplazos[letra]);
}

let temporizadorAviso;
function mostrarAviso(mensaje) {
  const aviso = elemento("#aviso");
  aviso.textContent = mensaje;
  aviso.classList.add("on");
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(() => aviso.classList.remove("on"), 2200);
}

function bloquearScroll(bloquear) {
  document.documentElement.classList.toggle("lock", bloquear);
}

/* =====================================================
   MENÚ (pestañas y tarjetas)
   ===================================================== */
let categoriaActiva = "hamburguesas";

function dibujarPestanas() {
  elemento("#pestanas").innerHTML = CATEGORIAS.map(categoria =>
    `<button class="tab ${categoria.id === categoriaActiva ? "on" : ""}" data-categoria="${categoria.id}">${categoria.emoji} ${categoria.nombre}</button>`
  ).join("");
}

function dibujarProductos() {
  const productosDeLaCategoria = PRODUCTOS.filter(p => p.categoria === categoriaActiva);
  const emoji = CATEGORIAS.find(c => c.id === categoriaActiva).emoji;
  let html = "";
  let grupoActual = "";

  productosDeLaCategoria.forEach(p => {
    if (p.grupo !== grupoActual) {            // nuevo subtítulo (ej: "Especiales y Mixtas")
      if (grupoActual) html += "</div>";
      grupoActual = p.grupo;
      html += `<h3 class="group">${escaparHtml(grupoActual)}</h3><div class="grid">`;
    }
    const textoBoton = p.tipoBoton === "personalizar" ? "+ Personalizar"
                     : p.tipoBoton === "nota" ? "+ Agregar Nota" : "+ Agregar";
    const posicion = PRODUCTOS.indexOf(p);   // sirve para encontrar el producto al hacer clic
    html += `<article class="card">
      <div class="media"><span class="emoji-respaldo">${emoji}</span>
        <img src="img/${nombreParaArchivo(p.nombre)}.jpg" alt="${escaparHtml(p.nombre)}" loading="lazy" onerror="this.remove()"></div>
      <h3>${escaparHtml(p.nombre)}</h3><p>${escaparHtml(p.descripcion)}</p>
      <div class="zona-compra"><span class="price">${p.precio ? formatearPrecio(p.precio) : "Consultar"}</span>
      <button class="add" data-posicion="${posicion}">${textoBoton}</button></div></article>`;
  });
  elemento("#listaProductos").innerHTML = html + "</div>";
}

elemento("#pestanas").addEventListener("click", evento => {
  const botonPestana = evento.target.closest(".tab");
  if (!botonPestana) return;
  categoriaActiva = botonPestana.dataset.categoria;
  dibujarPestanas();
  dibujarProductos();
});

elemento("#listaProductos").addEventListener("click", evento => {
  const botonAgregar = evento.target.closest(".add");
  if (!botonAgregar) return;
  const productoElegido = PRODUCTOS[Number(botonAgregar.dataset.posicion)];
  if (productoElegido.tipoBoton === "agregar") {
    agregarAlCarrito(productoElegido.nombre, productoElegido.precio, [], "");
    mostrarAviso("Agregado: " + productoElegido.nombre);
  } else {
    abrirVentanaPersonalizar(productoElegido);
  }
});

/* =====================================================
   VENTANA PARA PERSONALIZAR
   ===================================================== */
let productoEnVentana = null;

function abrirVentanaPersonalizar(productoElegido) {
  productoEnVentana = productoElegido;
  elemento("#tituloVentana").textContent = productoElegido.nombre;

  if (productoElegido.tipoBoton === "personalizar") {
    elemento("#cuerpoVentana").innerHTML =
      `<span class="etiqueta">Quitar ingredientes:</span>` +
      INGREDIENTES_QUITABLES.map(ing => `<label class="casilla"><input type="checkbox" value="Sin ${ing}"> Sin ${ing}</label>`).join("") +
      `<label class="etiqueta" for="notaEspecial">Notas especiales:</label>
       <input id="notaEspecial" class="note" maxlength="120" placeholder="Ej: Salsa aparte, bien tostado...">`;
  } else {
    elemento("#cuerpoVentana").innerHTML =
      `<label class="etiqueta" for="notaEspecial">Nota adicional para tu ${escaparHtml(productoElegido.nombre)}:</label>
       <input id="notaEspecial" class="note" maxlength="120" placeholder="Ej: Muy frío, con hielo...">`;
  }
  elemento("#ventanaPersonalizar").hidden = false;
  elemento("#fondoOscuro").classList.add("on");
  bloquearScroll(true);
}

function cerrarVentanaPersonalizar() {
  elemento("#ventanaPersonalizar").hidden = true;
  if (!elemento("#panelCarrito").classList.contains("on")) {
    elemento("#fondoOscuro").classList.remove("on");
    bloquearScroll(false);
  }
  productoEnVentana = null;
}

elemento("#agregarDesdeVentana").onclick = () => {
  if (!productoEnVentana) return;
  const ingredientesQuitados = [...document.querySelectorAll("#cuerpoVentana input[type=checkbox]:checked")].map(casilla => casilla.value);
  const nota = elemento("#notaEspecial").value.trim();
  agregarAlCarrito(productoEnVentana.nombre, productoEnVentana.precio, ingredientesQuitados, nota);
  mostrarAviso("Agregado: " + productoEnVentana.nombre);
  cerrarVentanaPersonalizar();
};
elemento("#cerrarVentana").onclick = cerrarVentanaPersonalizar;
elemento("#ventanaPersonalizar").addEventListener("click", evento => {
  if (evento.target.id === "ventanaPersonalizar") cerrarVentanaPersonalizar(); // clic fuera de la caja
});

/* =====================================================
   CARRITO
   ===================================================== */
let carrito = [];
try { carrito = JSON.parse(localStorage.getItem("carritoCrazyBurguer")) || []; } catch (error) { carrito = []; }

function guardarCarrito() {
  try { localStorage.setItem("carritoCrazyBurguer", JSON.stringify(carrito)); } catch (error) {}
}

function agregarAlCarrito(nombre, precio, ingredientesQuitados, nota) {
  // Si es el mismo producto con las mismas opciones, solo sube la cantidad
  const identificador = nombre + "|" + ingredientesQuitados.join(",") + "|" + nota;
  const yaExiste = carrito.find(item => item.identificador === identificador);
  if (yaExiste) yaExiste.cantidad++;
  else carrito.push({ identificador, nombre, precio, ingredientesQuitados, nota, cantidad: 1 });
  dibujarCarrito();
dibujarVideos();
}

function dibujarCarrito() {
  guardarCarrito();
  const totalProductos = carrito.reduce((suma, item) => suma + item.cantidad, 0);
  const totalDinero = carrito.reduce((suma, item) => suma + item.cantidad * item.precio, 0);
  elemento("#contadorCarrito").textContent = totalProductos;
  elemento("#totalPedido").textContent = formatearPrecio(totalDinero);

  elemento("#itemsCarrito").innerHTML = carrito.length
    ? carrito.map((item, posicion) => {
        const detalle = [...item.ingredientesQuitados, item.nota ? "Nota: " + item.nota : ""].filter(Boolean).join(", ");
        return `<div class="item"><div><h4>${escaparHtml(item.nombre)}</h4>
          ${detalle ? `<small>${escaparHtml(detalle)}</small>` : ""}<b>${formatearPrecio(item.precio * item.cantidad)}</b></div>
          <div class="qty"><button data-cambio="-1" data-posicion="${posicion}" aria-label="Quitar uno">-</button>${item.cantidad}
          <button data-cambio="1" data-posicion="${posicion}" aria-label="Agregar uno">+</button></div></div>`;
      }).join("")
    : `<p class="empty">Tu carrito está vacío 🍔</p>`;
}

elemento("#itemsCarrito").addEventListener("click", evento => {
  const boton = evento.target.closest("button");
  if (!boton) return;
  const posicion = Number(boton.dataset.posicion);
  carrito[posicion].cantidad += Number(boton.dataset.cambio);
  if (carrito[posicion].cantidad <= 0) carrito.splice(posicion, 1); // llegó a 0: se elimina
  dibujarCarrito();
dibujarVideos();
});

function abrirCarrito() {
  elemento("#panelCarrito").classList.add("on");
  elemento("#panelCarrito").setAttribute("aria-hidden", "false");
  elemento("#fondoOscuro").classList.add("on");
  bloquearScroll(true);
  pedirUbicacion();
}
function cerrarCarrito() {
  elemento("#panelCarrito").classList.remove("on");
  elemento("#panelCarrito").setAttribute("aria-hidden", "true");
  elemento("#fondoOscuro").classList.remove("on");
  bloquearScroll(false);
}
elemento("#botonAbrirCarrito").onclick = abrirCarrito;
elemento("#cerrarCarrito").onclick = cerrarCarrito;
elemento("#fondoOscuro").onclick = () => {
  if (!elemento("#ventanaPersonalizar").hidden) cerrarVentanaPersonalizar();
  else cerrarCarrito();
};
document.addEventListener("keydown", evento => {
  if (evento.key !== "Escape") return;
  if (!elemento("#ventanaPersonalizar").hidden) cerrarVentanaPersonalizar();
  else cerrarCarrito();
});

/* =====================================================
   UBICACIÓN (GPS)
   ===================================================== */
let ubicacionCliente = null;

function pedirUbicacion() {
  const textoEstado = elemento("#estadoGps");
  if (ubicacionCliente) return;
  if (!navigator.geolocation) { textoEstado.textContent = "No disponible en este dispositivo"; return; }
  textoEstado.textContent = "Solicitando permiso de ubicación...";
  navigator.geolocation.getCurrentPosition(
    posicion => {
      ubicacionCliente = { latitud: posicion.coords.latitude, longitud: posicion.coords.longitude };
      textoEstado.textContent = "Ubicación lista ✅";
    },
    error => {
      textoEstado.textContent = error.code === 1
        ? "Permiso denegado. Toca aquí para reintentar"
        : "No se pudo obtener. Toca aquí para reintentar";
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
  );
}
// Si el cliente rechazó el permiso, puede tocar el recuadro del GPS para pedirlo otra vez
elemento("#recuadroGps").addEventListener("click", () => { if (!ubicacionCliente) pedirUbicacion(); });

/* =====================================================
   PAGO MÓVIL (botones de copiar)
   ===================================================== */
elemento("#pagoBanco").textContent = DATOS_PAGO_MOVIL.banco;
elemento("#pagoTelefono").textContent = DATOS_PAGO_MOVIL.telefono;
elemento("#pagoCedula").textContent = DATOS_PAGO_MOVIL.cedula;

document.addEventListener("click", async evento => {
  const botonCopiar = evento.target.closest(".copy");
  if (!botonCopiar) return;
  const textoACopiar = elemento("#" + botonCopiar.dataset.copiar).textContent;
  try {
    await navigator.clipboard.writeText(textoACopiar);
  } catch (error) {                 // plan B para navegadores antiguos / iPhone
    const campoTemporal = document.createElement("textarea");
    campoTemporal.value = textoACopiar;
    campoTemporal.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(campoTemporal);
    campoTemporal.select();
    try { document.execCommand("copy"); } catch (e) {}
    campoTemporal.remove();
  }
  mostrarAviso("Copiado: " + textoACopiar);
});

/* =====================================================
   ENVIAR PEDIDO POR WHATSAPP
   ===================================================== */
elemento("#botonEnviarWhatsapp").onclick = () => {
  if (!carrito.length) { mostrarAviso("Agrega algo al carrito primero"); return; }
  let mensaje = "*Nuevo pedido - CrazyBurguer*\n\n";
  carrito.forEach(item => {
    mensaje += `• ${item.cantidad}x ${item.nombre} (${formatearPrecio(item.precio * item.cantidad)})\n`;
    if (item.ingredientesQuitados.length) mensaje += `   ${item.ingredientesQuitados.join(", ")}\n`;
    if (item.nota) mensaje += `   Nota: ${item.nota}\n`;
  });
  mensaje += `\n*Total: ${elemento("#totalPedido").textContent}*`;
  if (ubicacionCliente) mensaje += `\n📍 Mi ubicación: https://www.google.com/maps?q=${ubicacionCliente.latitud},${ubicacionCliente.longitud}`;
  mensaje += "\n\nPagaré por Pago Móvil. Enviaré el comprobante.";
  if (!ubicacionCliente) mostrarAviso("Se enviará sin ubicación");
  const enlace = document.createElement("a");
  enlace.href = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  enlace.target = "_blank";
  enlace.rel = "noopener";
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
};
elemento("#enlaceWhatsapp").href = `https://wa.me/${NUMERO_WHATSAPP}`;

/* =====================================================
   MENÚ SUPERIOR ACTIVO Y FOTOS DE LA PORTADA
   ===================================================== */
const enlacesDelMenu = document.querySelectorAll(".links a");
if ("IntersectionObserver" in window) {
  const vigilante = new IntersectionObserver(entradas => entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      enlacesDelMenu.forEach(enlace => enlace.classList.toggle("on", enlace.dataset.seccion === entrada.target.id));
    }
  }), { rootMargin: "-40% 0px -55% 0px" });
  ["inicio", "menu", "nosotros"].forEach(id => vigilante.observe(elemento("#" + id)));
}

const marcoPortada = elemento("#marcoPortada");
let fotoVisible = 0;
FOTOS_PORTADA.forEach(ruta => {
  const foto = new Image();
  foto.alt = "";
  foto.onload = () => {
    marcoPortada.appendChild(foto);
    if (marcoPortada.querySelectorAll("img").length === 1) foto.classList.add("on");
  };
  foto.src = ruta;
});
setInterval(() => {
  const fotos = marcoPortada.querySelectorAll("img");
  if (fotos.length < 2) return;
  fotos[fotoVisible % fotos.length].classList.remove("on");
  fotoVisible++;
  fotos[fotoVisible % fotos.length].classList.add("on");
}, 3500);

/* =====================================================
   VIDEOS DE PROPAGANDA (tipo GIF)
   ===================================================== */
function dibujarVideos() {
  const pista = elemento("#pistaVideos");
  const seccion = elemento("#promos");
  const videos = [];

  VIDEOS_PROPAGANDA.forEach(datos => {
    const tarjeta = document.createElement("figure");
    tarjeta.className = "promo";
    const video = document.createElement("video");
    video.src = datos.archivo;
    video.muted = true;                       // obligatorio para que se reproduzca solo
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;                 // evita pantalla completa en iPhone
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.preload = "metadata";
    video.setAttribute("aria-label", datos.titulo);
    video.addEventListener("error", () => {   // si el archivo no existe, se oculta esa tarjeta
      tarjeta.remove();
      if (!pista.children.length) seccion.hidden = true;
    });
    const texto = document.createElement("figcaption");
    texto.textContent = datos.titulo;
    tarjeta.append(video, texto);
    pista.appendChild(tarjeta);
    videos.push(video);
  });

  if (!videos.length) { seccion.hidden = true; return; }

  // Reproduce solo los videos que se ven en pantalla (ahorra datos y batería)
  if ("IntersectionObserver" in window) {
    const vigilanteVideos = new IntersectionObserver(entradas => entradas.forEach(entrada => {
      if (entrada.isIntersecting) { const p = entrada.target.play(); if (p && p.catch) p.catch(() => {}); }
      else entrada.target.pause();
    }), { threshold: 0.6 });
    videos.forEach(video => vigilanteVideos.observe(video));
  } else {
    videos.forEach(video => { const p = video.play(); if (p && p.catch) p.catch(() => {}); });
  }
}

/* =====================================================
   INICIO
   ===================================================== */
dibujarPestanas();
dibujarProductos();
dibujarCarrito();
dibujarVideos();

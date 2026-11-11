// Base de datos completa del menú oficial
const baseDatosMenu = {
    burgers: {
        normales: [
            { id: 1, nombre: "Normal de Carne", descripcion: "Carne de 90 gramos, lechuga, tomate, papas ralladas + queso amarillo.", precio: 5.50, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
            { id: 2, nombre: "Normal de Pollo", descripcion: "Milanesa de pollo, lechuga, tomate, papas ralladas + queso amarillo.", precio: 5.50, imagen: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80" },
            { id: 3, nombre: "Normal de Chuleta", descripcion: "Chuleta ahumada, lechuga, tomate, papas ralladas + queso amarillo.", precio: 5.50, imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" }
        ],
        especiales: [
            { id: 4, nombre: "Especial de Carne", descripcion: "2 carnes de 90 gramos, lechuga, tomate, maíz, tocineta, huevo, papas ralladas, queso amarillo + papas fritas.", precio: 7.00, imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80" },
            { id: 5, nombre: "Especial de Pollo", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maíz, tocineta + papas fritas.", precio: 7.00, imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80" },
            { id: 6, nombre: "Pollo Crispy", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maíz, tocineta + papas fritas.", precio: 7.00, imagen: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80" },
            { id: 7, nombre: "Especial de Chuleta", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maíz, tocineta + papas fritas.", precio: 7.00, imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
            { id: 8, nombre: "Carne & Pollo (Mixta)", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maíz, tocineta + papas fritas.", precio: 8.50, imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80" },
            { id: 9, nombre: "Pollo & Chuleta (Mixta)", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maíz, tocineta + papas fritas.", precio: 8.50, imagen: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=500&q=80" },
            { id: 10, nombre: "Chuleta & Carne (Mixta)", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maíz, tocineta + papas fritas.", precio: 8.50, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
            { id: 27, nombre: "Carne & Crispy (Mixta)", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maiz, tocineta + papas fritas.", precio: 8.50, imagen: ""},
            { id: 28, nombre: "Pollo & Crispy (Mixta)", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo maiz, tocineta + papas fritas.", precio: 8.50, imagen: ""},
            { id: 29, nombre: "Chuleta & Crispy (Mixta)", descripcion: "Lechuga, tomate, papas ralladas, queso amarillo, huevo, maiz, tocineta + papas fritas.", precio: 8.50, imagen: ""}
        ]
    },
    hotdogs: [
        { id: 11, nombre: "Perro Normal", descripcion: "Ensalada, cebolla, papas ralladas, queso amarillo + salsas.", precio: 2.00, imagen: "hotdog.jpg" },
        { id: 12, nombre: "Perro Especial", descripcion: "Ensalada, cebolla, papas ralladas, queso amarillo, maíz + salsas.", precio: 2.50, imagen: "hotdog.jpg" },
        { id: 13, nombre: "Súper Especial", descripcion: "Ensalada, cebolla, papas ralladas, queso amarillo, maíz, tocineta + salsas.", precio: 3.00, imagen: "hotdog.jpg" },
        { id: 14, nombre: "Polaco", descripcion: "Pan granjero, salchicha polaca, ensalada, cebolla, papas ralladas, maíz + tocineta.", precio: 5.00, imagen: "hotdog.jpg" }
    ],
    pepitos: [
        { id: 15, nombre: "Pepito Mini (Carne, Pollo o Mixtos)", descripcion: "Pan granjero, lechuga, tomate, papas ralladas, queso amarillo, maíz, tocineta + papas fritas.", precio: 8.00, imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80" },
        { id: 16, nombre: "Pepito Grande (Carne, Pollo o Mixtos)", descripcion: "Pan canilla, lechuga, tomate, papas ralladas, queso amarillo, maíz, tocineta + papas fritas.", precio: 14.00, imagen: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=500&q=80" },
        { id: 25, nombre: "Shawarma de Carne", descripcion: "Pan árabe, carne jugosa, vegetales frescos, salsa de la casa y papas.", precio: 7.00, imagen: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80" },
        { id: 26, nombre: "Shawarma de Pollo", descripcion: "Pan árabe, pollo marinado, vegetales frescos, salsa de la casa y papas.", precio: 7.00, imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80" }
    ],   
    salchipapas: [
        { id: 17, nombre: "Salchipapa Pequeña", descripcion: "Salchichas, pollo crispy, queso amarillo, 300g de papas.", precio: 6.00, imagen: "Salchipe.png" },
        { id: 18, nombre: "Salchipapa Grande", descripcion: "Salchichas, pollo crispy, queso amarillo, 500g de papas.", precio: 9.00, imagen: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80" },
        { id: 23, nombre: "Club House Pequeño", descripcion: "Deliciosa club house tamaño pequeño con todos los ingredientes.", precio: 8.00, imagen: "club.png" },
        { id: 24, nombre: "Club House Grande", descripcion: "Deliciosa club house tamaño grande con porción doble.", precio: 14.00, imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80" }
    ],
    papas: [
        { id: 19, nombre: "Ración de Papas Fritas", descripcion: "Porción de papas fritas (250g).", precio: 3.50, imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80" }
    ],
    bebidas: [
        { id: 20, nombre: "Nestea", descripcion: "Bebida refrescante.", precio: 1.50, imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80", tipoBebida: "nestea" },
        { id: 21, nombre: "Refresco de Botella", descripcion: "Presentación personal.", precio: 2.00, imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80", tipoBebida: "refresco" },
        { id: 22, nombre: "Refresco Grande", descripcion: "Para compartir.", precio: 3.50, imagen: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80", tipoBebida: "refresco" }
    ]
};

// Variables globales del sistema
let listaCarrito = [];
let productoSeleccionadoActual = null;
let categoriaActualTipo = "";
let enlaceUbicacionGPS = "";

// 🎬 Lista de videos de propaganda
const listaPropagandasVideos = [
    "Samy.mp4",
    "two.mp4",
    "tree.mp4"
];

let indiceVideoActual = 0;

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    filtrarCategoria('burgers', document.querySelector('.boton-pestana'));
    iniciarReproductorSinPausas();
});

// 🔄 Reproductor de propagandas continuo sin pantallas de carga ni parpadeos negros
function iniciarReproductorSinPausas() {
    const videoElem1 = document.getElementById('reproductor-video-1');
    const videoElem2 = document.getElementById('reproductor-video-2');

    if (!videoElem1 || !videoElem2) return;

    videoElem1.src = listaPropagandasVideos[0];
    videoElem1.load();
    videoElem1.play().catch(() => {
        videoElem1.muted = true;
        videoElem1.play();
    });

    precargarSiguienteVideo(videoElem2);

    videoElem1.onended = () => alternarVideo(videoElem1, videoElem2);
    videoElem2.onended = () => alternarVideo(videoElem2, videoElem1);
}

function alternarVideo(videoActual, videoSiguiente) {
    indiceVideoActual = (indiceVideoActual + 1) % listaPropagandasVideos.length;

    videoSiguiente.play().catch(() => {});
    videoSiguiente.classList.add('activo');
    videoActual.classList.remove('activo');

    setTimeout(() => {
        precargarSiguienteVideo(videoActual);
    }, 400);
}

function precargarSiguienteVideo(reproductorOculto) {
    const siguienteIndice = (indiceVideoActual + 1) % listaPropagandasVideos.length;
    reproductorOculto.src = listaPropagandasVideos[siguienteIndice];
    reproductorOculto.load();
}

// Función para filtrar y mostrar el menú por pestañas
function filtrarCategoria(nombreCategoria, botonPresionado) {
    if (botonPresionado) {
        document.querySelectorAll('.boton-pestana').forEach(boton => boton.classList.remove('activa'));
        botonPresionado.classList.add('activa');
    }

    const contenedorMenu = document.getElementById('cuadricula-productos');
    contenedorMenu.innerHTML = '';

    if (nombreCategoria === 'burgers') {
        const tituloNormales = document.createElement('h3');
        tituloNormales.className = 'subtitulo-categoria';
        tituloNormales.innerText = 'Hamburguesas Normales';
        contenedorMenu.appendChild(tituloNormales);

        const cuadriculaNormales = document.createElement('div');
        cuadriculaNormales.style.display = 'grid';
        cuadriculaNormales.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
        cuadriculaNormales.style.gap = '2rem';
        cuadriculaNormales.style.marginBottom = '2rem';

        baseDatosMenu.burgers.normales.forEach(producto => {
            cuadriculaNormales.appendChild(crearTarjetaProducto(producto, 'burgers-normales'));
        });
        contenedorMenu.appendChild(cuadriculaNormales);

        const tituloEspeciales = document.createElement('h3');
        tituloEspeciales.className = 'subtitulo-categoria';
        tituloEspeciales.innerText = 'Especiales y Mixtas';
        contenedorMenu.appendChild(tituloEspeciales);

        const cuadriculaEspeciales = document.createElement('div');
        cuadriculaEspeciales.style.display = 'grid';
        cuadriculaEspeciales.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
        cuadriculaEspeciales.style.gap = '2rem';

        baseDatosMenu.burgers.especiales.forEach(producto => {
            cuadriculaEspeciales.appendChild(crearTarjetaProducto(producto, 'burgers-especiales'));
        });
        contenedorMenu.appendChild(cuadriculaEspeciales);

    } else {
        const listaItems = baseDatosMenu[nombreCategoria];
        const cuadriculaGeneral = document.createElement('div');
        cuadriculaGeneral.style.display = 'grid';
        cuadriculaGeneral.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
        cuadriculaGeneral.style.gap = '2rem';

        listaItems.forEach(producto => {
            cuadriculaGeneral.appendChild(crearTarjetaProducto(producto, nombreCategoria));
        });
        contenedorMenu.appendChild(cuadriculaGeneral);
    }
}

// Función para generar cada tarjeta de producto visualmente
function crearTarjetaProducto(producto, categoria) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-producto';
    
    // Texto dinámico para el botón según la categoría
    let textoBoton = "Personalizar";
    if (categoria === 'bebidas') {
        textoBoton = producto.tipoBebida === 'refresco' ? 'Elegir Sabor' : 'Agregar Nota';
    } else if (categoria === 'salchipapas' || categoria === 'papas') {
        textoBoton = 'Agregar';
    }

    tarjeta.innerHTML = `
        <div>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
            <h3 class="titulo-producto">${producto.nombre}</h3>
            <p class="descripcion-producto">${producto.descripcion}</p>
        </div>
        <div class="pie-tarjeta">
            <span class="precio-producto">$${producto.precio.toFixed(2)}</span>
            <button class="boton-agregar" onclick="manejarAccionProducto(${producto.id}, '${categoria}')">
                <i class="fas fa-plus"></i> ${textoBoton}
            </button>
        </div>
    `;
    return tarjeta;
}

// Controla si abre modal o agrega directo (Salchipapas, Club House, Papas van directas; Bebidas abre modal de sabores; Burgers, Perros, Pepitos, Shawarmas abren modal)
function manejarAccionProducto(idProducto, categoria) {
    let listaBusqueda = [];
    if (categoria === 'burgers-normales') listaBusqueda = baseDatosMenu.burgers.normales;
    else if (categoria === 'burgers-especiales') listaBusqueda = baseDatosMenu.burgers.especiales;
    else listaBusqueda = baseDatosMenu[categoria];

    const productoEncontrado = listaBusqueda.find(item => item.id === idProducto);
    if (!productoEncontrado) return;

    // Solo salchipapas y papas van directas sin modal. Bebidas, hamburguesas, perros y pepitos (incluyendo shawarmas) abren su modal correspondiente.
    if (categoria === 'salchipapas' || categoria === 'papas') {
        agregarDirectoAlCarritoSinModal(productoEncontrado);
    } else {
        abrirModalPersonalizacion(productoEncontrado, categoria);
    }
}

// Función para agregar al carrito de forma directa (sin modales)
function agregarDirectoAlCarritoSinModal(producto) {
    const identificadorItemCarrito = `${producto.id}-Sin modificaciones`;
    const productoExistente = listaCarrito.find(item => item.identificadorItemCarrito === identificadorItemCarrito);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        listaCarrito.push({
            ...producto,
            identificadorItemCarrito: identificadorItemCarrito,
            modificaciones: "Sin modificaciones",
            cantidad: 1
        });
    }

    actualizarInterfazCarrito();
    mostrarNotificacionToast();
}

// Abrir el modal flotante para personalizar ingredientes o elegir sabores de bebidas
function abrirModalPersonalizacion(producto, categoria) {
    productoSeleccionadoActual = producto;
    categoriaActualTipo = categoria;
    
    document.getElementById('titulo-producto-modal').innerText = productoSeleccionadoActual.nombre;
    const contenedorOpciones = document.getElementById('opciones-personalizacion');

    if (categoria === 'bebidas' && productoSeleccionadoActual.tipoBebida === 'refresco') {
        contenedorOpciones.innerHTML = `
            <h4>Elige el sabor del refresco:</h4>
            <label class="opcion-personalizada"><input type="radio" name="sabor-refresco" value="Sabor: Kolita / Chinchivito" checked> Kolita</label>
            <label class="opcion-personalizada"><input type="radio" name="sabor-refresco" value="Sabor: Uva"> Uva</label>
            <label class="opcion-personalizada"><input type="radio" name="sabor-refresco" value="Sabor: Cola / Pepsi / Coca-Cola"> Cola</label>
            <label class="opcion-personalizada"><input type="radio" name="sabor-refresco" value="Sabor: Naranja"> Naranja</label>
            
            <h4 style="margin-top: 1rem;">Nota adicional:</h4>
            <input type="text" id="nota-personalizada" placeholder="Ej: Muy frío, con hielo..." style="width: 100%; padding: 0.6rem; border-radius: 8px; background: var(--negro-principal); border: 1px solid var(--amarillo-principal); color: #fff;">
        `;
    } else if (categoria === 'bebidas' && productoSeleccionadoActual.tipoBebida === 'nestea') {
        contenedorOpciones.innerHTML = `
            <h4>Nota adicional para tu Nestea:</h4>
            <input type="text" id="nota-personalizada" placeholder="Ej: Muy frío, con hielo..." style="width: 100%; padding: 0.6rem; border-radius: 8px; background: var(--negro-principal); border: 1px solid var(--amarillo-principal); color: #fff;">
        `;
    } else {
        contenedorOpciones.innerHTML = `
            <h4>Quitar ingredientes:</h4>
            <label class="opcion-personalizada"><input type="checkbox" value="Sin lechuga"> Sin lechuga</label>
            <label class="opcion-personalizada"><input type="checkbox" value="Sin tomate"> Sin tomate</label>
            <label class="opcion-personalizada"><input type="checkbox" value="Sin cebolla"> Sin cebolla</label>
            <label class="opcion-personalizada"><input type="checkbox" value="Sin salsas"> Sin salsas</label>
            <label class="opcion-personalizada"><input type="checkbox" value="Sin queso"> Sin queso</label>
            
            <h4 style="margin-top: 1rem;">Notas especiales:</h4>
            <input type="text" id="nota-personalizada" placeholder="Ej: Salsa aparte, bien tostado..." style="width: 100%; padding: 0.6rem; border-radius: 8px; background: var(--negro-principal); border: 1px solid var(--amarillo-principal); color: #fff;">
        `;
    }

    document.getElementById('boton-confirmar-personalizacion').onclick = confirmarAgregarAlCarrito;
    document.getElementById('modal-personalizacion').classList.add('activo');
}

function cerrarModalPersonalizacion() {
    document.getElementById('modal-personalizacion').classList.remove('activo');
}

// Confirmar la adición del producto personalizado al carrito
function confirmarAgregarAlCarrito() {
    let textoModificaciones = "";

    if (categoriaActualTipo === 'bebidas') {
        if (productoSeleccionadoActual.tipoBebida === 'refresco') {
            const saborElegido = document.querySelector('input[name="sabor-refresco"]:checked');
            let listaMods = saborElegido ? [saborElegido.value] : [];
            const notaAdicional = document.getElementById('nota-personalizada').value.trim();
            if (notaAdicional) listaMods.push(`Nota: ${notaAdicional}`);
            textoModificaciones = listaMods.length > 0 ? listaMods.join(', ') : 'Sabor estándar';
        } else {
            const notaAdicional = document.getElementById('nota-personalizada').value.trim();
            textoModificaciones = notaAdicional ? `Nota: ${notaAdicional}` : 'Sin modificaciones';
        }
    } else {
        const checkboxesMarcados = document.querySelectorAll('#opciones-personalizacion input[type="checkbox"]:checked');
        let listaMods = [];
        checkboxesMarcados.forEach(checkbox => listaMods.push(checkbox.value));

        const notaAdicional = document.getElementById('nota-personalizada').value.trim();
        if (notaAdicional) listaMods.push(`Nota: ${notaAdicional}`);
        textoModificaciones = listaMods.length > 0 ? listaMods.join(', ') : 'Sin modificaciones';
    }

    const identificadorItemCarrito = `${productoSeleccionadoActual.id}-${textoModificaciones}`;
    const productoExistente = listaCarrito.find(item => item.identificadorItemCarrito === identificadorItemCarrito);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        listaCarrito.push({
            ...productoSeleccionadoActual,
            identificadorItemCarrito: identificadorItemCarrito,
            modificaciones: textoModificaciones,
            cantidad: 1
        });
    }

    cerrarModalPersonalizacion();
    actualizarInterfazCarrito();
    mostrarNotificacionToast();
}

// Solicitar permisos de GPS de forma automática
function solicitarUbicacionGPS() {
    const estadoGPS = document.getElementById('estado-gps');

    if (!navigator.geolocation) {
        estadoGPS.innerText = "Geolocalización no soportada";
        return;
    }

    estadoGPS.innerText = "Solicitando permiso de ubicación...";

    navigator.geolocation.getCurrentPosition(
        (posicion) => {
            const latitud = posicion.coords.latitude;
            const longitud = posicion.coords.longitude;
            enlaceUbicacionGPS = `https://maps.google.com/?q=${latitud},${longitud}`;
            estadoGPS.innerText = "¡Ubicación GPS obtenida con éxito! ✅";
        },
        (error) => {
            if (error.code === error.PERMISSION_DENIED) {
                estadoGPS.innerText = "❌ Permiso denegado. Habilítalo en tu navegador.";
            } else {
                estadoGPS.innerText = "⚠️ Activa el GPS de tu teléfono.";
            }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
}

// Modificar cantidades de productos en el carrito
function cambiarCantidadItem(identificadorItemCarrito, cambio) {
    const itemEncontrado = listaCarrito.find(item => item.identificadorItemCarrito === identificadorItemCarrito);
    if (itemEncontrado) {
        itemEncontrado.cantidad += cambio;
        if (itemEncontrado.cantidad <= 0) {
            listaCarrito = listaCarrito.filter(item => item.identificadorItemCarrito !== identificadorItemCarrito);
        }
    }
    actualizarInterfazCarrito();
}

// Actualizar el diseño visual y total del carrito
function actualizarInterfazCarrito() {
    const contenedorItems = document.getElementById('contenedor-items-carrito');
    const contadorProductos = document.getElementById('contador-productos');
    const montoTotal = document.getElementById('monto-total');

    contenedorItems.innerHTML = '';
    let sumaTotal = 0;
    let cantidadTotalItems = 0;

    listaCarrito.forEach(item => {
        sumaTotal += item.precio * item.cantidad;
        cantidadTotalItems += item.cantidad;

        const elementoItem = document.createElement('div');
        elementoItem.className = 'item-carrito';
        elementoItem.innerHTML = `
            <div class="info-item-carrito">
                <h4>${item.nombre}</h4>
                <p>${item.modificaciones || item.modifications}</p>
                <span>$${(item.precio * item.cantidad).toFixed(2)}</span>
            </div>
            <div class="controles-cantidad">
                <button class="boton-cantidad" onclick="cambiarCantidadItem('${item.identificadorItemCarrito}', -1)">-</button>
                <span>${item.cantidad}</span>
                <button class="boton-cantidad" onclick="cambiarCantidadItem('${item.identificadorItemCarrito}', 1)">+</button>
            </div>
        `;
        contenedorItems.appendChild(elementoItem);
    });

    contadorProductos.innerText = cantidadTotalItems;
    montoTotal.innerText = `$${sumaTotal.toFixed(2)}`;
}

// Abrir o cerrar el panel lateral del carrito
function alternarCarrito() {
    const panelCarrito = document.getElementById('panel-carrito');
    panelCarrito.classList.toggle('activo');
    document.getElementById('fondo-carrito').classList.toggle('activo');

    if (panelCarrito.classList.contains('activo')) {
        solicitarUbicacionGPS();
    }
}

// Mostrar notificación flotante de éxito
function mostrarNotificacionToast() {
    const alertaToast = document.getElementById('alerta-toast');
    alertaToast.classList.add('mostrar');
    setTimeout(() => {
        alertaToast.classList.remove('mostrar');
    }, 2000);
}

// Copiar datos de pago móvil automáticamente
function copiarTexto(idElemento) {
    const textoACopiar = document.getElementById(idElemento).innerText;
    
    navigator.clipboard.writeText(textoACopiar).then(() => {
        alert(`¡Copiado al portapapeles: ${textoACopiar}!`);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Enviar el pedido completo directo a WhatsApp (+584244629938)
function enviarPedidoWhatsApp() {
    if (listaCarrito.length === 0) {
        alert("Tu carrito está vacío. ¡Agrega unos antojos!");
        return;
    }
    
    let mensajeWhatsApp = "¡Hola CrazyBurguer! Quiero realizar este pedido:\n\n";
    let sumaTotal = 0;
    
    listaCarrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        sumaTotal += subtotal;
        mensajeWhatsApp += `• ${item.cantidad}x ${item.nombre}\n  └ Detalle: ${item.modifications || item.modificaciones}\n  └ Subtotal: $${subtotal.toFixed(2)}\n\n`;
    });
    
    mensajeWhatsApp += `*Total a pagar:* $${sumaTotal.toFixed(2)}\n\n`;

    if (enlaceUbicacionGPS) {
        mensajeWhatsApp += `📍 *Mi ubicación de entrega:* ${enlaceUbicacionGPS}`;
    } else {
        mensajeWhatsApp += `📍 *Ubicación:* (Permiso de GPS denegado o desactivado)`;
    }
    
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    window.open(`https://wa.me/584244629938?text=${mensajeCodificado}`, '_blank');
}
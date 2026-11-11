// =========================================================
// CONFIGURACIÓN DE ALERTAS (SweetAlert2 - Estilo Forza)
// =========================================================
const SwalForza = Swal.mixin({
    confirmButtonColor: "#e81123",
    cancelButtonColor: "#4b5563"
});

// =========================================================
// 1. DATOS INICIALES: USUARIOS, CATÁLOGO Y DICCIONARIOS
// =========================================================

// Array de objetos de usuarios (Mínimo 3 usuarios y 2 roles + cuenta deshabilitada)
const usuariosSistema = [
    { id: 1, nombre: "Administrador General", email: "admin@autotech.com", password: "Admin123", telefono: "0990001111", rol: "Administrador", activo: true },
    { id: 2, nombre: "Robert Buri", email: "cliente1@correo.com", password: "Cliente123", telefono: "0987654321", rol: "Cliente", activo: true },
    { id: 3, nombre: "María Fernanda Gómez", email: "cliente2@correo.com", password: "Cliente123", telefono: "0991122334", rol: "Cliente", activo: true },
    { id: 4, nombre: "Usuario Suspendido", email: "bloqueado@correo.com", password: "Bloqueado123", telefono: "0999999999", rol: "Cliente", activo: false }
];

// Catálogo de servicios con íconos SVG minimalistas (Módulo 1)
const catalogoServicios = [
    {
        titulo: "Mantenimiento General",
        precio: "$75.00",
        tiempo: "2 horas",
        desc: "Revisión integral multipunto, afinación de motor y limpieza de inyectores para óptimo rendimiento.",
        icono: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/></svg>`
    },
    {
        titulo: "Cambio de Aceite y Filtros",
        precio: "$35.00",
        tiempo: "45 min",
        desc: "Sustitución de lubricante sintético de alto desempeño y revisión de filtros del motor.",
        icono: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/></svg>`
    },
    {
        titulo: "Revisión de Frenos y Suspensión",
        precio: "$50.00",
        tiempo: "1.5 horas",
        desc: "Inspección de pastillas, discos, líquido hidráulico y amortiguadores para una conducción segura.",
        icono: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276"/><path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848Z"/></svg>`
    },
    {
        titulo: "Diagnóstico Electrónico Escáner",
        precio: "$25.00",
        tiempo: "30 min",
        desc: "Telemetría computarizada OBD2 para lectura de sensores, códigos de falla y estado de batería.",
        icono: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>`
    }
];

// Diccionario de clases Bootstrap para el estado de cada solicitud
const diccionarioColoresEstado = {
    "Pendiente": "bg-secondary text-white",
    "En revisión": "bg-info text-dark fw-semibold",
    "En proceso": "bg-warning text-dark fw-semibold",
    "Finalizado": "bg-success text-white fw-semibold",
    "Cancelado": "bg-danger text-white"
};

const listaEstados = ["Pendiente", "En revisión", "En proceso", "Finalizado", "Cancelado"];

// Estado de sesión y persistencia en localStorage
let usuarioActual = JSON.parse(localStorage.getItem("usuarioSesion_AD01")) || null;
let solicitudesMantenimiento = JSON.parse(localStorage.getItem("solicitudes_AD01")) || [
    {
        id: "ORD-1001",
        clienteNombre: "Robert Buri",
        clienteEmail: "cliente1@correo.com",
        clienteTelefono: "0987654321",
        vehiculoPlaca: "PBA-4521",
        vehiculoMarca: "Mazda",
        vehiculoModelo: "3 Sport",
        vehiculoAnio: 2023,
        vehiculoKm: 24500,
        tipoServicio: "Mantenimiento General",
        fechaCita: "2026-11-20",
        horaCita: "10:00",
        modalidad: "Estándar",
        extras: ["Lavado Exterior", "Nivelación de Fluidos"],
        observaciones: "Mantenimiento periódico de los 25.000 km.",
        estado: "En proceso"
    }
];

// =========================================================
// 2. INICIALIZACIÓN Y RENDERIZADO DEL DOM
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    renderizarCatalogoServicios();
    generarHorariosSelect();
    configurarFechaMinima();
    actualizarInterfazSesion();
});

// Uso de map() para generar las tarjetas minimalistas del catálogo
function renderizarCatalogoServicios() {
    const contenedor = document.getElementById("contenedorServicios");
    const tarjetasHTML = catalogoServicios.map(serv => `
        <div class="col-md-6 col-lg-3">
            <div class="forza-service-card h-100 d-flex flex-column">
                <div class="forza-icon-circle">
                    ${serv.icono}
                </div>
                <h3 class="h5 fw-bold text-dark mb-2">${serv.titulo}</h3>
                <p class="text-secondary small flex-grow-1 mb-3">${serv.desc}</p>
                <div class="pt-3 border-top d-flex justify-content-between align-items-center">
                    <span class="fw-bold text-dark">${serv.precio} <small class="text-secondary fw-normal">(${serv.tiempo})</small></span>
                    <button type="button" class="btn btn-sm btn-forza-outline-dark" onclick="seleccionarServicioCatalogo('${serv.titulo}')">Elegir</button>
                </div>
            </div>
        </div>
    `);
    contenedor.innerHTML = tarjetasHTML.join("");
}

// Heurística de Nielsen #7 (Flexibilidad y eficiencia): Preseleccionar servicio desde la tarjeta
window.seleccionarServicioCatalogo = function(nombreServicio) {
    if (!usuarioActual) {
        const modal = new bootstrap.Modal(document.getElementById("modalLogin"));
        modal.show();
        return;
    }
    document.getElementById("tipoServicio").value = nombreServicio;
    document.getElementById("seccionFormulario").scrollIntoView({ behavior: "smooth" });
};

// Botones de llamada a la acción (Hero y Banner inferior)
document.getElementById("btnHeroAgendar").addEventListener("click", gestionarBotonAgendar);
document.getElementById("btnCtaInferior").addEventListener("click", gestionarBotonAgendar);

function gestionarBotonAgendar() {
    if (!usuarioActual) {
        const modal = new bootstrap.Modal(document.getElementById("modalLogin"));
        modal.show();
    } else {
        document.getElementById("seccionFormulario").scrollIntoView({ behavior: "smooth" });
    }
}

// Uso de bucle for clásico para poblar horarios (08:00 a 17:00)
function generarHorariosSelect() {
    const selectHora = document.getElementById("horaCita");
    selectHora.innerHTML = '<option value="">Seleccione...</option>';
    for (let hora = 8; hora <= 17; hora++) {
        const horaFormateada = `${hora.toString().padStart(2, "0")}:00`;
        selectHora.innerHTML += `<option value="${horaFormateada}">${horaFormateada}</option>`;
    }
}

function configurarFechaMinima() {
    const hoy = new Date().toISOString().split("T")[0];
    document.getElementById("fechaCita").setAttribute("min", hoy);
}

function guardarEnLocalStorage() {
    localStorage.setItem("solicitudes_AD01", JSON.stringify(solicitudesMantenimiento));
}

// =========================================================
// 3. AUTENTICACIÓN, ROLES Y PERMISOS (Módulo 3)
// =========================================================

// Heurística #6 (Reconocimiento antes que recuerdo): Autocompletar credenciales de prueba
window.autocompletarLogin = function(correo, clave) {
    document.getElementById("loginEmail").value = correo;
    document.getElementById("loginPassword").value = clave;
};

document.getElementById("formLogin").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("loginEmail").value.trim().toLowerCase();
    const passwordInput = document.getElementById("loginPassword").value.trim();

    // Uso de find() para autenticar al usuario
    const usuarioEncontrado = usuariosSistema.find(
        u => u.email.toLowerCase() === emailInput && u.password === passwordInput
    );

    // Caso de prueba 2: Credenciales inválidas
    if (!usuarioEncontrado) {
        SwalForza.fire("Credenciales incorrectas", "Verifica tu correo electrónico y contraseña.", "error");
        return;
    }

    // Caso de prueba 2: Cuenta deshabilitada
    if (!usuarioEncontrado.activo) {
        SwalForza.fire("Cuenta deshabilitada", "Este usuario se encuentra suspendido. Contacta a soporte.", "warning");
        return;
    }

    usuarioActual = usuarioEncontrado;
    localStorage.setItem("usuarioSesion_AD01", JSON.stringify(usuarioActual));

    const modalEl = document.getElementById("modalLogin");
    const modalInstancia = bootstrap.Modal.getInstance(modalEl);
    if (modalInstancia) modalInstancia.hide();

    document.getElementById("formLogin").reset();
    actualizarInterfazSesion();

    SwalForza.fire({
        icon: "success",
        title: `Bienvenido, ${usuarioActual.nombre}`,
        text: `Sesión iniciada con el rol de ${usuarioActual.rol}.`,
        timer: 1700,
        showConfirmButton: false
    });
});

document.getElementById("btnCerrarSesion").addEventListener("click", () => {
    usuarioActual = null;
    localStorage.removeItem("usuarioSesion_AD01");
    limpiarFormulario();
    actualizarInterfazSesion();
    SwalForza.fire("Sesión finalizada", "Has cerrado tu sesión de forma segura.", "info");
});

// Caso de prueba 5: Cliente intenta entrar en Administración
document.getElementById("navAdmin").addEventListener("click", (e) => {
    if (!usuarioActual || usuarioActual.rol !== "Administrador") {
        e.preventDefault();
        SwalForza.fire("Acceso denegado", "No cuentas con permisos de Administrador para acceder a esta sección.", "error");
    }
});

function actualizarInterfazSesion() {
    const etiqueta = document.getElementById("etiquetaUsuario");
    const btnLogin = document.getElementById("btnAbrirLogin");
    const btnSalir = document.getElementById("btnCerrarSesion");

    const seccionPerfil = document.getElementById("seccionPerfil");
    const seccionForm = document.getElementById("seccionFormulario");
    const seccionCliente = document.getElementById("seccionCliente");
    const seccionAdmin = document.getElementById("seccionAdmin");

    const navForm = document.getElementById("navFormulario");
    const navMisMant = document.getElementById("navMisMantenimientos");

    if (!usuarioActual) {
        etiqueta.textContent = "Visitante";
        etiqueta.className = "badge forza-badge-session";
        btnLogin.classList.remove("d-none");
        btnSalir.classList.add("d-none");

        seccionPerfil.classList.add("d-none");
        seccionForm.classList.add("d-none");
        seccionCliente.classList.add("d-none");
        seccionAdmin.classList.add("d-none");
        navForm.classList.add("d-none");
        navMisMant.classList.add("d-none");
        return;
    }

    etiqueta.textContent = `${usuarioActual.nombre} (${usuarioActual.rol})`;
    etiqueta.className = usuarioActual.rol === "Administrador" ? "badge bg-danger px-3 py-2" : "badge bg-primary px-3 py-2";
    btnLogin.classList.add("d-none");
    btnSalir.classList.remove("d-none");

    // Mostrar datos del perfil (Caso de prueba 1)
    seccionPerfil.classList.remove("d-none");
    document.getElementById("datosPerfil").innerHTML = `
        <div class="col-md-3"><span class="text-secondary small d-block">Titular</span><strong>${usuarioActual.nombre}</strong></div>
        <div class="col-md-4"><span class="text-secondary small d-block">Correo electrónico</span><strong>${usuarioActual.email}</strong></div>
        <div class="col-md-3"><span class="text-secondary small d-block">Teléfono</span><strong>${usuarioActual.telefono}</strong></div>
        <div class="col-md-2"><span class="text-secondary small d-block">Rol asignado</span><span class="badge bg-dark">${usuarioActual.rol}</span></div>
    `;

    seccionForm.classList.remove("d-none");
    seccionCliente.classList.remove("d-none");
    navForm.classList.remove("d-none");
    navMisMant.classList.remove("d-none");

    // Restricción de campos según rol (Prevención de errores - Heurística #5)
    const inputNombre = document.getElementById("clienteNombre");
    const inputEmail = document.getElementById("clienteEmail");
    const inputTel = document.getElementById("clienteTelefono");

    if (usuarioActual.rol === "Cliente") {
        inputNombre.value = usuarioActual.nombre;
        inputEmail.value = usuarioActual.email;
        inputTel.value = usuarioActual.telefono;
        inputNombre.readOnly = true;
        inputEmail.readOnly = true;
        seccionAdmin.classList.add("d-none");
    } else {
        inputNombre.readOnly = false;
        inputEmail.readOnly = false;
        if (!document.getElementById("solicitudId").value) {
            inputNombre.value = "";
            inputEmail.value = "";
            inputTel.value = "";
        }
        seccionAdmin.classList.remove("d-none");
        renderizarTablaAdmin();
    }

    renderizarTablaCliente();
}

// =========================================================
// 4. VALIDACIONES Y REGISTRO / EDICIÓN (Módulo 2)
// =========================================================

function validarDatosFormulario(datos) {
    if (!datos.clienteNombre || !datos.clienteEmail || !datos.clienteTelefono ||
        !datos.vehiculoPlaca || !datos.vehiculoMarca || !datos.vehiculoModelo ||
        !datos.vehiculoAnio || !datos.vehiculoKm || !datos.tipoServicio ||
        !datos.fechaCita || !datos.horaCita || !datos.observaciones) {
        return "Por favor, completa todos los campos obligatorios marcados con (*).";
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(datos.clienteEmail)) {
        return "Ingresa una dirección de correo electrónico válida (ejemplo: cliente@correo.com).";
    }

    const regexTelefono = /^[0-9]{10}$/;
    if (!regexTelefono.test(datos.clienteTelefono)) {
        return "El número de teléfono debe tener exactamente 10 dígitos numéricos.";
    }

    const regexPlaca = /^[A-Z]{3}-[0-9]{3,4}$/;
    if (!regexPlaca.test(datos.vehiculoPlaca)) {
        return "Formato de placa inválido. Ingresa 3 letras, un guion y 3 o 4 dígitos (ejemplo: PBA-1234).";
    }

    const anioNum = Number(datos.vehiculoAnio);
    if (isNaN(anioNum) || anioNum < 1980 || anioNum > 2027) {
        return "El año del vehículo debe estar comprendido entre 1980 y 2027.";
    }

    const kmNum = Number(datos.vehiculoKm);
    if (isNaN(kmNum) || kmNum <= 0 || kmNum > 1000000) {
        return "El kilometraje debe ser un valor positivo entre 1 y 1,000,000 km.";
    }

    const hoy = new Date().toISOString().split("T")[0];
    if (datos.fechaCita < hoy) {
        return "La fecha de la solicitud no puede ser anterior a la fecha actual.";
    }

    return null;
}

document.getElementById("formMantenimiento").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!usuarioActual) {
        SwalForza.fire("Sesión requerida", "Inicia sesión para registrar una solicitud de mantenimiento.", "warning");
        return;
    }

    // Uso de bucle for...of para obtener checkboxes seleccionados
    const checkboxes = document.querySelectorAll(".check-extra");
    const extrasSeleccionados = [];
    for (const check of checkboxes) {
        if (check.checked) {
            extrasSeleccionados.push(check.value);
        }
    }

    const modalidadSeleccionada = document.querySelector('input[name="modalidad"]:checked').value;
    const idEdicion = document.getElementById("solicitudId").value;

    const datosSolicitud = {
        clienteNombre: document.getElementById("clienteNombre").value.trim(),
        clienteEmail: document.getElementById("clienteEmail").value.trim().toLowerCase(),
        clienteTelefono: document.getElementById("clienteTelefono").value.trim(),
        vehiculoPlaca: document.getElementById("vehiculoPlaca").value.trim().toUpperCase(),
        vehiculoMarca: document.getElementById("vehiculoMarca").value.trim(),
        vehiculoModelo: document.getElementById("vehiculoModelo").value.trim(),
        vehiculoAnio: Number(document.getElementById("vehiculoAnio").value),
        vehiculoKm: Number(document.getElementById("vehiculoKm").value),
        tipoServicio: document.getElementById("tipoServicio").value,
        fechaCita: document.getElementById("fechaCita").value,
        horaCita: document.getElementById("horaCita").value,
        modalidad: modalidadSeleccionada,
        extras: extrasSeleccionados,
        observaciones: document.getElementById("observaciones").value.trim()
    };

    // Caso de prueba 3: Solicitud con placa, fecha o kilometraje inválidos
    const mensajeError = validarDatosFormulario(datosSolicitud);
    if (mensajeError) {
        SwalForza.fire("Datos no válidos", mensajeError, "error");
        return;
    }

    if (idEdicion) {
        if (usuarioActual.rol !== "Administrador") {
            SwalForza.fire("Acceso denegado", "Solo el administrador puede editar registros.", "error");
            return;
        }
        const registroExistente = solicitudesMantenimiento.find(s => s.id === idEdicion);
        if (registroExistente) {
            Object.assign(registroExistente, datosSolicitud);
            SwalForza.fire("Registro actualizado", `Los datos de la orden ${idEdicion} fueron guardados.`, "success");
        }
    } else {
        // Caso de prueba 4: Registrar mantenimiento correctamente
        const nuevoId = "ORD-" + Math.floor(1000 + Math.random() * 9000);
        const nuevaSolicitud = {
            id: nuevoId,
            ...datosSolicitud,
            estado: "Pendiente"
        };
        solicitudesMantenimiento.push(nuevaSolicitud);
        SwalForza.fire("Solicitud registrada", `Tu mantenimiento fue agendado con el código ${nuevoId}.`, "success");
    }

    guardarEnLocalStorage();
    limpiarFormulario();
    renderizarTablaCliente();
    if (usuarioActual.rol === "Administrador") {
        renderizarTablaAdmin();
    }
});

function limpiarFormulario() {
    document.getElementById("formMantenimiento").reset();
    document.getElementById("solicitudId").value = "";
    document.getElementById("tituloFormulario").textContent = "Registrar Solicitud de Mantenimiento";
    document.getElementById("btnGuardarSolicitud").textContent = "Guardar solicitud";
    document.getElementById("btnCancelarEdicion").classList.add("d-none");

    if (usuarioActual && usuarioActual.rol === "Cliente") {
        document.getElementById("clienteNombre").value = usuarioActual.nombre;
        document.getElementById("clienteEmail").value = usuarioActual.email;
        document.getElementById("clienteTelefono").value = usuarioActual.telefono;
    }
}

document.getElementById("btnLimpiarForm").addEventListener("click", limpiarFormulario);
document.getElementById("btnCancelarEdicion").addEventListener("click", limpiarFormulario);

// =========================================================
// 5. LISTADO CLIENTE Y CRUD ADMINISTRADOR
// =========================================================

// Uso de filter() y forEach() para mostrar solo los mantenimientos del cliente actual
function renderizarTablaCliente() {
    const tbody = document.getElementById("tablaClienteBody");
    tbody.innerHTML = "";

    if (!usuarioActual) return;

    const misRegistros = solicitudesMantenimiento.filter(
        s => s.clienteEmail.toLowerCase() === usuarioActual.email.toLowerCase()
    );

    if (misRegistros.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-secondary py-4">No tienes solicitudes registradas bajo tu cuenta (${usuarioActual.email}).</td></tr>`;
        return;
    }

    misRegistros.forEach(item => {
        const badgeColor = diccionarioColoresEstado[item.estado] || "bg-secondary";
        const textoExtras = item.extras && item.extras.length > 0 ? `<br><small class="text-secondary">+ ${item.extras.join(", ")}</small>` : "";

        tbody.innerHTML += `
            <tr>
                <td class="fw-bold text-forza-red">${item.id}</td>
                <td><strong>${item.vehiculoMarca} ${item.vehiculoModelo}</strong> (${item.vehiculoAnio})<br><span class="badge bg-dark mt-1">${item.vehiculoPlaca}</span></td>
                <td>${item.vehiculoKm.toLocaleString()} km</td>
                <td><strong>${item.tipoServicio}</strong> <span class="badge bg-light text-dark border">${item.modalidad}</span>${textoExtras}</td>
                <td>${item.fechaCita}<br><small class="text-secondary">${item.horaCita}</small></td>
                <td><span class="badge ${badgeColor} px-2 py-1">${item.estado}</span></td>
            </tr>
        `;
    });
}

// Listado general y acciones CRUD para el Administrador
function renderizarTablaAdmin() {
    const tbody = document.getElementById("tablaAdminBody");
    const contador = document.getElementById("contadorTotalAdmin");
    tbody.innerHTML = "";

    contador.textContent = `${solicitudesMantenimiento.length} registros totales`;

    if (solicitudesMantenimiento.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-secondary py-4">No existen solicitudes registradas en el sistema.</td></tr>`;
        return;
    }

    solicitudesMantenimiento.forEach(item => {
        const opcionesEstado = listaEstados.map(est =>
            `<option value="${est}" ${item.estado === est ? "selected" : ""}>${est}</option>`
        ).join("");

        const badgeColor = diccionarioColoresEstado[item.estado] || "bg-secondary";

        tbody.innerHTML += `
            <tr>
                <td class="fw-bold">${item.id}</td>
                <td><strong>${item.clienteNombre}</strong><br><small class="text-secondary">${item.clienteEmail}<br>${item.clienteTelefono}</small></td>
                <td>${item.vehiculoMarca} ${item.vehiculoModelo} (${item.vehiculoAnio})<br><span class="badge bg-dark mt-1">${item.vehiculoPlaca}</span> <small class="text-secondary">${item.vehiculoKm.toLocaleString()} km</small></td>
                <td><strong>${item.tipoServicio}</strong><br><small class="text-secondary">${item.observaciones}</small></td>
                <td>${item.fechaCita}<br><small class="text-secondary">${item.horaCita}</small></td>
                <td>
                    <span class="badge ${badgeColor} mb-1 d-inline-block">${item.estado}</span>
                    <select class="form-select form-select-sm" onchange="cambiarEstadoSolicitud('${item.id}', this.value)">
                        ${opcionesEstado}
                    </select>
                </td>
                <td>
                    <div class="d-flex gap-1">
                        <button class="btn btn-sm btn-outline-dark" onclick="cargarSolicitudParaEditar('${item.id}')">Editar</button>
                        <button class="btn btn-sm btn-forza-primary" onclick="eliminarSolicitud('${item.id}')">Eliminar</button>
                    </div>
                </td>
            </tr>
        `;
    });
}

// Caso de prueba 6: Admin modifica estado
window.cambiarEstadoSolicitud = function(id, nuevoEstado) {
    if (!usuarioActual || usuarioActual.rol !== "Administrador") {
        SwalForza.fire("Acceso denegado", "Operación exclusiva para administradores.", "error");
        return;
    }

    const solicitud = solicitudesMantenimiento.find(s => s.id === id);
    if (solicitud) {
        solicitud.estado = nuevoEstado;
        guardarEnLocalStorage();
        renderizarTablaAdmin();
        renderizarTablaCliente();
        SwalForza.fire({
            icon: "success",
            title: "Estado actualizado",
            text: `La solicitud ${id} ahora se encuentra: ${nuevoEstado}.`,
            timer: 1400,
            showConfirmButton: false
        });
    }
};

window.cargarSolicitudParaEditar = function(id) {
    if (!usuarioActual || usuarioActual.rol !== "Administrador") {
        SwalForza.fire("Acceso denegado", "No tienes permisos para editar registros.", "error");
        return;
    }

    const item = solicitudesMantenimiento.find(s => s.id === id);
    if (!item) return;

    document.getElementById("solicitudId").value = item.id;
    document.getElementById("clienteNombre").value = item.clienteNombre;
    document.getElementById("clienteEmail").value = item.clienteEmail;
    document.getElementById("clienteTelefono").value = item.clienteTelefono;
    document.getElementById("vehiculoPlaca").value = item.vehiculoPlaca;
    document.getElementById("vehiculoMarca").value = item.vehiculoMarca;
    document.getElementById("vehiculoModelo").value = item.vehiculoModelo;
    document.getElementById("vehiculoAnio").value = item.vehiculoAnio;
    document.getElementById("vehiculoKm").value = item.vehiculoKm;
    document.getElementById("tipoServicio").value = item.tipoServicio;
    document.getElementById("fechaCita").value = item.fechaCita;
    document.getElementById("horaCita").value = item.horaCita;
    document.getElementById("observaciones").value = item.observaciones;

    if (item.modalidad === "Express") {
        document.getElementById("modExpress").checked = true;
    } else {
        document.getElementById("modNormal").checked = true;
    }

    const checkboxes = document.querySelectorAll(".check-extra");
    for (const check of checkboxes) {
        check.checked = item.extras.includes(check.value);
    }

    document.getElementById("tituloFormulario").textContent = `Editando Solicitud ${item.id}`;
    document.getElementById("btnGuardarSolicitud").textContent = "Guardar cambios";
    document.getElementById("btnCancelarEdicion").classList.remove("d-none");

    document.getElementById("seccionFormulario").scrollIntoView({ behavior: "smooth" });
};

// Caso de prueba 6: Admin elimina un registro con confirmación previa
window.eliminarSolicitud = function(id) {
    if (!usuarioActual || usuarioActual.rol !== "Administrador") {
        SwalForza.fire("Acceso denegado", "No tienes permisos para eliminar registros.", "error");
        return;
    }

    SwalForza.fire({
        title: `¿Eliminar la solicitud ${id}?`,
        text: "Esta acción eliminará el registro de forma permanente.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            solicitudesMantenimiento = solicitudesMantenimiento.filter(s => s.id !== id);
            guardarEnLocalStorage();
            renderizarTablaAdmin();
            renderizarTablaCliente();
            SwalForza.fire("Eliminado", `El registro ${id} fue eliminado correctamente.`, "success");
        }
    });
};
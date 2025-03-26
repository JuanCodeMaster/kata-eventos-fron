# 🎉 Plataforma de Eventos - Frontend Angular

Frontend de la plataforma de eventos desarrollada con Angular. Permite a los usuarios autenticarse, visualizar eventos disponibles, reservar entradas, consultar sus reservas y más.

## 📦 Características

- Inicio de sesión y registro de usuarios
- Vista de eventos disponibles
- Visualización de detalles del evento
- Reserva de entradas para eventos
- Vista de "Mis reservas"
- Cancelación y activación de eventos (solo para admins)
- Footer fijo para todas las vistas

---

## 🚀 Tecnologías

- Angular 17 (Standalone components)
- Bootstrap 5
- RxJS
- JWT para autenticación
- Angular Router
- PostgreSQL + Spring Boot en backend

---

## 📁 Estructura de Carpetas

```
src/
├── app/
│   ├── core/               # Servicios y helpers
│   ├── models/             # Interfaces (DTOs)
│   ├── pages/              # Componentes principales
│   └── shared/             # Componentes reutilizables (como footer)
└── assets/                 # Imágenes, logos, etc.
```

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/frontend-eventos.git
cd frontend-eventos
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el proyecto

```bash
ng serve
```

Visita 👉 http://localhost:4200

---

## 🔐 Requisitos Previos

- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)
- Backend corriendo en `http://localhost:8082` o el URL correspondiente
- Base de datos PostgreSQL con los datos precargados (ver `init_db.sql` en backend)

---

## 📲 Consumo de Endpoints

Los servicios consumen los siguientes endpoints del backend:

### 🔹 Obtener todos los eventos

```ts
GET /api/events
```

Uso:

```ts
this.eventService.getEvents().subscribe(data => this.events = data);
```

---

### 🔹 Obtener evento por ID

```ts
GET /api/events/{id}
```

Uso:

```ts
this.eventService.getEventById(id).subscribe(data => this.event = data);
```

---

### 🔹 Crear reserva

```ts
POST /api/reservations
```

Body:

```json
{
  "eventId": 1,
  "userEmail": "juan@example.com"
}
```

Uso:

```ts
this.reservationService.reservarEvento(payload).subscribe(...);
```

---

### 🔹 Consultar reservas de un usuario

```ts
GET /api/reservations/user/{email}
```

Uso:

```ts
this.reservationService.getReservasPorUsuario(email).subscribe(...);
```

---

### 🔹 Cancelar un evento

```ts
DELETE /api/events/{id}
```

---

### 🔹 Reactivar un evento

```ts
PUT /api/events/{id}
```

Se vuelve a enviar el `EventRequestDTO` con el `status: "ACTIVO"` (opcionalmente desde backend).

---

## 🖼️ Footer global

El componente `<app-footer>` se encuentra en:

```
src/app/shared/footer/footer.component.ts
```

Está incluido globalmente en `app.component.html`.

---

## 🧪 ToDo (Opcional)

- [ ] Añadir roles de admin en frontend
- [ ] Notificaciones con Toast
- [ ] Lazy loading de módulos
- [ ] Animaciones

---

## 🧑‍💻 Autor

Desarrollado por **Juan José Vélez** 🧠  
GitHub: [@JuanCodeMaster](https://github.com/JuanCodeMaster)

---

# Clon de Instagram - React

Este proyecto consiste en el desarrollo de una interfaz inspirada en Instagram utilizando **React** y **CSS**.  
El objetivo fue replicar un diseño moderno con una estética similar a la aplicación original, trabajando principalmente la maquetación y el diseño visual.

---

## Descripción

La aplicación recrea parte de la interfaz de Instagram, incluyendo:

- Barra lateral con perfil del usuario
- Menú de navegación lateral
- Sección de historias (Stories)
- Diseño oscuro moderno
- Distribución utilizando Flexbox

Todo el proyecto fue desarrollado como práctica de **frontend** enfocándose en diseño UI.

---

## Tecnologías utilizadas

- React.js
- CSS3
- JavaScript
- React Icons

---

## Componentes desarrollados

### Sidebar

Barra lateral ubicada a la izquierda que contiene:

- Foto de perfil con borde estilo Instagram
- Nombre del usuario
- Usuario (@username)
- Badge de verificación
- Estadísticas del perfil
  - Seguidores
  - Likes
- Menú de navegación

Opciones del menú:

- Home
- Explore
- Reels
- IGTV
- Notifications

---

### Stories

Sección superior que simula las historias de Instagram.

Incluye:

- Lista horizontal de usuarios
- Imagen circular
- Borde con degradado estilo Instagram
- Nombre de usuario debajo de cada historia

---

## Estructura del proyecto

```bash
src/
│
├── components/
│   │
│   ├── Sidebar.jsx
│   ├── Sidebar.css
│   │
│   ├── Stories.jsx
│   └── Stories.css
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Instalación

Clonar repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar a la carpeta:

```bash
cd nombre-del-proyecto
```

Instalar dependencias:

```bash
npm install
```

Ejecutar proyecto:

```bash
npm run dev
```

---

## Dependencias

Para los íconos se utilizó:

```bash
npm install react-icons
```

---

## Objetivos del proyecto

- Practicar React mediante componentes reutilizables
- Mejorar manejo de CSS y Flexbox
- Replicar interfaces reales
- Trabajar diseño frontend moderno
- Comprender estructura de proyectos React

---

## Mejoras futuras

Algunas funcionalidades que podrían agregarse:

- Feed de publicaciones
- Sistema de likes
- Comentarios
- Responsive para celular
- Integración con backend
- Login de usuarios
- Sistema real de stories

---

## Autor

Desarrollado por Alan Vitas

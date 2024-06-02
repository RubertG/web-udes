# FISIOTEC

Este proyecto es una página web diseñada para mostrar diferentes aplicaciones utilizadas en la fisioterapia. Está desarrollado utilizando Next.js 14.

## Contenido

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contacto](#Contacto)

## Descripción del Proyecto

La página web tiene como objetivo proporcionar información sobre diversas aplicaciones que pueden ser utilizadas en la fisioterapia. Cada aplicación está detallada con su descripción, modo de uso, accesibilidad, barreras para el uso y cualquier recurso adicional relevante.

## Características

- **Listado de Aplicaciones**: Muestra una lista de aplicaciones utilizadas en fisioterapia con detalles y descripciones.
- **Interfaz Amigable**: Diseño intuitivo y fácil de navegar.
- **Rendimiento**: Optimizado para un rendimiento rápido gracias a Next.js 14.
- **Responsivo**: Adaptable a diferentes dispositivos y tamaños de pantalla.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)
- Next.js (versión 14)

## Instalación

1. **Clonar el repositorio**
    ```bash
    git clone https://github.com/RubertG/web-udes.git
    ```
2. **Navegar al directorio del proyecto**
    ```bash
    cd tu-repositorio
    ```
3. **Instalar las dependencias**
    ```bash
    npm install
    ```

## Uso

1. **Iniciar el servidor de desarrollo**
    ```bash
    npm run dev
    ```
2. **Abrir el navegador y visitar**
    ```
    http://localhost:3000
    ```

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
web-udes/
├── public/
│   ├── apps-img/
│   └── favicon.webp
├── src/
│   ├── app/
│   ├── components/
│   |   └── application/
│   |   └── applications/
│   |   └── common/
│   |   └── layout/
│   ├── const/
│   ├── data/
│   ├── fonts/
│   ├── hooks/
│   ├── reducer/
│   |   └── applications/
│   ├── types/
│   └── utils/
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```

- **public/**: Contiene activos públicos como imágenes y favicon.
- **src/app/**: Páginas de la aplicación Next.js.
- **src/components/**: Componentes reutilizables de React.
- **src/const/**: Constantes globales.
- **src/data/**: Datos de la aplicación.
- **src/fonts/**: Fuentes de la aplicación.
- **src/hooks/**: Funciones de hooks.
- **src/reducer/**: Reducers de la aplicación.
- **src/types/**: Tipos de datos de la aplicación.
- **src/utils/**: Utilidades y funciones auxiliares.
- **.gitignore**: Archivos y directorios ignorados por Git.
- **package.json**: Información del proyecto y dependencias.
- **next.config.js**: Configuración de Next.js.

## Contacto

Si tienes alguna pregunta, necesitas más información o quieres crear una aplicación web, no dudes en contactame a través de mi [página de contacto](https://rubertweb.dev/contact).
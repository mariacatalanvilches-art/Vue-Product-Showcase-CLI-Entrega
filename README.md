# Vue Product Showcase

Proyecto de evaluación del Módulo 7: Desarrollo de Aplicaciones Front-End con Framework Vue.

## Importante: Vue CLI

Este proyecto fue configurado con **Vue CLI**, de acuerdo con la consigna de la Lección 1. No utiliza Vite.

## Tecnologías

- Vue 3
- Vue CLI 5
- Vue Router
- Vuex 4
- Axios
- Jest + Vue Test Utils
- Cypress
- Element Plus como biblioteca de componentes UI
- CSS responsive con tema claro/oscuro

## Funcionalidades

- Catálogo de productos desde API REST.
- Componentes Header, Footer, ProductList y ProductCard.
- Ciclo de vida `created`.
- Loading, error y estado vacío.
- Filtro por categoría.
- Estado global mediante módulos Vuex: productos, filtros y favoritos.
- Acciones Vuex para consumo de API.
- Getters para productos y favoritos.
- Vista de detalle.
- Favoritos.
- Pruebas unitarias.
- Prueba E2E de filtrado.
- Diseño responsive y modo oscuro.
- Componentes Element Plus aplicados en filtros y acciones del catálogo.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run serve
```

## Build

```bash
npm run build
```

## Pruebas unitarias

```bash
npm run test:unit
```

## Prueba E2E

```bash
npm run test:e2e
```

## Biblioteca UI

Se utiliza **Element Plus** para incorporar componentes de interfaz reutilizables, accesibles y consistentes, especialmente `el-select`, `el-option` y `el-button`. Esto permite cumplir el requisito de integrar una biblioteca UI y mantener una interfaz adaptable.

## API

Se utiliza Fake Store API como API REST pública:

https://fakestoreapi.com/products

## Justificación técnica

Se utiliza Vue CLI porque la consigna de la evaluación solicita expresamente configurar el proyecto con Vue CLI. Vue Router permite organizar las vistas, Vuex centraliza el estado y Axios gestiona la comunicación con la API. Los componentes separan responsabilidades y facilitan el mantenimiento y escalabilidad de la SPA.

## Estructura

- `src/components`: componentes reutilizables.
- `src/views`: vistas de la aplicación.
- `src/store`: módulos Vuex.
- `src/router`: rutas.
- `tests/unit`: pruebas unitarias.
- `cypress/e2e`: prueba end-to-end.

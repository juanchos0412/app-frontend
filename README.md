# README para el Proyecto app-frontend

## Descripción

**app-frontend** es una aplicación web construida con **Astro**, un framework moderno que permite crear sitios web rápidos y eficientes. Este proyecto está diseñado para ofrecer una experiencia de usuario fluida y optimizada, utilizando componentes reutilizables y una arquitectura centrada en el rendimiento.

## Características

- **Rendimiento Optimizado**: Generación de HTML estático y carga condicional de JavaScript.
- **Componentes Reutilizables**: Facilita la creación de interfaces consistentes y mantenibles.
- **Compatibilidad con Múltiples Frameworks**: Integración de React, Vue, Svelte, entre otros.
- **Soporte para Markdown**: Ideal para la creación de contenido dinámico y blogs.
- **Arquitectura de Islas**: Solo las partes necesarias de la página son interactivas, mejorando la velocidad de carga.


## Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## Estructura del Proyecto

```
app-frontend/
├── public/                # Archivos estáticos (imágenes, favicon)
├── src/                   # Código fuente de la aplicación
│   ├── components/        # Componentes reutilizables
│   ├── layouts/           # Plantillas de diseño
│   └── pages/             # Páginas del sitio
└── astro.config.mjs       # Configuración del proyecto
```

## 🧞 Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/juanchos0412/app-frontend.git
   cd app-frontend
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

## Uso

Puedes personalizar los componentes en `src/components/` y las páginas en `src/pages/`. Para agregar nuevas rutas, simplemente crea un nuevo archivo `.astro` en la carpeta `pages`.

### Ejemplo de Componente

Aquí tienes un ejemplo básico de cómo se utiliza un componente en este proyecto:

```javascript
import BuyButton from '../components/BuyButton.jsx';

const product = {
  id: 1,
  name: 'Producto Ejemplo',
  imageUrl: 'url_del_producto',
  imageAlt: 'Descripción del producto'
};

<BuyButton id={product.id} />
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Envía tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para preguntas o sugerencias, puedes contactar al autor a través de su perfil en GitHub: 

María Paula Casas Ramírez
María Camila Burgos Cubillos 
Nelson Andrés González Amórtegui 
Juan Sebastian Valderrama Dueñas 
Bairon Stiven Pedreros Ortiz COD 
Alejandro Pérez Graciano COD 100265699 

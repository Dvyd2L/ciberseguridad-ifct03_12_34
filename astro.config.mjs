import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    locales: {
      root: {
        lang: 'es',
        label: 'Español'
      }
    },
    defaultLocale: 'es',
    title: 'Ciberseguridad SEPE',
    description: 'Curso Ciberseguridad SEPE',
    //credits: true,
    logo: {
      replacesTitle: false,
      src: './public/images/logo.png',
      alt: 'Ciberseguridad SEPE'
    },
    social: {
      github: 'https://github.com/Dvyd2L/',
      linkedin: 'https://www.linkedin.com/in/david-llopis-laguna-38902826a'
    },
    sidebar: [{
      label: '🏠 Inicio',
      link: '/',
      badge: {
        text: 'Nuevo',
        variant: 'note'
      }
      // items: [
      //   { label: 'Bienvenidos', link: '/' },
      //   {
      //     label: 'Introducción a la Ciberseguridad',
      //     link: '/#-introducción-a-la-ciberseguridad',
      //     badge: {
      //       text: 'Nuevo',
      //       variant: 'note',
      //     },
      //   },
      //   {
      //     label: 'Contenidos del Curso',
      //     link: '/#-contenidos-del-curso',
      //     badge: {
      //       text: 'Nuevo',
      //       variant: 'note',
      //     },
      //   },
      //   {
      //     label: 'Proyectos y Prácticas',
      //     link: '/#-proyectos-y-prácticas',
      //     badge: {
      //       text: 'Nuevo',
      //       variant: 'note',
      //     },
      //   },
      //   {
      //     label: 'Herramientas y Recursos',
      //     link: '/#-herramientas-y-recursos',
      //     badge: {
      //       text: 'Nuevo',
      //       variant: 'note',
      //     },
      //   },
      //   {
      //     label: 'Actualizaciones y Novedades',
      //     link: '/#-actualizaciones-y-novedades',
      //     badge: {
      //       text: 'Nuevo',
      //       variant: 'note',
      //     },
      //   },
      //   {
      //     label: 'Conecta Conmigo',
      //     link: '/#-conecta-conmigo',
      //     badge: {
      //       text: 'Nuevo',
      //       variant: 'note',
      //     },
      //   },
      // ],
    }, {
      label: '📚 Contenidos del Curso',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: '📈 Actividades',
      autogenerate: {
        directory: 'activities'
      }
    }, {
      label: '🌐 Enlaces externos',
      autogenerate: {
        directory: 'reference'
      }
    }],
    components: {
      Header: './src/components/Header.astro'
    },
    customCss: ['./src/assets/styles/index.css'],
    expressiveCode: {
      themes: ['github-dark', 'github-light']
    },
    tableOfContents: {
      maxHeadingLevel: 6
    },
    pagination: true,
    lastUpdated: true
  })],
  output: 'static',
  adapter: netlify()
});
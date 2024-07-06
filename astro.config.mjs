import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      locales: { root: { lang: 'es', label: 'Español' } },
      defaultLocale: 'es',
      title: 'Ciberseguridad SEPE',
      description: 'Curso Ciberseguridad SEPE',
      //credits: true,
      logo: {
        replacesTitle: false,
        src: './public/images/logo.png',
        alt: 'Ciberseguridad SEPE',
      },
      social: {
        github: 'https://github.com/Dvyd2L/',
        linkedin: 'https://www.linkedin.com/in/david-llopis-laguna-38902826a',
      },
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Temario',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Actividades',
          autogenerate: { directory: 'activities' },
        },
        {
          label: 'Enlaces externos',
          autogenerate: { directory: 'reference' },
        },
      ],
      components: {
        Header: './src/components/Header.astro',
      },
      customCss: ['./src/assets/styles/index.css'],
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
      },
      tableOfContents: {
        maxHeadingLevel: 6,
      },
      pagination: true,
      lastUpdated: true,
    }),
  ],
  output: 'static',
});

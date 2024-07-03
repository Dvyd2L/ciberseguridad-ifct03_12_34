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
        discord: 'https://discord.com/channels/@me',
        twitch: 'https://www.twitch.tv/dav2l',
        'x.com': 'https://x.com/Davyd2L',
        youtube: 'https://www.youtube.com/channel/UCrzCXQQSENL3VD70XFX8P8g',
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
      
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
      },
      pagination: true,
      lastUpdated: true,
    }),
  ],
  output: 'static',
});

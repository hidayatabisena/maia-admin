import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: 'MAIA',
  },
  links: [
    {
      text: 'Referensi',
      url: 'https://maia-official.notion.site/MAIA-Reference-Library-8c29b2a2fcbb4437ac48513efe0365fb',
      active: 'nested-url',
    },
    {
      text: 'Panduan Admin',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Panduan Member',
      url: 'https://docs-maia.vercel.app/',
      active: 'nested-url',
    },
    {
      text: 'Plugins',
      url: 'https://maia.id/plugins',
      active: 'nested-url',
    },
  ],
};

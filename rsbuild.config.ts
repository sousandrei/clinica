import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Clínica Equilíbrio do Ser',
    favicon: './public/logo.svg',
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'preload',
          as: 'image',
          href: '/assets/acump.webp',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
      },
    ],
  },
  performance: {
    removeConsole: true,
  },
  output: {
    // Inline small CSS to prevent render-blocking
    inlineStyles: true,
  },
});

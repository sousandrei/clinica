import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Clínica Equilíbrio do Ser',
    favicon: './public/logo.svg',
    meta: {
      description: 'Clínica Equilíbrio do Ser - Cuidando do seu bem-estar integral com Acupuntura, Fisioterapia, Psicologia, Nutrição, Pilates e RPG em Brasília.',
      viewport: 'width=device-width, initial-scale=1.0',
    },
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

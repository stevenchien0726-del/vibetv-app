import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vibe TV',
    short_name: 'VibeTV',
    description: 'Vibe TV App',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#7b2cff',
    icons: [
      {
        src: '/vibetv-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/vibetv-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
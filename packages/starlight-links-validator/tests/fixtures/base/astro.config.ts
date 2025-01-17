import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

import starlightLinksValidator from '../..'

export default defineConfig({
  integrations: [
    starlightLinksValidator(),
    starlight({
      sidebar: [],
      title: 'Starlight Links Validator Tests',
    }),
  ],
})

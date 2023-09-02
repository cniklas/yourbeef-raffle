import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import minify from '@frontendista/astro-html-minify'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		minify({
			// https://github.com/frontendista/astro-html-minify#13-customize-minifiers-options
			html: {
				// collapseWhitespace: true,
				// conservativeCollapse: true,
				decodeEntities: false,
				removeComments: true,
				removeAttributeQuotes: true,
				removeRedundantAttributes: false, // 🔺 otherwise type="text" on input elements gets cut off
			},
		}),
	],
})

import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import htmlMinify from '@frontendista/astro-html-minify'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		htmlMinify({
			// https://github.com/frontendista/astro-html-minify#2-integration-options
			htmlTerserMinifierOptions: {
				collapseWhitespace: true,
				conservativeCollapse: true,
				removeComments: true,
				removeAttributeQuotes: true,
				removeRedundantAttributes: false, // 🔺 otherwise type="text" on input elements gets cut off
			},
		}),
	],
})

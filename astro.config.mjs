import { defineConfig, envField } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
	integrations: [UnoCSS({ injectReset: true })],
	devToolbar: {
		enabled: false,
	},
	env: {
		schema: {
			POSTURL: envField.string({ context: 'client', access: 'public' }),
		},
	},
})

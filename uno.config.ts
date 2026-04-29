import { defineConfig, presetMini, transformerDirectives } from 'unocss'

export default defineConfig({
	// custom CSS
	// missing in presetMini
	rules: [
		['uppercase', { 'text-transform': 'uppercase' }],
	],

	// https://unocss.dev/presets/mini
	presets: [presetMini()],
	// https://unocss.dev/transformers/directives
	transformers: [transformerDirectives()],
})

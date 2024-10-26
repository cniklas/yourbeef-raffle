import { defineConfig, presetMini } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
	// custom CSS
	// missing in presetMini
	rules: [
		['uppercase', { 'text-transform': 'uppercase' }],
		[
			'sr-only',
			{
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: 0,
				margin: '-1px',
				overflow: 'hidden',
				'clip-path': 'inset(50%)',
				'white-space': 'nowrap',
				'border-width': 0,
			},
		],
	],

	// https://unocss.dev/presets/mini
	presets: [presetMini()],
	// https://unocss.dev/transformers/directives
	transformers: [transformerDirectives()],
})

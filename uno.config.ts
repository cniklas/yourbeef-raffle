import { defineConfig, presetMini } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
	// custom CSS
	// missing in presetMini
	rules: [
		['uppercase', { 'text-transform': 'uppercase' }],
		['accent-[--button-bg]', { 'accent-color': 'var(--button-bg)' }],
		['backdrop-blur-3px', { '-webkit-backdrop-filter': 'blur(3px)', 'backdrop-filter': 'blur(3px)' }],
		[
			'sr-only',
			{
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: '0',
				margin: '-1px',
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
				whiteSpace: 'nowrap',
				borderWidth: '0',
			},
		],
	],

	// https://unocss.dev/presets/wind
	presets: [presetMini()],
	// https://unocss.dev/transformers/directives
	transformers: [transformerDirectives()],
})

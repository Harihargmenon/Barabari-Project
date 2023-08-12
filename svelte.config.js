import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [ '.svelte', '.mdx' ],
	preprocess: [
		preprocess(),
		mdsvex( {
			extensions: [ '.mdx' ],
			smartypants: {},
		} )
	],
	kit: {
		adapter: adapter(),
		alias: {
			'$$': './src/lib/i18n.js',
			'$components': './src/components',
			'$content': './content',
			'$layout': './src/layout'
		},
		prerender: {
			concurrency: 8
		}
	}
};

export default config;

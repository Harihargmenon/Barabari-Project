import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { writeFile } from 'fs';

fetch( "https://manav.ch/atomic.css" )
	.then( r => r.text() )
	.then( t => {
		writeFile( "static/css/atomic.css", t, ( err ) => {
			if ( err ) throw err;
			console.log( "Updated AtomiCSS" );
		} );
	} );

const config = defineConfig( {
	build: {
		target: "es2015"
	},
	plugins: [
		sveltekit(),
		imagetools( { force: true } )
	],
	server: { port: 3000 }
} );
export default config;

import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { writeFile, readFileSync } from 'fs';

// Auto Update AtomiCSS
const file = "static/css/atomic.css";
fetch( "https://manav.ch/atomic.css" )
	.then( r => r.text() )
	.then( t => {
		const read = readFileSync( file, "utf-8" );
		if ( read === t ) return 0;
		writeFile( file, t, ( err ) => {
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
	server: {
		port: 3000,
		fs: {
			allow: [ "." ]
		}
	}
} );
export default config;

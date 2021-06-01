import { version } from './package.json';
import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
// import compiler from '@ampproject/rollup-plugin-closure-compiler';
import esbuild from 'rollup-plugin-esbuild'
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import strip from '@rollup/plugin-strip';
export default {
        input: './src/AltOmFilm.ts',
        onwarn: function(warning, warn) { return; },
        plugins: [
            clear({ targets: ['public'] }),
            resolve(),
            copy({
                targets: [
                    { src: 'assets/fonts/**.*', dest: 'public' },
                    { src: 'assets/icons/**.*', dest: 'public' },
                    { src: 'assets/production/**.*', dest: 'public', },
                    {
                        src: 'assets/index.html', dest: 'public',
                        transform: (contents) => contents.toString().replace('{{version}}', version).replace('{{version}}', version)
                    }
                ]
            }),
            typescript(),
            strip({ include: '**/*.ts' }),
            filesize({ showBrotliSize: true })
        ],
        output: [
            {
                entryFileNames: '[name].' + version + '.es2019.js',
                dir: './public/',
                format: 'esm',
                plugins: [
                    esbuild({
                        target: 'es2019',
                        minify: true
                    })
                ]
            },
            {
                entryFileNames: '[name].' + version + '.es2018.js',
                dir: './public/',
                format: 'esm',
                plugins: [
                    esbuild({
                        target: 'es2018',
                        minify: true
                    })
                ]
            },
            {
                entryFileNames: '[name].' + version + '.es2017.js',
                dir: './public/',
                format: 'esm',
                plugins: [
                    esbuild({
                        target: 'es2017',
                        minify: true
                    })
                ]
            },
            {
                entryFileNames: '[name].' + version + '.es2016.js',
                dir: './public/',
                format: 'esm',
                plugins: [
                    esbuild({
                        target: 'es2016',
                        minify: true
                    })
                ]
            },
            {
                entryFileNames: '[name].' + version + '.es2015.js',
                dir: './public/',
                format: 'esm',
                plugins: [
                    esbuild({
                        target: 'es2015',
                        minify: true
                    })
                ]
            },
            {
                entryFileNames: '[name].' + version + '.es5.js',
                dir: './public/',
                inlineDynamicImports: true, // this has to be last, otherwise we get split chunk errors
                format: 'iife',
                plugins: [
                    esbuild({
                        target: 'es5',
                        minify: true
                    })
                ]
            }
        ]
    };

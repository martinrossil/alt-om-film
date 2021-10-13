import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload';

export default [{
        input: './src/AltOmFilm.ts',
        plugins: [
            typescript({ tsconfig: 'tsconfig.development.json' }),
            resolve(),
            livereload({ watch: 'development' })
        ],
        output: {
            entryFileNames: '[name].js',
            dir: './development',
            format: 'esm',
            sourcemap: 'inline'
        }
    }
]

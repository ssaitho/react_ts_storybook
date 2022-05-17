import styles from "rollup-plugin-styles";
import babel from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
// import postcss from "rollup-plugin-postcss";

const autoprefixer = require('autoprefixer');

const conf = {
    input: 'src/index.tsx',
    output: {
        file: `dist/index.cjs.js`,
        format: "cjs",
        exports: "auto"
    },
    // this externelizes react to prevent rollup from compiling it
    external: ["react", /@babel\/runtime/],
    plugins: [
        typescript(),
        // these are babel comfigurations
        // postcss({
        //     config: {
        //         path: "./postcss.config.js",
        //     },
        //     extensions: [".css"],
        //     minimize: true,
        //     inject: {
        //         insertAt: "top",
        //     },
        // }),
        babel({
            exclude: 'node_modules/**',
            plugins: ['@babel/transform-runtime'],
            babelHelpers: 'runtime'
        }),
        // this adds sourcemaps
        sourcemaps(),
        del({targets:'dist/*'}),
        // this adds support for styles
        styles({
            postcss: {
                plugins: [
                    autoprefixer()
                ]
            }
        })
    ],
    // external: ["react", "react-dom"],
}

export default conf;
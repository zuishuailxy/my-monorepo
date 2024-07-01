// rollup.config.mjs
// ---cut-start---
/** @type {import('rollup').RollupOptions} */
// ---cut-end---
// export default {
//     input: 'src2/main.ts',
//     output: {
//         file: 'src2/bundle.js',
//         format: 'cjs'
//     }
// };
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
export default {
    input: 'src2/main2.ts',
    output: [
        {
            file: 'src2/bundle.js',
            format: 'cjs'
        },
        {
            file: 'src2/bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
    ],
    plugins: [json()]
};
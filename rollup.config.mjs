import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import json from '@rollup/plugin-json';

const scripts = [
  'FindSmallerPaths',
  'FindOverlayPaths',
];

export default scripts.map(s => ({
  input: `src/${s}.js`,
  output: {
    file: `build/${s}.jsx`,
    format: 'iife',
    name: `${s}`,
  },
  treeshake: true,
  plugins: [
    resolve(),
    commonjs(),
    json(),
    compiler({
      formatting: 'PRETTY_PRINT',
      languageOut: 'ECMASCRIPT5',
      env: 'CUSTOM',
      // SIMPLE optimization option might fail due to an incorrect handling
      // of conditional operator.
      // Bug report: https://illustrator.uservoice.com/forums/908050-sdk-scripting-bugs-and-features/suggestions/36625291--bug-error-during-evaluation-of-conditional-tern
      compilationLevel: 'WHITESPACE_ONLY', // WHITESPACE_ONLY, SIMPLE, ADVANCED
    }),
  ],
  external: ['lodash'],
}));

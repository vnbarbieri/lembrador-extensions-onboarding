import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const plugins = [peerDepsExternal(), resolve(), commonjs(), postcss(), terser()];
const exclude = ['node_modules', 'lib', 'src/**/*stories.tsx', 'src/**/*test.*'];
const tsConfig = { noEmit: true, declaration: true, declarationDir: './lib', rootDir: 'src/', exclude };

export default {
  input: 'src/index.ts',
  output: { format: 'esm', dir: 'lib', preserveModules: true, preserveModulesRoot: 'src' },
  plugins: [...plugins, typescript(tsConfig)],
};

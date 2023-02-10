/**
 * @jest-environment jsdom
 */
import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from './tsconfig.json';
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
  collectCoverage: true,

  coverageDirectory: 'coverage',

  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: __dirname }),
};

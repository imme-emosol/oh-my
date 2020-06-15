/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const {defaults} = require('jest-config');
const config = {
//  moduleNameMapper: {
//    '^(.*)$': '<rootDir>/sources/$1',
//  },
  preset: 'ts-jest/presets/js-with-ts',
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
      tsconfig: './tsconfig.json',
    },
  },
  testEnvironment: 'jsdom',
  verbose: defaults.verbose || true,
};
// eslint-disable-next-line no-undef
module.exports = config;

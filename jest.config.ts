import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    globals: {
      'vue-jest': {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    },
    verbose: true,
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue3-jest'
    },
    moduleNameMapper: {
      "^vue$": "@vue/compat",
      '\\.(css|less|scss|svg)$': '<rootDir>/tests/unit/stubs/empty.js',
    },
    testEnvironment: 'jsdom'
  }
}
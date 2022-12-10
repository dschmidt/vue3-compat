import type {Config} from 'jest';

const vueJestSettings = {
  compilerOptions: {
    compatConfig: {
      MODE: 2
    }
  }
}

export default async (): Promise<Config> => {
  return {
    globals: {
      'vue-jest': vueJestSettings,
      '@vue/vue2-jest': vueJestSettings,
      '@vue/vue3-jest': vueJestSettings
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
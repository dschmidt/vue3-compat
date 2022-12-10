import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue3-jest'
    },
    moduleNameMapper: {
      "^vue$": "@vue/compat",
    }
  }
}
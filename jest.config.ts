import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  reporters: ['default', 'jest-junit'],
  roots: ['.'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testTimeout: 30000,
};

export default config;

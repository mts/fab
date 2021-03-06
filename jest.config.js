module.exports = {
  testMatch: ['**/?(*.)test.js?(x)'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '!**/coverage/**',
    '!**/node_modules/**',
    'packages/**/*.{js,jsx}',
    '!packages/**/index.js',
    '!packages/**/*.prop.js',
    '!packages/**/*.render*.js',
    '!packages/**/*.story.js',
    '!packages/**/*.test.js',
    '!packages/**/build/**',
    '!packages/**/node_modules/**',
    '!packages/**/webpack*',
    '!packages/client/src/mock/*',
    '!packages/library/**/client/startup.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/packages/client/src/mock/file.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      statements: 91,
      branches: 85,
      functions: 85,
      lines: 90,
    },
  },
}

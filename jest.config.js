module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    "!**/node_modules/**"
  ],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "/node_modules/(?!vee-validate|vuetify)"
  ],
  setupFiles: ["<rootDir>/test/index.js"],
}

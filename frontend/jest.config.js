module.exports = {
  testEnvironment: 'node',
  verbose: true,
  "setupFiles": [
    "./src/setupTests.js"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "moduleNameMapper": {
    "\\.svg": "@svgr/webpack",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  resetMocks: true
};
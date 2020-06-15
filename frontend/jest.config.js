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
    "\\.svg": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  resetMocks: true
};
const { createJestConfig } = require("@craco/craco");
const cracoConfig = require("./craco.config.js");
const jestConfig = createJestConfig(cracoConfig);

// const mapper = {
//     '^@/react-react-library/(.*)$': '<rootDir>/../../packages/shared-ui/react-library/$1',
//     '^@/react-mui-joy/(.*)$': '<rootDir>/../../packages/shared-ui/react-mui-joy/$1'
// }

// jestConfig.moduleNameMapper = {
//     ...jestConfig.moduleNameMapper,
//     ...mapper
// }

module.exports = jestConfig;

// module.exports = {
//     moduleNameMapper: {
//         '^@/examples/(.*)$':  '<rootDir>/src/examples/$1',
//         '^@/react-react-library/(.*)$': '<rootDir>/../../packages/shared-ui/react-library/$1',
//         '^@/react-mui-joy/(.*)$': '<rootDir>/../../packages/shared-ui/react-mui-joy/$1',
//     }
// }
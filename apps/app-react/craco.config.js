const path = require('path');
const { pathsToModuleNameMapper } = require("ts-jest");
const tsConfig = require("./tsconfig.json")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

function getWebpackAliasesFromPaths(configPaths) {
    const alias = Object.entries(configPaths).reduce(
        (webpackAliases, [configAlias, configPathList]) => {
            const [aliasKey] = configAlias.split("/");
            const [relativePathToDir] = configPathList[0].split("/*");
            return {
                ...webpackAliases,
                [aliasKey]: path.resolve(__dirname, relativePathToDir),
            };
        },
        {}
    );
    return alias;
}

module.exports = {
    // devServer: {
    //     liveReload: true,
    //     watchFiles: [
    //         path.resolve(__dirname, '../..', 'packages/shared-ui/react-library'),
    //         path.resolve(__dirname, '../..', 'packages/shared-ui/react-mui-joy'),
    //         path.resolve(__dirname, 'node_modules/@shared-ui/react-library'),
    //         path.resolve(__dirname, 'node_modules/@shared-ui/react-mui-joy'),
    //     ],
    // },
    webpack: {
        alias: getWebpackAliasesFromPaths(tsConfig.compilerOptions.paths),
        // {
        //     '@': path.resolve(__dirname, 'src'),
        //     '@/examples/': path.resolve(__dirname, 'src/examples/'),
        //     "@/react-library/": path.resolve(__dirname, '../../packages/shared-ui/react-library/src/'),
        //     "@/react-mui-joy/": path.resolve(__dirname, '../../packages/shared-ui/react-mui-joy/src/'),
        // },
        extensions: ['', '.ts', '.tsx'],
        configure: (config) => {
            // Remove ModuleScopePlugin which throws when we try to import something
            // outside of src/.
            config.resolve.plugins.pop();

            // Resolve the path aliases.
            config.resolve.plugins.push(new TsconfigPathsPlugin());

            // Let Babel compile outside of src/.
            const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
            const tsRule = oneOfRule.oneOf.find((rule) =>
                rule.test.toString().includes("ts|tsx")
            );

            tsRule.include = undefined;
            tsRule.exclude = /node_modules/;

            return config;
        },
    },
    jest: {
        configure: {
            moduleNameMapper: {
                ...pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
                    prefix: "<rootDir>/",
                }),
            }
        },
    }
}
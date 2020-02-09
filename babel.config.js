/* eslint-disable */
module.exports = function (api) {
    api.cache(true);
    const presets = [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ];
    const plugins = [
        "@babel/plugin-transform-arrow-functions",
        [
            "@babel/plugin-proposal-class-properties",
            { "loose": true }
        ],
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-classes",
        "@babel/plugin-transform-reserved-words",
        [
            'babel-plugin-import',
            {
                'libraryName': '@material-ui/core',
                // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                'libraryDirectory': 'esm',
                'camel2DashComponentName': false
            },
            'core'
        ],
        [
            'babel-plugin-import',
            {
                'libraryName': '@material-ui/icons',
                // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                'libraryDirectory': 'esm',
                'camel2DashComponentName': false
            },
            'icons'
        ],
        [
            'babel-plugin-import',
            {
                'libraryName': '@material-ui/lab',
                // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                'libraryDirectory': 'esm',
                'camel2DashComponentName': false
            },
            'lab'
        ]
    ];

    return {
        presets,
        plugins
    };
};

module.exports = {
    "presets": [
        [
            '@babel/env',
            {
                targets: {
                    browsers: 'Last 2 Chrome versions, Firefox ESR',
                    node: '8.9',
                },
            },
        ],
        [
            '@babel/preset-react',
            {
                development: process.env.BABEL_ENV !== 'production',
            },
        ],
    ],
    "env": {
        "test": {
            "plugins": [
                "transform-es2015-modules-commonjs"
            ]
        },
        "build": {
            "ignore": [
                '**/*.spec.js',
                '**/*.stories.js',
                '__snapshots__',
                '__tests__',
                '__stories__',
            ],
        }
    }
};
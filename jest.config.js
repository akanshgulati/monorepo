module.exports = {
    "roots": [
        "packages/"
    ],
    "setupFiles": [
        "./setup-jest"
    ],
    "testMatch": [
        '**/?(*.)(spec).js?(x)'
    ],
    "testPathIgnorePatterns": [
        '<rootDir>node_modules/'
    ]
};
module.exports = {
    roots: ['<rootDir>/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
    ],
    testMatch: ['**/*.(test|spec).ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};

module.exports = {
    roots: ['<rootDir>/src/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/*.(test|spec).ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};

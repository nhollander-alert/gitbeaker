module.exports = {
	preset: 'ts-jest',

	testEnvironment: 'node',
	testRegex: '(/__tests__/.*|/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	testMatch: null,
	testURL: 'http://localhost/',

	coverageDirectory: './coverage/',
	collectCoverage: true,

	setupTestFrameworkScriptFile: 'jest-extended',

	globals: {
		'ts-jest': {
			diagnostics: {
				ignoreCodes: [2445, 7006, 7031, 2339, 7016, 7023, 7017]
			},
		},
	},
};

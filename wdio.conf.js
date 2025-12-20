export const config = {
	capabilities: [
		{
			browserName: 'firefox',
		},
		{
			browserName: 'chromium',
		},
	],
	specs: ['./tests/*.js'],
	logLevel: 'error',
	framework: 'mocha',
	runner: [
		'browser',
		{
			coverage: {
				enabled: true,
			},
		},
	],
};

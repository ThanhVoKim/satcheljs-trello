module.exports = {
	extends: ['plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension,

			// As mentioned in the comments, you should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: ['plugin:@typescript-eslint/recommended'],

			parserOptions: {
				project: ['./tsconfig.json'], // Specify it only for TypeScript files
			},
		},
	],
};
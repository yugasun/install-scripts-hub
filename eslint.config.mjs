import nextConfig from 'eslint-config-next';
import reactHooks from 'eslint-plugin-react-hooks';
import { plugin as tsEslintPlugin } from 'typescript-eslint';

export default [
	{
		ignores: ['.next/**', 'out/**', 'node_modules/**'],
	},
	...nextConfig,
	{
		plugins: {
			'@typescript-eslint': tsEslintPlugin,
			'react-hooks': reactHooks,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'react-hooks/exhaustive-deps': 'warn',
			'react-hooks/immutability': 'off',
			'react-hooks/set-state-in-effect': 'off',
			'react/no-unescaped-entities': 'off',
			'import/no-anonymous-default-export': 'off',
			'prefer-const': 'error',
			'no-var': 'error',
		},
	},
];

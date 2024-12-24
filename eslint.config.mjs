import pluginVanilla from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import reactHook from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const reactHookWrapper = {
    plugins: { 'react-hooks': reactHook },
    rules: reactHook.configs.recommended.rules,
};

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        ignores: ['**/out', '**/dist*/', '**/build*/', '**/.vercel'],
    },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginVanilla.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    reactRefresh.configs.recommended,
    reactHookWrapper,
    {
        rules: {
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': 'off',
        },
    },
];

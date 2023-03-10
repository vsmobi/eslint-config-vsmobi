module.exports = {
    extends: [
        './base.js'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/member-delimiter-style': [
            'warn',
            {
                multiline: {
                    delimiter: 'comma',
                    requireLast: false
                }
            }
        ],
        'no-restricted-imports': ['warn', {
            patterns: ['../../../*']
        }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.js',
                    '**/*.jsx',
                    '**/*.ts',
                    '**/*.tsx'
                ]
            }
        ]
    },
    overrides: [
        {
            files: [
                'dyson/**/*.ts',
                'src/index.ts'
            ],
            rules: {
                'no-restricted-imports': 'off'
            }
        }
    ]
};

module.exports = {
	 prettier: true,
    include: [
      "src/**/*.ts",
      "src/**/*.tsx"
    ],
    ignores: [
      "**/*.js",
      "**/*.d.ts",
      "node_modules",
      "dist",
      "template/**"
    ],
	 rules: {
		'new-cap': 'WARN',
		'import/extensions': [
			'off',
      ],
		'n/file-extension-in-import': [
			'warn',
			'never',
      ],
		'unicorn/filename-case': [
			'WARN',
        {
				case: 'pascalCase',
				ignore: [
					'\\.config\\.ts$',
					'^use.*.ts$',
					'\\.config\\.js$',
          ],
        },
      ],
		'@typescript-eslint/naming-convention': [
			'WARN',
        {
				selector: 'variableLike',
				format: [
					'camelCase',
					'PascalCase',
          ],
        },
        {
				selector: 'variable',
				format: [
					'PascalCase',
					'camelCase',
          ],
				modifiers: [
					'exported',
          ],
        },
        {
				selector: 'variable',
				format: [
					'camelCase',
          ],
				filter: {
					regex: '^create|^use|^get|^post',
					match: true,
          },
        },
        {
				selector: 'function',
				format: [
					'PascalCase',
          ],
        },
        {
				selector: 'interface',
				format: [
					'PascalCase',
          ],
				prefix: [
					'I',
          ],
        },
        {
				selector: 'typeAlias',
				format: [
					'PascalCase',
          ],
				prefix: [
					'T',
          ],
        },
        {
				selector: 'variable',
				types: [
					'boolean',
          ],
				format: [
					'PascalCase',
          ],
				prefix: [
					'is',
					'should',
					'has',
					'can',
					'did',
					'will',
          ],
        },
      ],
	}
}
/**
 * @type {import('prettier').Config}
 */
const prettierConfig = {
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  overrides: [
    {
      files: ['*.html'],
      options: {
        printWidth: 150,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-embed', '@trivago/prettier-plugin-sort-imports'],
};

/**
 * @type {import('prettier-plugin-tailwindcss').PluginOptions}
 */
const tailwindConfig = {
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx', 'cn'],
  tailwindPreserveWhitespace: true,
};

/**
 * @type {import('@trivago/prettier-plugin-sort-imports').PluginConfig}
 */
const importOrderConfig = {
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]', '.*\\.(css|scss|sass|less)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};

/** @type {import('prettier-plugin-embed').PrettierPluginEmbedOptions} */
const prettierPluginEmbedConfig = {
  embeddedSqlTags: ['sql'],
};

/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
  language: 'postgresql',
  keywordCase: 'upper',
};

const config = {
  ...prettierConfig,
  ...tailwindConfig,
  ...importOrderConfig,
  ...prettierPluginEmbedConfig,
  ...prettierPluginSqlConfig,
};

export default config;

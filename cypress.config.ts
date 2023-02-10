import { defineConfig } from 'cypress';
import webpack from '@cypress/webpack-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['*', '.js', '.ts'],
          plugins: [new TsconfigPathsPlugin({ configFile: './cypress/tsconfig.json' })],
        },
        module: {
          rules: [
            {
              test: /\.(ts)$/,
              exclude: /node_modules/,
              use: ['ts-loader'],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config,
                },
              ],
            },
          ],
        },
      },
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  viewportHeight: 896,
  viewportWidth: 414,
  e2e: {
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
});

import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import webpack from '@cypress/webpack-preprocessor';
import { defineConfig } from 'cypress';
import cypressOnFix from 'cypress-on-fix';
import path from 'path';

const setupNodeEvents = async (
  cyOn: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> => {
  const on = cypressOnFix(cyOn);
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js'],
          alias: {
            '@page-objects': path.resolve('cypress/e2e/page-objects/'),
            '@page-elements': path.resolve('cypress/e2e/page-elements/'),
            '@custom-types': path.resolve('cypress/types/index'),
            '@constants': path.resolve('cypress/constants/index'),
          },
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              loader: 'ts-loader',
            },
            {
              test: /\.feature$/,
              loader: '@badeball/cypress-cucumber-preprocessor/webpack',
              options: config,
            },
          ],
        },
      },
    }),
  );

  return config;
};

export default defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false,
    video: true,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 60000,
    supportFile: 'cypress/support/e2e.ts',
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    setupNodeEvents,
    specPattern: '**/*.feature',
    watchForFileChanges: false,
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
  },
});
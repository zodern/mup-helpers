Package.describe({
  name: 'zodern:mup-helpers',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Fixes Meteor Up verifying deployments for certain apps',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.0');
  api.use('ecmascript');
  api.use('webapp');
  api.mainModule('mup-helpers.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('zodern:mup-helpers');
  api.mainModule('mup-helpers-tests.js');
});

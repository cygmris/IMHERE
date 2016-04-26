// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    text: 'vendor/text/text',
    hammerjs: 'vendor/materialize/js/hammer.min',
    jquery: 'vendor/jquery/dist/jquery.min',
    'hammer-jquery': 'vendor/Materialize/js/jquery.hammer',
    underscore: 'vendor/underscore/underscore-min',
    backbone: 'vendor/backbone/backbone-min',
    // jquery: 'libs/jquery.min',
    // materialize: 'libs/materialize.min',
    // underscore: 'libs/underscore-min',
    // backbone: 'libs/backbone-min',
    materialize: 'vendor/Materialize/dist/js/materialize',
    templates: '../templates'
  },
  shim: {
    'hammerjs': {
      exports: 'Hammer',
      deps: ['jquery']
    },
    'hammer-jquery': {
      deps: ['jquery']
    },
    'materialize': {
      deps: ['jquery', 'hammer-jquery', 'hammerjs', 'text', 'underscore', 'backbone']
    },
    'underscore': {
      deps: ['jquery', 'hammerjs']
    },
    'backbone': {
      deps: ['text', 'hammerjs', 'jquery', 'underscore'],
    },
    'jquery': {
      exports: '$',
      deps: ['text']
    },

  }
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App) {
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});

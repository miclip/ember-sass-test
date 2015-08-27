/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var funnel = require('ember-cli/node_modules/broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  var fontawesome = new funnel('bower_components/font-awesome/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });

 

    var merged = mergeTrees([app.toTree(), fontawesome], {
        overwrite: true
    });

    return app.toTree(merged);

};

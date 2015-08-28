import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-sass-test/tests/helpers/start-app';

module('Acceptance | check index', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    var btn = find('button');
    assert.ok(btn,'primary btn found');
    assert.equal(btn.css('background-color'),'rgb(255, 20, 147)');
  });



});

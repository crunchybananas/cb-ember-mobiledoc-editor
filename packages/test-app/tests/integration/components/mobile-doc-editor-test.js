import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mobiledoc-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.content = {
      version: '0.3.2',
      markups: [],
      atoms: [],
      cards: [],
      sections: [[1, 'p', [[0, [], 0, 'Welcome to Mobiledoc Basic Content']]]],
    };

    await render(hbs`<Mobiledoc::Editor @content={{this.content}}/>`);

    assert.dom(this.element).hasText('Welcome to Mobiledoc Basic Content');
  });
});

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BasicExampleComponent extends Component {
  @tracked content = {
    version: '0.3.2',
    markups: [],
    atoms: [],
    cards: [],
    sections: [[1, 'p', [[0, [], 0, 'Welcome to Mobiledoc Basic Content']]]],
  };

  get jsonContent() {
    return JSON.stringify(this.content);
  }

  @action
  postDidChange(content) {
    this.content = content;
  }
}

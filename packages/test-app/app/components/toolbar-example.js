import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ToolbarExampleComponent extends Component {
  @tracked content = {
    version: '0.3.2',
    markups: [],
    atoms: [],
    cards: [],
    sections: [[1, 'p', [[0, [], 0, 'Welcome to Mobiledoc Toolbar Content']]]],
  };

  editor = null;

  get jsonContent() {
    return JSON.stringify(this.content);
  }

  @action
  editorDidLoad(editor, element) {
    let elm = element.parentElement;

    elm.querySelector('.toolbar').addEventListener('click', (evt) => {
      let isButton = event.target.nodeName === 'BUTTON';

      if (isButton) {
        let button = evt.target;

        let action = button.dataset['action'];
        let args = button.dataset['args'].split(',');

        editor[action](...args);
      }
    });
  }

  @action
  postDidChange(content) {
    this.content = content;
  }
}

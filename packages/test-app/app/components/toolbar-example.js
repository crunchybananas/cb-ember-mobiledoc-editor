import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ToolbarExampleComponent extends Component {
  @tracked content = {
    version: "0.3.2",
    markups: [],
    atoms: [],
    cards: [],
    sections: [
      [1, "p", [
        [0, [], 0, "Welcome to Mobiledoc Basic Content"]
      ]]

    ]
  }

  editor = null;

  get basicContent() {
    return JSON.stringify(this.content);
  }

  @action
  editorDidLoad(editor, element) {
    let elm = element.parentElement;

    elm.querySelector('button[data-args=h1]').addEventListener('click', (evt) => {
      editor.toggleSection('h1');
      evt.preventDefault();
    }, true);

    elm.querySelector('button[data-args=h2]').addEventListener('click', (evt) => {
      editor.toggleSection('h2');
      evt.preventDefault();
    }, true);

        elm.querySelector('button[data-args=strong]').addEventListener('click', (evt) => {
      editor.toggleMarkup('strong');
      evt.preventDefault();
    }, true);

    elm.querySelector('button[data-args=em]').addEventListener('click', (evt) => {
      editor.toggleMarkup('em');
      evt.preventDefault();
    }, true);
  }

  @action
  postDidChange(content) {
    this.content = content;
  }
}
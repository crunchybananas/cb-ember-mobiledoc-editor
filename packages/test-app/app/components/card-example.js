import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CardExampleComponent extends Component {
  @tracked content = {
    version: '0.3.2',
    markups: [],
    atoms: [],
    cards: [],
    sections: [[1, 'p', [[0, [], 0, 'Example with a card']]]],
  };

  card = {
    name: 'kitten',
    type: 'dom',
    render() {
      let el = document.createElement('figure');
      el.innerHTML = `
        <img src="http://placekitten.com/200/100">
        <figcaption>Image of a kitten</figcaption>
      `;
      return el;
    },
  };

  atom = {
    name: 'mention',
    type: 'dom',
    render() {
      let el = document.createElement('span');
      el.setAttribute('style', 'background-color: #CCC;');
      el.innerText = `@hello`;
      return el;
    },
  };

  editor = null;
  element = null;

  get jsonContent() {
    return JSON.stringify(this.content);
  }

  @action
  editorDidLoad(editor, element) {
    this.element = element.parentElement;
    this.editor = editor;

    this.editor.cards.push(this.card);
    this.element.querySelector('.insert-card').addEventListener(
      'click',
      (evt) => {
        editor.insertCard('kitten');
        evt.preventDefault();
      },
      true
    );

    this.editor.atoms.push(this.atom);
    this.element.querySelector('.insert-atom').addEventListener(
      'click',
      (evt) => {
        editor.insertAtom('mention');
        evt.preventDefault();
      },
      true
    );
  }

  @action
  postDidChange(content) {
    this.content = content;
  }
}

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
    render({ env, payload }) {
      const el = document.createElement('div');
      const img = document.createElement('img');
      const caption = document.createElement('figcaption');
      const button = document.createElement('button');
      img.src = 'https://placekitten.com/200/100';
      caption.innerText = payload.caption;
      button.innerText = 'Edit';
      button.addEventListener('click', () => env.edit());
      el.appendChild(img);
      el.appendChild(caption);
      el.appendChild(button);
      return el;
    },
    edit({ env, payload }) {
      const el = document.createElement('div');
      const img = document.createElement('img');
      const button = document.createElement('button');
      const input = document.createElement('input');
      img.src = 'https://placekitten.com/200/100';
      input.value = payload.caption;
      input.autofocus = true;
      button.innerText = 'Save';
      button.addEventListener('click', () => {
        env.save({ caption: input.value });
      });
      el.appendChild(img);
      el.appendChild(input);
      el.appendChild(button);
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

  get cards() {
    return [this.card];
  }

  get atoms() {
    return [this.atom];
  }

  get jsonContent() {
    return JSON.stringify(this.content);
  }

  @action
  editorDidLoad(editor, element) {
    this.element = element.parentElement;
    this.editor = editor;

    // TODO: Expose 'insertCard' and 'insertAtom' from the editor component
    this.element.querySelector('.insert-card').addEventListener(
      'click',
      (evt) => {
        editor.insertCard('kitten');
        evt.preventDefault();
      },
      true
    );

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

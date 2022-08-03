import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CardExampleComponent extends Component {
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
  }

  @action
  postDidChange(content) {
    this.content = content;
  }
}

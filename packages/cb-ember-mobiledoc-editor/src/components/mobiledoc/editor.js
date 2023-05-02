import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MobiledocEditorComponent extends Component {
  @tracked editor = null;

  @action
  editorDidLoad(editor, element) {
    console.log('HI!');
    this.editor = editor;
    this.args.editorDidLoad?.(editor, element);
  }

  @action
  insertCard(cardName, event) {
    event.preventDefault();
    if (!this.editor) {
      return;
    }
    this.editor.insertCard(cardName);
  }

  @action
  insertAtom(atomName, event) {
    event.preventDefault();
    if (!this.editor) {
      return;
    }
    this.editor.insertAtom(atomName);
  }
}

import Modifier from 'ember-modifier';
import { Editor } from 'mobiledoc-kit';

export default class MobiledocEditorModifier extends Modifier {
  modify(element, [content, postDidChange, editorDidLoad]) {

    if (!this.editor) {
      const options = { mobiledoc: content };
      this.editor = new Editor(options);
      this.editor.render(element);

      this.editor.postDidChange((a, b, c) => {
        postDidChange?.(this.editor.serialize());
      })
      // TODO: Since toolbars can be created by user and
      // nothing is really provided by lib, do we create
      // one for the library and then allow overrides?
      editorDidLoad?.(this.editor, element);
    }
  }
}




cb-ember-mobiledoc-editor
==============================================================================

[![CI](https://github.com/crunchybananas/cb-ember-mobiledoc-editor/actions/workflows/ci.yml/badge.svg)](https://github.com/crunchybananas/cb-ember-mobiledoc-editor/actions/workflows/ci.yml)

A simple wrapper for [MobileDoc](https://bustle.github.io/mobiledoc-kit/demo/).
Heavily inspired by https://github.com/bustle/ember-mobiledoc-editor but using
modern Ember techniques.

Compatibility
------------------------------------------------------------------------------

* Ember.js v4.0.0 or above
* Embroider or ember-auto-import v2


Installation
------------------------------------------------------------------------------

```
ember install cb-ember-mobiledoc-editor
```

### Linking Library for Development

To link this package locally for development, execute the following, where
`<project-root>` is the root of the project using this library as a dependency:

```
cd packages/cb-ember-mobiledoc-editor/
npm link

cd <project-root>
npm link cb-ember-mobiledoc-editor
```

To unlink this project:

```
cd <project-root>
npm unlink --no-save cb-ember-mobiledoc-editor

cd packages/cb-ember-mobiledoc-editor/
npm unlink

```

Note that after unlinking, you may need to delete `node_modules` and reinstall
the dependencies. Sometimes simply reinstalling the dependencies after relinking
doesn't work.

#### Linking for Test App

The test app isn't automatically linked to the local repo. To run the test app
on the local codebase it must also be linked in the same fashion as above:

```
cd packages/cb-ember-mobiledoc-editor/
npm link

cd ../test-app/
npm link cb-ember-mobiledoc-editor
```

Note that you may need to delete `node_modules` in the `test-app` directory
before linking and then reinstall the dependencies for the link to work.


Why this addon?
------------------------------------------------------------------------------

Development
------------------------------------------------------------------------------

Run `ember serve` from packages/test-app and navigate to http://localhost:4200
in your browser.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

# gh-colors

Provides JS & CSS classes for obtaining the color GitHub assigns to a language.

Uses the JSON dataset provided by [ozh/github-colors](https://github.com/ozh/github-colors)

Inspired by [carlos-dubon/gh-colors](https://github.com/carlos-dubon/gh-colors/)

# Install

```sh
$ npm install @th3-s1lenc3/gh-colors
```

# Import

Include JS Functions:

```js
import { get, translate } from "@th3-s1lenc3/gh-colors";
```

Include CSS:

```js
import "{path_to_node_modules}/@th3-s1lenc3/gh-colors/dist/css/gh-colors{.min}.css"
```

Include SCSS:

```sass
@import "{path_to_node_modules}/@th3-s1lenc3/gh-colors/dist/scss/gh-colors.scss"
```

# Usage

## JS

```js
import { get } from "@th3-s1lenc3/gh-colors";
// function get(language, mode: default = "hex") {...}

const language = "coffeescript";
const hex = get(language);

console.log(hex);
// Output: #244776

// OR: RGB

const language = "java";
const rgb = get(language, "rgb");

console.log(rgb);
// Output: [ 36, 71, 118 ]
```

## CSS

```html
<!-- Text Color -->
<!-- <span class="gh-color-{language}" /> -->
<span class="gh-color-javascript" />

<!-- Background Color -->
<!-- <span class="gh-bg-color-{language}" /> -->
<span class="gh-bg-color-javascript" />
```

For languages with special characters, like c# or c++ use the translate function to translate:

```js
import { translate } from "@th3-s1lenc3/gh-colors";
// function translate(name, prefix: default = "color") {...}
// Prefix supports color | bg | bg-color | background

const language = "c#";
const languageClassWPrefix = translate(language); // Default prefix

console.log(languageClassWPrefix);
// Output: gh-color-c-sharp

// For background color
const languageClassWBgPrefix = translate(language, "bg"); // Background color prefix

console.log(languageClassWPrefix);
// Output: gh-bg-color-c-sharp

// OR: without prefix

const language = "c++";
const languageClass = translate(language, "");

console.log(languageClass);
// Output: c-plus-plus
```

# License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details

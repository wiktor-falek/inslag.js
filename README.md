# Lightweight, performant (blazingly fast), ugly ~~and probably worse than literally any other option~~ component framework for frontend JavaScript. Heavily inspired by [grecha.js](https://github.com/tsoding/grecha.js) by [Tsoding](https://github.com/tsoding)

## Features
WIP


## Using tags

### Notice - as for now not all tags are supported, and regardless you might to make use of a custom tag, so in order to do that use the tag() function

```js
tag("custom-tag").$att({
  "class": "mytag",
  "data-js": "some data",
  "style": "color: #004daa; font-size: 20px;"
})
```

### If you need to pass text into an element use text("mystring") to create a textNode, for example:
```js
tag("li", text("1"))
```
### Tags that expect text such as paragraphs and headers do this by default, but for custom tags you need to do this manually

<hr>

## Code example

### `App.js` - Main component
```js
  export default function App() {
    return div(
      h1("hello world")
      .$att({ class: "header", id: "test" })
    )
    .$att("id", "main");
  }
```
### `index.js` - Entry point
```js
  // As for now importing is not supported
  // import { mount } from "inslag";
  // import { App } from "./App.js";

  const root = document.getElementById("root");
  mount(root, App);
```
# Lightweight, performant (blazingly fast), ugly ~~and probably worse than literally any other option~~ component framework for frontend JavaScript. Heavily inspired by [grecha.js](https://github.com/tsoding/grecha.js) by [Tsodin](https://github.com/tsoding)

## Features
WIP


## Code example

### `App.js` - Main component
```js
  function App() {
    return div(
      h1("hello world")
      .att({ class: "header", id: "test" })
    )
    .att("id", "main")
  }
```
### `index.js` - Entry point
```js
  import { mount } from "inslag";
  import { App } from "./App.js";

  const root = document.getElementById("root");
  mount(root, App);
```
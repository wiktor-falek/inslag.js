## Lightweight, performant (blazingly fast) and ugly ~~also probably worse than literally any other option~~ component framework for frontend JavaScript. Heavily inspired by [grecha.js](https://github.com/tsoding/grecha.js) by [Tsoding](https://github.com/tsoding)

<br>

<!-- ## Core Features -->


# Getting started

<br>

## Installing

### Cdn

### Node

<br>


## Setting up project

### `index.html`
```html
<!DOCTYPE html>
  <head>
    <!-- this will be a cdn link once it's published -->
    <script src="inslag.js"></script>

    <!-- this script must be either deferred or located at the bottom of body -->
    <script src="index.js" defer></script>
    <title>inslag.js</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### `index.js`
```js
// main component
function App() {
  return div(
    h1("Hello World"),
    div(
      p("This is an inslag presentation page.")
    )
  )
}

// mounting the App component inside #root element of index.html
const root = document.getElementById("root");
mount(root, App);

// alternatively
mount(root, div(
    p("You can also mount an element directly")
    )
)
```


<br>

# Creating your first reusable component

In order to create an HTML element use functions named after HTML tags such as `div(), h1(), p()`

```js
function Component() {
  return div(
    h1("Hello"),
    p("inslag", 
      span(".js")
    ),
  )
}
```
Notice how tags that usually expect a text inside them, such as paragraphs, spans, headers and buttons, can take their first argument as a string.

However this is not the case for other elements such as divs.
This is because those elements generally should not contain text nodes.

In case you need to add a text node, you can use `text("")` function, which will create a textNode and append it to the element.
```js
div(
  text("hello world"),
  p()
)
```
This will result in the following HTML being rendered
```html
<div>
  hello world
  <p></p>
</div>
```

<br>

# Element methods

## `$att` allows to add attributes to the element

<br>

### There are two ways of adding an attribute

### Passing name and value as two parameters
```js
div().$att("class", "wrapper")
```

### Passing an object of one or multiple name value pairs
```js
div().$att({ class: "wrapper", style: "color: #eee;" });
```

## `$evt` allows to attach an event listener to the element
```js
button(`Click me`).$evt("onclick", () => {})
```

<br>
<hr>

## Custom tags

### In case a tag is not implemented or you need to create a custom one, use `tag()` function to create an html tag 
```js
tag("example-custom-tag").$att({
  "class": "my-tag",
  "data-js": "some data",
  "style": "color: #004daa; font-size: 20px;"
})
```

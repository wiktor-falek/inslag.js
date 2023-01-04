## Yet another JS framework for frontend JavaScript. A for fun project, that is currently abandoned but might get revisited someday and actually made into something usable. Heavily inspired by [grecha.js](https://github.com/tsoding/grecha.js) by [Tsoding](https://github.com/tsoding)

### In the future this project would have actual functionality like reactivity, hooks and scoped css, and syntactic sugar cause this is ugly.

<br>

<!-- ## Core Features -->


# Getting started

## Installing

### Npm
Install inslag by running `npm install inslag` 

Include the script inside your html file inside head
```html
<script src="./node_modules/inslag/index.js"></script>
```
### Cdn
Alternatively import script directly from cdn
```html
<script src="https://cdn.jsdelivr.net/npm/inslag@1.0.0/index.js"></script>
```


<br>


## Setting up a project

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/inslag@1.0.0/index.js"></script>
  <script src="index.js" defer></script>
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### `index.js`
```js
// Main component
function App() {
  return div(
    h1("Hello World"),
    div(
      p("This is an inslag presentation page.")
    )
  )
}

// Mounting the App component inside the #root element
const root = document.getElementById("root");
mount(root, App);

// Alternatively you can directly mount an element
mount(root, div(
    h1("Hello World"),
    div(
      p("This is an inslag presentation page.")
    )
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
  "data-index": "0",
  "style": "color: #004daa; font-size: 20px;"
})
```

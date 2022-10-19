function isHtmlElement(value) {
  return !!(value && value.nodeType === 1);
}

function isTextNode(value) {
  return !!(value && value.nodeType === 3);
}


function tag(name, ...children) {
  const element = document.createElement(name);

  for (let child of children) {
    console.assert(isHtmlElement(child) || isTextNode(child), { child: "child is invalid" });
    element.appendChild(child);
  }

  element.$att = function (key, value) {
    if (typeof key === "object") {
      // iterate over keys of object and assign them
      // as attributes with corresponding values
    }
    this.setAttribute(key, value);
    return this;
  };

  return element;
}

function text(data="") {
  if (isHtmlElement(data)) {
    return data;
  }
  const textNode = document.createTextNode(data);
  return textNode;
}

function div(...children) {
  const element = tag("div", ...children);
  return element;
}

function p(data, ...children) {
  const element = tag("p", text(data), ...children);
  return element;
}

function h1(data, ...children) {
  const element = tag("p", text(data), ...children);
  return element;
}

function mount(root, component) {
  window.addEventListener("load", (event) => {
    console.log("inslag.js loaded");
    root.appendChild(component);
  });
}

const root = document.getElementById("root");

console.log(p("test"));

const App = div(
  div(
    div(
      p("hello"),
      p("world"),
    )
  ).$att("class", "text"),
).$att("id", "parent");

mount(root, App);

// EXAMPLE APP
/*
  ./App.js

  function App() {
    return div(
      h1("hello world")
      .att({ class: "header", id: "test" })
    )
    .att("id", "main")
  }

*/
/*
  ./index.js

  import { mount } from "inslag";
  import { App } from "./App.js";

  const root = document.getElementById("root");
  mount(root, App);
*/

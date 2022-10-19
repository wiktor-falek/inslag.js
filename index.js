function isHtmlElement(value) {
  return !!(value && value.nodeType === 1);
}

function isTextNode(value) {
  return !!(value && value.nodeType === 3);
}

function tag(name, ...children) {
  const element = document.createElement(name);

  for (let child of children) {
    console.assert(isHtmlElement(child) || isTextNode(child), {
      child: "child is invalid",
    });
    element.appendChild(child);
  }

  // attribute can either be a key for the value, or an object of attribute value pairs
  // there is a cleaner way to do this for sure but this will do for now
  element.$att = function (attribute, value) {
    if (typeof attribute === "object") {
      for (const [k, v] of Object.entries(attribute)) {
        this.setAttribute(k, v);
      }
      return this;
    } else {
      this.setAttribute(attribute, value);
    }
    return this;
  };

  return element;
}

function text(data = "") {
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

// TEXT ELEMENTS

function p(data, ...children) {
  const element = tag("p", text(data), ...children);
  return element;
}

function h1(data, ...children) {
  const element = tag("h1", text(data), ...children);
  return element;
}

function h2(data, ...children) {
  const element = tag("h2", text(data), ...children);
  return element;
}

function h3(data, ...children) {
  const element = tag("h3", text(data), ...children);
  return element;
}

function h4(data, ...children) {
  const element = tag("h4", text(data), ...children);
  return element;
}

function h5(data, ...children) {
  const element = tag("h5", text(data), ...children);
  return element;
}

function h6(data, ...children) {
  const element = tag("h6", text(data), ...children);
  return element;
}

function mount(root, component) {
  window.addEventListener("load", (event) => {
    console.log("inslag.js loaded");
    root.appendChild(component);
  });
}

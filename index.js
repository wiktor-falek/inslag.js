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

  element.$evt = function (evtType, cb) {
    element[evtType] = cb; // element.onclick = (e) => { console.log(e) }
    return this;
  };

  element.$val = function () {};

  return element;
}

function text(data = "") {
  if (isHtmlElement(data)) {
    return data;
  }

  // this could potentially have some edge cases
  // but generally calls .toString() if that method exists
  const stringifiedData = String(data);

  const textNode = document.createTextNode(stringifiedData);
  return textNode;
}

function div(...children) {
  const element = tag("div", ...children);
  return element;
}

function ul(...children) {
  const element = tag("ul", ...children);
  return element;
}

function ol(...children) {
  const element = tag("ol", ...children);
  return element;
}

function img(...children) {
  const element = tag("img", ...children);
  return element;
}

// TEXT ELEMENTS

function button(data, ...children) {
  const element = tag("button", text(data), ...children);
  return element;
}

function li(data, ...children) {
  const element = tag("li", text(data), ...children);
  return element;
}

function a(data, ...children) {
  const element = tag("a", text(data), ...children);
  return element;
}

function p(data, ...children) {
  const element = tag("p", text(data), ...children);
  return element;
}

function span(data, ...children) {
  const element = tag("span", text(data), ...children);
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

/**
 *
 * @param {Object} routes
 */
function router(routes) {
  /*
  {
    "/": Home,
    "/": { component: HomeComponent, ...options},
    "default": NotFound
  }
  */

  let element = div();

  function syncHash() {
    let location = window.location.hash.split("#")[1] || "/";

    if (!location in routes) {
      // do something perhaps
      return;
    }
    let component = routes[location];

    // if component is passed to router without being called
    if (typeof component === "function") {
      component = component();
    }

    console.assert(isHtmlElement(component), {
      component,
      error: `invalid component in router at location '${location}'`,
    });

    element.replaceChildren(component);
  }

  syncHash();

  window.addEventListener("hashchange", syncHash);

  return element;
}

/**
 *
 * @param {HTMLDivElement} root
 * @param {HTMLElement | function: HTMLElement} component
 */
function mount(root, component) {
  if (typeof component === "function") {
    component = component();
  }

  window.addEventListener("load", () => {
    console.log("Inslag.js Mounted");
    root.appendChild(component);
  });
}

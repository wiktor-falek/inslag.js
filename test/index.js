function Home() {
  return div(
    h1("home")
  )
}

function Test() {
  return div(
    h1("route")
  )
}

function App() {
  return div(
    a("home").$att("href", "#"),
    tag("br"),
    a("test").$att("href", "#test"),
    router({
    "/": Home,
    "test": Test(),
  })).$att({
    style: "font-size: 24px; line-height: 1.4;"
  })
}

mount(
  document.querySelector("#root"),
  App
)
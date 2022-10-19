function App() {
  return div(
    h1("Hello World"),
    div(
      p("This is an inslag presentation page.")
    )
  ).$att({ class: "content", style: "color: #eee;" });
}

const root = document.getElementById("root");
mount(root, App);

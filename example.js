

// const App = 
//   div(
//     h1("Title"),
//     div(
//       text("bare text test"),
//       h2("Subtitle").$att({ style: "font-size: 20px" }),
//       tag("ul",
//         tag("li", text("1")),
//         tag("li", text("2"))
//       ).$att("class", "wrapper")
//     ).$att({ class: "wrapper", id: "idk" })
//   ).$att({"class": "content"})

function App() {
  return div(
    h1("hello world")
    .$att({ class: "header", id: "test" })
  )
  .$att("id", "main")
}

const root = document.getElementById("root");

mount(root, App);

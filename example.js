const root = document.getElementById("root");

const App = 
  div(
    h1("Title"),
    div(
      text("bare text test"),
      h2("Subtitle").$att({ style: "font-size: 20px" }),
      tag("ul",
        tag("li", text("1")),
        tag("li", text("2"))
      ).$att("class", "wrapper")
    ).$att({ class: "wrapper", id: "idk" })
  ).$att({"class": "content"})

mount(root, App);

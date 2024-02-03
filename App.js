const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from react"
);
// id:attribute ex <h1 id="heading" xyz="abc">Hello World</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

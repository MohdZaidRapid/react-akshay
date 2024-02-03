/*

<div id="parent">
<div>
<h1>
hi am h1 tag
</h1>
</div>

</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from react"
);
// id:attribute ex <h1 id="heading" xyz="abc">Hello World</h1>
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

import React from "react";
import ReactDOM from "react-dom";

import MyButton from "./MyButton";
import MyList from "./MyList";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appState = {
  text: "My Button",
  disabled: true,
  items: ["First", "Second", "Third"],
};

function render(state) {
  const { text, disabled, items } = state;

  root.render(
    <main>
      <MyButton text={text} disabled={disabled} />
      <MyList items={items} />
    </main>
  );
}

render(appState);

setTimeout(() => {
  appState.disabled = false;
  appState.items.push("Fourth");

  render(appState);
}, 1000);

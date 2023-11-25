import * as React from "react";
import * as ReactDOM from "react-dom";

import MySection from "./MySection";
import MyButton from "./components/Ex1.2/MyButton";
import MyComponent from "./MyComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MySection>
    <MyButton>My Button Text</MyButton>
    <MyComponent />
  </MySection>
);

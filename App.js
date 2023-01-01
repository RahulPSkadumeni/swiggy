import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// Composing Comopnentss
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React functional component</h2>
      <h2>This is a h2 tage</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

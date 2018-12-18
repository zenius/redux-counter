import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

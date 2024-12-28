import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoPage from "./pages/todoPage/TodoPage";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
}

export default App;

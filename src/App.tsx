import React from "react";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import store from "./redux/store";
import { AppContainer } from "./App.syled";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Home />
      </AppContainer>
    </Provider>
  );
}

export default App;

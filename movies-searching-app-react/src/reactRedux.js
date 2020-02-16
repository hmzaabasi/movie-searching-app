import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ReduxApp from "./reduxApp";
import RootReducer from "./redux/reducers";

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ReactRedux = () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};

export default ReactRedux;

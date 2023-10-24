// index.js
import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import App from "./App";
import { getUsers } from "./actions/users.action";
import { getPosts } from "./actions/post.actions";
import { getStories } from "./actions/story.action";
import { getVideoReels } from "./actions/reels.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

// Dispatch des actions initiales ici
store.dispatch(getUsers());
store.dispatch(getPosts());
store.dispatch(getStories());
store.dispatch(getVideoReels());

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(ReduxApp);

export default ReduxApp;

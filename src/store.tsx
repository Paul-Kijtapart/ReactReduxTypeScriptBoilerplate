import {
    createStore,
    applyMiddleware
} from "redux";

import {
    appReducer
} from "./reducer";

// Middlewares
import logger from "redux-logger";

export const store = createStore(
    appReducer,
    {},
    applyMiddleware(logger)
);
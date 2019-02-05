import { AnyAction, applyMiddleware, compose, createStore, Dispatch, Middleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./rootReducer";
const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const simplifyObjectMiddleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  next({...action});
};

const middleware: Middleware[] = [
  thunk,
  simplifyObjectMiddleware,
];

// tslint:disable-next-line: ban-types
const enhancers: Function[] = [devToolsExtension({name: "shopping cart"})];

const composedEhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default createStore(
  reducers,
  composedEhancers,
);

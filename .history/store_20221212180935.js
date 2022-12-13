import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./src/redux/reducers/user.reducer";
import rootSga from "redux/saga";
import productReducer from "./src/redux/reducers/product.reducer";

import burgerReducer from "./src//redux/reducers/burger.reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
    product: productReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSga);

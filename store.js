import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import rootSga from "redux/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSga);

import { combineReducers } from "@reduxjs/toolkit";

import bucketState from "./bucketsReducer";

const rootReducer = combineReducers({
  bucketState: bucketState,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

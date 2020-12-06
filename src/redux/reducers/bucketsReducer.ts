import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit";

export const BUCKET_KEYS = ["bucket1", "bucket2", "bucket3"];

type StateType = {
  currentItem: string;
  currentBucketId: string;
  buckets: { [key: string]: Array<string> };
};

const initialState: StateType = {
  currentItem: "",
  currentBucketId: "",
  buckets: BUCKET_KEYS.reduce(
    (val: { [key: string]: Array<string> }, key: string) => {
      val[key] = [];
      return val;
    },
    {}
  ),
};

const addItem: CaseReducer<
  StateType,
  PayloadAction<{
    item: string;
    bucketId: string;
  }>
> = (state, action) => {
  const { item, bucketId } = action.payload;
  const bucket = state.buckets[bucketId];
  if (!bucket.includes(item)) {
    bucket.push(item);
    state.currentItem = "";
    state.currentBucketId = "";
  } else {
    state.currentItem = item;
    state.currentBucketId = bucketId;
  }

  return state;
};

const bucketsSlice = createSlice({
  name: "bucketSlice",
  initialState,
  reducers: {
    addItem,
  },
});

//

export const { actions, reducer } = bucketsSlice;

export default reducer;

import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit";

type StateType = {
  currentItem: string;
  currentBucketId: Bucket | null;
  bucket1: Array<string>;
  bucket2: Array<string>;
  bucket3: Array<string>;
};

export type Bucket = "bucket1" | "bucket2" | "bucket3";

const initialState: StateType = {
  currentItem: "",
  currentBucketId: null,
  bucket1: [],
  bucket2: [],
  bucket3: [],
};

const addItem: CaseReducer<
  StateType,
  PayloadAction<{
    item: string;
    bucketId: Bucket;
  }>
> = (state, action) => {
  const { item, bucketId } = action.payload;
  const bucket = state[bucketId];
  if (!bucket.includes(item)) {
    bucket.push(item);
    state.currentItem = "";
  } else {
    state.currentItem = item;
    state.currentBucketId = bucketId;
  }

  return state;
};

const bucketsSlice = createSlice({
  name: "buckets",
  initialState,
  reducers: {
    addItem,
  },
});

//

export const { actions, reducer } = bucketsSlice;

export default reducer;

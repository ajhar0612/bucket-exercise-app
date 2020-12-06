import React, { useState } from "react";
import {
  Container,
  Topbar,
  BucketContainer,
  Input,
  Select,
} from "./Home.styled";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./../redux/reducers";
import {
  actions,
  Bucket as BucketType,
} from "../redux/reducers/bucketsReducer";
import Bucket from "../components/bucket/Bucket";

function Home() {
  const dispatch = useDispatch();
  const bucketState = useSelector((state: RootState) => state.bucketState);
  const {
    currentBucketId,
    currentItem,
    bucket1,
    bucket2,
    bucket3,
  } = bucketState;

  const [inputValue, setInputValue] = useState("");
  const [bucketId, setBucketId] = useState<BucketType>("bucket1");

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputValueKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      dispatch(actions.addItem({ item: inputValue, bucketId }));
      console.log("State", inputValue, bucketId);
      setInputValue("");
    }
  };

  const handleBuckageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBucketId(e.target.value as BucketType);
  };

  return (
    <Container>
      <Topbar>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
          onKeyDown={handleInputValueKeyDown}
        ></Input>
        <Select id="bucket" name="bucket" onChange={handleBuckageChange}>
          <option value="bucket1">Bucket 1</option>
          <option value="bucket2">Bucket 2</option>
          <option value="bucket3">Bucket 3</option>
        </Select>
      </Topbar>
      <BucketContainer>
        <Bucket
          items={bucket1}
          duplicate={currentBucketId === "bucket1" ? currentItem : ""}
        />
        <Bucket
          items={bucket2}
          duplicate={currentBucketId === "bucket2" ? currentItem : ""}
        />
        <Bucket
          items={bucket3}
          duplicate={currentBucketId === "bucket3" ? currentItem : ""}
        />
      </BucketContainer>
    </Container>
  );
}

export default Home;

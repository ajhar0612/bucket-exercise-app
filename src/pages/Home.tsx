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
import { actions, BUCKET_KEYS } from "../redux/reducers/bucketsReducer";
import Bucket from "../components/bucket/Bucket";

function Home() {
  const dispatch = useDispatch();
  const bucketState = useSelector((state: RootState) => state.bucketState);
  const { currentBucketId, currentItem, buckets } = bucketState;

  const [inputValue, setInputValue] = useState("");
  const [bucketId, setBucketId] = useState(BUCKET_KEYS[0]);

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
    setBucketId(e.target.value);
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
          {BUCKET_KEYS.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </Select>
      </Topbar>
      <BucketContainer>
        {BUCKET_KEYS.map((key) => (
          <Bucket
            items={buckets[key]}
            duplicate={currentBucketId === "bucket1" ? currentItem : ""}
          />
        ))}
      </BucketContainer>
    </Container>
  );
}

export default Home;

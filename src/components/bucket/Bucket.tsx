import React from "react";
import { Container, Item } from "./Bucket.styed";

type BucketProps = {
  items: Array<string>;
  duplicate?: string;
};

function Bucket({ items, duplicate }: BucketProps) {
  return (
    <Container>
      {items &&
        items.map((item) => (
          <Item key={item} highlighted={item === duplicate}>
            {item}
          </Item>
        ))}
    </Container>
  );
}

export default Bucket;

import styled from "styled-components";

interface IItem {
  readonly highlighted: boolean;
}

export const Container = styled.div`
  border: 1px solid lightgray;
  padding: 20px;
  margin: 20px;
  min-width: 400px;
  min-height: 400px;
`;

export const Item = styled.div`
  font-size: 22px;
  padding: 5px;
  color: ${(props: IItem) => (props.highlighted ? "red" : "black")};
  border-bottom: 1px solid lightgray;
`;

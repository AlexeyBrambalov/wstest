import React from "react";
import { Card, InputGroup } from "react-bootstrap";
import SearchBox from "./SearchBox";

export default function CardHeader() {
  return (
    <Card.Header>
      <div className="d-flex justify-content-between align-items-center">
        <h1>News List</h1>
        <InputGroup className="w-25">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">News filter</InputGroup.Text>
          </InputGroup.Prepend>
          <SearchBox />
        </InputGroup>
      </div>
    </Card.Header>
  );
}

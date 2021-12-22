import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="success"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "flex",
      }}
    >
      <span className="sr-only"></span>
    </Spinner>
  );
};

export default Loader;
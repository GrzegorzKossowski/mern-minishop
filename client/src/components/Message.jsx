import React from "react";
import { Alert } from "react-bootstrap";

const Message = (props) => {
  const { variant = "primary" } = props;

  return <Alert variant={variant}>{props.children}</Alert>;
};

export default Message;

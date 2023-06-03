import React from "react";
import { DbConsumer } from "../db-context";

const withDatabase = (WrappedComponent) => (props) => {
  return (
    <DbConsumer>
      {(context) => <WrappedComponent dbContext={context} {...props}/>}
    </DbConsumer>
  );
}

export default withDatabase;
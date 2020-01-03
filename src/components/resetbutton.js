import React from "react";
import Button from "@material-ui/core/Button";
const ResetButton = ({ resetArray }) => {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "50px" }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={e => {
            resetArray();
          }}
        >
          New Array
        </Button>
      </div>
    </div>
  );
};
export default ResetButton;

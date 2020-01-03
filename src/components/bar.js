import React from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
const Bar = ({
  arr,
  bubbleSort,
  setarraysize,
  arraysize,
  selectionSort,
  animationspeed
}) => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <Button
          variant="outlined"
          style={{ margin: "5px" }}
          color="primary"
          onClick={e => bubbleSort(arr)}
        >
          Bubblesort
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={e => selectionSort(arr)}
        >
          Selectionsort
        </Button>
      </div>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <div style={{ textAlign: "center", color: "white" }}>SetArraySize</div>
        <input
          type="range"
          min="5"
          max="100"
          id="arraysize"
          onChange={e => setarraysize(e.target.value)}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center"
        }}
      >
        {arr.map((a, i) => {
          let r = Math.random()
            .toString(36)
            .substring(7);
          var key = i + r;
          return (
            <div
              className="bars"
              style={{
                width: 800 / arraysize + "px",
                height: a * 2.2 + "px",
                display: "inline-block",
                backgroundColor: "aqua",
                margin: "0 5px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "bold"
              }}
              key={key}
            >
              {a}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Bar;

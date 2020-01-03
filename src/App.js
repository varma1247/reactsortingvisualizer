import logo from "./logo.svg";
import React, { Component, Fragment, useState, useEffect } from "react";
import { array } from "prop-types";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import ResetButton from "./components/resetbutton";
import Bar from "./components/bar";

function App() {
  const [arr, setArr] = useState([]);
  const [arraysize, setArraysize] = useState(15);
  const [animationspeed, setAnimationspeed] = useState(200);
  useEffect(() => {
    resetArray();
    //  setArr(array1)
  }, []);
  const setarraysize = size => {
    setArraysize(size);
    setAnimationspeed(2500 / size);
    resetArray();
  };
  const resetArray = () => {
    var array = [];

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    for (var i = 0; i < arraysize; i++) {
      array.push(randomNumber(10, 200));
    }

    setArr(array);
  };

  const bubbleSort = array => {
    var bubbleswap = [];
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          bubbleswap.push([j, j + 1, 0]);
          bubbleswap.push([j, j + 1, 1]);
        }
      }
      bubbleswap.push([array.length - i - 1]);
    }
    for (var k = 0; k < bubbleswap.length; k++) {
      let l = k;
      setTimeout(function() {
        const bars = document.getElementsByClassName("bars");
        if (bubbleswap[l].length === 1) {
          bars[bubbleswap[l][0]].style.backgroundColor = "yellow";
        } else {
          if (bubbleswap[l][2] === 0) {
            bars[bubbleswap[l][0]].style.backgroundColor = "red";
            bars[bubbleswap[l][1]].style.backgroundColor = "red";
            var temp = bars[bubbleswap[l][0]].textContent;
            bars[bubbleswap[l][0]].textContent =
              bars[bubbleswap[l][1]].textContent;
            bars[bubbleswap[l][1]].textContent = temp;
            var tempheight = bars[bubbleswap[l][0]].style.height;
            bars[bubbleswap[l][0]].style.height =
              bars[bubbleswap[l][1]].style.height;
            bars[bubbleswap[l][1]].style.height = tempheight;
          } else {
            bars[bubbleswap[l][0]].style.backgroundColor = "aqua";
            bars[bubbleswap[l][1]].style.backgroundColor = "aqua";
          }
        }
      }, animationspeed * k);
    }
    console.log(bubbleswap);

    setArr(array);
    console.log(arr);
  };
  const selectionSort = array => {
    var selectionswap = [];
    for (var i = 0; i < array.length; i++) {
      //set min to the current iteration of i
      var min = i;
      selectionswap.push([i, "start", 0]);
      for (var j = i + 1; j < array.length; j++) {
        selectionswap.push([j, 0]);
        selectionswap.push([j, 1]);
        if (array[j] < array[min]) {
          min = j;
        }
      }
      var temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      selectionswap.push([i, "end", 0]);
      selectionswap.push([i, min, "swap"]);
      selectionswap.push([i]);
    }
    console.log(array);

    for (var k = 0; k < selectionswap.length; k++) {
      let l = k;
      setTimeout(function() {
        const bars = document.getElementsByClassName("bars");
        if (selectionswap[l].length === 3) {
          if (selectionswap[l][1] === "start") {
            bars[selectionswap[l][0]].style.backgroundColor = "red";
          } else if (selectionswap[l][2] === "swap") {
            var temp = bars[selectionswap[l][0]].textContent;
            bars[selectionswap[l][0]].textContent =
              bars[selectionswap[l][1]].textContent;
            bars[selectionswap[l][1]].textContent = temp;
            var tempheight = bars[selectionswap[l][0]].style.height;
            bars[selectionswap[l][0]].style.height =
              bars[selectionswap[l][1]].style.height;
            bars[selectionswap[l][1]].style.height = tempheight;
          } else {
            bars[selectionswap[l][0]].style.backgroundColor = "aqua";
          }
        } else if (selectionswap[l].length === 2) {
          if (selectionswap[l][1] === 0) {
            bars[selectionswap[l][0]].style.backgroundColor = "red";
          } else {
            bars[selectionswap[l][0]].style.backgroundColor = "aqua";
          }
        } else {
          bars[selectionswap[l][0]].style.backgroundColor = "green";
        }
      }, animationspeed * k);
    }
    console.log(selectionswap);

    setArr(array);
    console.log(arr);
  };

  return (
    <div>
      <ResetButton arr={arr} resetArray={resetArray}></ResetButton>
      <Bar
        arr={arr}
        bubbleSort={bubbleSort}
        setarraysize={setarraysize}
        arraysize={arraysize}
        selectionSort={selectionSort}
      ></Bar>
    </div>
  );
}

export default App;

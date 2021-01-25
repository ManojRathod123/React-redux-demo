import React, { useState } from "react";
import { connect } from "react-redux"; // this is create the connection between react and redux. 
import {buyBook} from "../Redux"; // when we mention double dots then by default its go to the index file

function BookContainer(props) {

  // useState hook we are using here. // useState always take initial value
  const [number, setnumber]= useState(1)
  return (
    <>
    <h1>Book Container</h1>
      <h2>Number of Books - {props.numberofbooks}</h2>
      <input type='text' value={number} onChange={e=>setnumber(e.target.value)}/>
      <button onClick={()=>props.buyBook(number)}>Buy {number} Book</button>
    </>
  );
}

// here we are printing two values. // below function will return the initial value
const mapStatetoProps = (state) => {
  return {
    numberofbooks: state.numberofbooks,
  };
};

// call dispatch function. // when we will click on button then dispatch function will run
// buybook function will call here that will
const maptodispatch = (dispatch) => {
  return {
    buyBook: function (number) {
      dispatch(buyBook(number))
    }
  }
};
export default connect(mapStatetoProps, maptodispatch)(BookContainer); // connect to redux store here




// Subscribe:-subscribe() just lets you know every time the store changes. 
//If you're writing a react-redux application then you never need it because react-redux does this for you.
// ( i.e. essentially it watches for changes and then tells react to redraw)
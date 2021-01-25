import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; // we use useSelector to get a value state from redux store.
import {buyBook} from "../Redux";

function HookBookContainer() {
    const numberofbooks = useSelector(state=>state.numberofbooks) // we passed one state parameter here to get state value
    const dispatch = useDispatch();
    return(
        <>
        <h1>Hook container</h1>
        <h2>Number of Books- {numberofbooks}</h2>
        <button onClick={()=>dispatch (buyBook())}>Buy Book</button>
        </>
    )
}
export default HookBookContainer;
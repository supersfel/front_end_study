//CounterContainers.js

import React from 'react';
import Counter from '../components/Counter';
import {useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../modules/counter';
import { decreaseAsync, increaseAsync } from '../modules/counter';


function CounterContainer() {
    const number = useSelector(state => state.counter); //초기상태를 숫자로 두었음
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increaseAsync());
    };

    const onDecrease = () =>{
        dispatch(decreaseAsync());
    };

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
    
}


export default CounterContainer;
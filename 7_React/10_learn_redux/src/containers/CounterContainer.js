//CounterContainer.js
import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increase, decrease, setDiff} from '../modules/counter'
import {bindActionCreators} from 'redux';

function CounterContainer({
    number,
    diff,
    increase,
    decrease,
    setDiff
}) {

    return (
        <div>
            <Counter
                number={number}
                diff={diff}
                onIncrease={increase}
                onDecrease={decrease}
                onSetDiff={setDiff}
            />
        </div>
    );    
}

const mapStateToProps = (state) => ({
    number : state.counter.number,
    diff : state.counter.diff,
})

//첫번째 방법
// const mapDispatchToProps = dispatch => ({
//     Increase : () => dispatch(increase()),
//     Decrease : () => dispatch(decrease()),
//     SetDiff : (diff) => dispatch(setDiff(diff))
// })

//두번째 방법
// const  mapDispatchToProps = dispatch => bindActionCreators({
//     increase,
//     decrease,
//     setDiff
// }, dispatch)   //bindActionCreators사용

const mapDispatchToProps = {   //함수가 아닌 객체면 bindActionCreators가 자동으로 진행
    increase,
    decrease,
    setDiff,
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
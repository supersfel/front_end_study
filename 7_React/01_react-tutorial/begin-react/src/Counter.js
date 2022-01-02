import react, {useReducer, Component} from "react";


class Counter extends Component {

    // constructor(props){
    //     super(props);
    //     this.handleIncrease = this.handleIncrease.bind(this);  //this와 연결해주는 가장 일반적인 방법 (첫번재 방법)
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    constructor(props){
        super(props);
        this.state = {   //state는 꼭 객체형태여아지만 작동한다. (배열이나 문자열은 안된다)
            counter : 0,
            fixed : 1
        };
    }



    // state = {    //세번째 방법
    //     counter : 0
    // }

    handleIncrease= () => {
        // this.setState({  //setState를 사용해야 한다.
        //     counter : this.state.counter +1
        // });   //함수형 업데이트와는 달리 반복사용해도 +1만 적용된다. 바뀌는 상태를 알려주는 기능이기 때문

        this.setState( state => ({
            counter : state.counter +1
        }));   //함수형 업데이트를 사용하면 해당코드를 반복사용하면 +1 * n개씩 카운터가 증가한다.
    }

    handleDecrease = () => {   //화살표 함수를 써도 this가 연결이 된다.
        this.setState({
            counter : this.state.counter -1
        });
    }


    render () { //Componet가 자체로 가진 메서드
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값 : {this.state.fixed}</p>   {/*setState안에서 설정한것만 바뀐다. (불변성 생각 x)*/}
                {/* handleIncrease가 실행되면서 handleIncrease함수내의 this는 연결이 끊긴다 */}
            </div>
        );
    }
}




// function reducer(state,action) {    
//     switch (action.type) {
//         case 'INCREMENT':
//             return state +1;
//         case 'DECREMENT':
//             return state -1;
//         default : 
//             throw new Error('Unhandled action')
//     }
    
// }

// function Counter() {
    
//     const [number, dispatch] = useReducer(reducer,0);

//     const onIncrease = () =>{
//         dispatch({
//             type : 'INCREMENT'
//         })
//     }
//     const onDecrease = () =>{
//         dispatch({
//             type : 'DECREMENT'
//         })
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick ={onIncrease}>+1</button>
//             {/* onIncrease()로 쓰면 안된다*/}
//             <button onClick ={onDecrease}>-1</button>
//         </div>
//     )
// }


export default Counter;
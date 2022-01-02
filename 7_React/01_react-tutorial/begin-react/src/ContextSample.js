//ContextSample.js
import React, {createContext, useContext , useState} from 'react';

const MyContext = createContext('defaultValue');

function Child( ) {
    const text = useContext(MyContext) //MyContext값을 가져오는 Hook.
    return <div>안녕하세요? {text} </div>
}

function Parent() {
    return <Child />
}

function GrandParent( { text }) {
    return <Parent />
}

function ContextSample() {
    const [value,setValue] = useState(true);
    return (
        <MyContext.Provider value = {value ? '나는정민규' : '나는저미규'}> { /* value값 설정 */ }
            <GrandParent  />
            <button onClick= { () => setValue(!value)}>클릭</button>
        </MyContext.Provider>
    )
}


export default ContextSample;
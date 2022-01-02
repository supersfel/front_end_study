import React, {useState ,useRef} from 'react'; //ref 불러오기


function InputSample() {
    
    const [inputs,setInputs] = useState({
        name :'',
        nickname:'',
    });

    const nameInput = useRef(); //Ref 호출
    const {name,nickname} = inputs; 


    const onChange = (e) =>{ 
        const { name , value } = e.target;

        
        
        setInputs({ 
            ...inputs,
            [name] : value, 
        });

    };

    const onReset = () =>{
        setInputs({
            name : '',
            nickname : '',
        });

        nameInput.current.focus(); // foucs를 이쪽으로 설정
    };


    return(
        <div>
            <input 
                name = "name"  
                placeholder='이름' 
                onChange={onChange}
                value = {name}
                ref = {nameInput} //dom 설정
            />
            <input 
                name = "nickname" 
                placeholder='닉네임' 
                onChange={onChange}
                value = {nickname}
            />
            <button onClick = {onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;
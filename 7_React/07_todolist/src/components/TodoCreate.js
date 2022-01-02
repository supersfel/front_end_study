//TodoCreate.js
import React , {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button `
    background : #38d9a9;
    &:hover {
        background : #63e6be;
    }
    &:active {
        background : #20c997;
    }

    z-index : 5;   /*내용을 가리기 위함*/
    cursor : pointer;
    width : 80px;
    height : 80px;
    display : flex;
    align-items : center;
    justify-content : center;

    position : absolute;
    left : 50%;
    bottom : 0px;
    transform : translate(-50%,50%);  /* 정확한 버튼위치 찾기를 위함*/ 

    font-size : 60px;
    color : white;
    border-radius : 40px;

    border : none;
    outline : none;


    transition : 0.125s all ease-in;
    ${props => props.open && css`     /* 눌렀을때 x로 보이게끔 */
        background : #ff6b6b;
        &:hover {
            background : #ff8787;
        }
        &:active {
            background : #fa5252;
        }

        transform : translate(-50%,50%) rotate(45deg);
    `}

`;

const InsertFormPositioner = styled.div`

        width : 100%;
        bottom : 0;
        left : 0;
        position : absolute;
`;

const InsertForm = styled.form`
    background : #f8f9fa;
    padding : 32px;
    padding-bottom : 72px;
    border-bottom-left-radius : 16px; /* 둥근 모서리가 삐져나오지 않게*/
    border-bottom-right-radius : 16px;
    border-top : 1px solid #e9ecef;
`;


const Input = styled.input`
    
    padding : 12px;
    border-radius : 4px;
    border : 1px solid #dee2e6;
    width : 100%;
    outline : none;
    font-size : 18px;

    box-sizing : border-box;
`;


function TodoCreate() {

    const [open,setOpen] = useState(false);
    const [value,setValue] = useState(''); //input값 관리

    const onToggle = () => setOpen(!open);
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); //입력후 엔터키를 눌러도 새로고침이 안된다
        dispatch({
            type : 'CREATE',
            todo : {
                id : nextId.current,
                text : value,
                done : false,
            }
        });
        setValue('');
        setOpen(false);
        nextId.current +=1;
    }

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();


    return (
        <>        
            {open && (
                < InsertFormPositioner > 
                    < InsertForm onSubmit={onSubmit}>
                        <Input 
                            placeholder='할 일을 입력후, Enter를 누르세요' 
                            autoFocus 
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner >
            )}
            <CircleButton onClick ={onToggle} open={open}>
                < MdAdd />
            </CircleButton>
        </>

    );
    
}


export default React.memo(TodoCreate);
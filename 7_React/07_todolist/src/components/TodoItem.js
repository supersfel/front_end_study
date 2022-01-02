//TodoItem.js
import React from 'react';
import styled,{css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md' //react-icon에서 가져옴
import { useTodoDispatch } from './TodoContext';


const Remove = styled.div` 
    opacity : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #dee2e6;
    font-size : 24px;
    cursor : pointer;
    &:hover {
        color : #ff6b6b;
    }
`;  //쓰레기통 아이콘 표시

const CheckCircle = styled.div`
    width : 32px;
    height : 32px;
    border-radius : 16px;
    border : 1px solid #ced4da;
    font-size : 24px;
    display : flex;
    align-items: center;
    justify-content : center;
    margin-right : 20px;
    cursor : pointer;

    ${props => props.done && css`
        border : 1px solid #38d9a9;
        color : #38d9a9;
    `}
`; //체크 아이콘 표시

const Text = styled.div `
    flex : 1;
    font-size : 21px;
    color : #495057;
    ${props => props.done && css`
        color : #ced4da;
    `}

`;  //Text표시

const TodoItemBlock = styled.div`
    
    display : flex;
    align-items : center;
    padding-top : 12px;
    padding-bottom : 12px;

    &:hover {
        ${Remove} {   /* remove컴포넌트에서 만든 classname*/ 
            opacity : 1; /* 커서를 올렸을때 1 */
        }
    }
`;  //위 3개의 내용을 포함



function TodoItem( {id,done,text}) {

    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch ({
        type : 'TOGGLE',
        id
        
    });

    const onRemove = () => dispatch ({
        type : 'REMOVE',
        id
    });



    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
    
}




export default React.memo(TodoItem);  //최적화
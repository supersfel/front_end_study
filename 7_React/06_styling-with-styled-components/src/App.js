//App.js
import React, {useState} from 'react'
import './App.css';
import styled, { ThemeProvider , css } from 'styled-components'   //css를 넣어야 ``가 styled-componets로 작동
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`

width : 512px;
margin : 0 auto;
margin-top : 4rem;
border : 1px solid black;
padding : 1rem;
`;
  
const palette = {
  blue : '#228be6',
  gray : '#496057',
  pink : '#f06595'
}


const ButtonGroup = styled.div`

  
  & + & {
    margin-top : 1rem;
  }  
`;


function App() {

  const [dialog,setDialog] = useState(false);  //보여질지 안보여질지 정하는 변수
  const onClick = () =>{
    setDialog(true);
  }

  const onConfirm= () =>{
    console.log('확인');
    setDialog(false);
  }
  const onCancel= () =>{
    console.log('취소');
    setDialog(false);
  }


  return (
    <ThemeProvider theme={{
      palette
    }}>
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size = 'large'>BUTTON</Button>
            <Button color = "gray">BUTTON</Button>
            <Button size = 'small'color = "pink">BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size = 'large' outline>BUTTON</Button>
            <Button color = "gray" outline>BUTTON</Button>
            <Button size = 'small'color = "pink" outline>BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size = 'large' fullWidth>BUTTON</Button>
            <Button color = "gray" fullWidth>BUTTON</Button>
            <Button size = 'small'color = "pink" fullWidth>BUTTON</Button>
          </ButtonGroup>      

          <Button color = 'pink' size = 'large' onClick={onClick}>삭제</Button> 

        </AppBlock>
        <Dialog 
            title = "정말로 삭제하시겠습니까?"
            confirmText = "삭제"
            cancelText = "취소" 
            onConfirm={onConfirm}
            onCancel={onCancel}
            visible = {dialog}         
            > 데이터를 정말로 삭제하시겠습니까?</Dialog>
          
      </>
    </ThemeProvider>
  );
}


export default App;

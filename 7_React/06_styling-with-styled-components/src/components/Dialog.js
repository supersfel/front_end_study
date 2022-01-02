//Dialog.js
import React , {useState, useEffect }from 'react';
import styled, { keyframes ,css} from 'styled-components'
import Button from './Button';

//애니메이션 설정
const fadeIn = keyframes`   
    from{
        opacity : 0;
    }
    to {
        opacity : 1;
    }
`

const slideUp = keyframes`
    from{
        transform : translateY(200px);
    }
    to {
        transform : translateY(0px);
    }
`


const fadeOut = keyframes`   
    from{
        opacity : 1;
    }
    to {
        opacity : 0;
    }
`

const slideDown = keyframes`
    from{
        transform : translateY(0px);
    }
    to {
        transform : translateY(200px);
    }
`


const Darkbackground = styled.div`
    position : fixed;
    left : 0;
    top : 0;
    width : 100%;
    height : 100%;
    display: flex;
    align-items : center;
    justify-content : center;
    background : rgba(0,0,0,0.8);

    animation-duration : 0.25s;
    animation-timing-function : ease-out;
    animation-name : ${fadeIn};   /* 나타날때 transition */
    animation-fill-mode : forwards; /* 유지 */    


    ${props => props.disappear && css `
        animation-name : ${fadeOut};
    `}
`;  

const DialogBlock = styled.div`
    width : 320px;
    padding : 1.5rem;
    background : white;
    border-radius : 2px;

    h3 {
        margin : 0;
        font-size : 1.5rem;
    }

    p {
        font-size : 1.125rem;
    }


    animation-duration : 0.25s;
    animation-timing-function : ease-out;
    animation-name : ${slideUp};
    animation-fill-mode : forwards; /* 유지 */ 


    ${props => props.disappear && css `
        animation-name : ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
    margin-top : 3rem;
    display : flex;
    justify-content : flex-end;
`;


const ShortMarginButton = styled(Button)`
    & + &{
        margin-left : 0.5rem;
    }
`; //상속받아서 사용


function Dialog({
    title,
    children,
    confirmText,
    cancelText,
    visible,
    onConfirm,
    onCancel
}) {


    const [animate,setAnimate] = useState(false);  //보여주고 있다라는 정보
    const [localVisible,setLocalVisible] = useState(visible); //현재 상태가 true에서 false로 변함을 감지


    useEffect(() => {
        //visible true => false의 시점 캐치
        if ( localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false),250) //0.25초 이후에 삭제기능이 동작하게 됨
        }
        setLocalVisible(visible); //visible값이 바뀔때마다 해당값을 동기화시켜줌

    }, [localVisible,visible]); //deps

    if(!localVisible && !animate) return null; //visibile이 없으면 보여지지 않음

    return (
        <Darkbackground disappear = {!visible}>   {/*disappear 값 전달*/}
            <DialogBlock disappear = {!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton onClick = {onConfirm}color="gray">
                        {confirmText}
                    </ShortMarginButton>
                    <ShortMarginButton onClick = {onCancel}color="pink">
                        {cancelText}
                    </ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </Darkbackground>
    );
    
}


Dialog.defaultProps = {
    cancelText : '취소',
    confirmText : '확인'
}


export default Dialog;
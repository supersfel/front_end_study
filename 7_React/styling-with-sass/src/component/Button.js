//Button.js
import React from 'react';
import './Button.scss';
import classNames from 'classnames';


// size : large,medium,small
// color : blue,pink,gray
function Button({children,size,color,outline,fullWidth,className,...rest}) {  //rest를 넣어서 기능을 편하게

    return (
        <button className = {classNames('Button',size,color,{
            outline,    //값이 true일때만 classNames로 들어가게 된다
            fullWidth   //값이 true일때만 classNames로 들어가게 된다
        },
            className //className을 받아오면 나중에 따로 추가하지 않아도 자동으로 불러와 수정하기 용이하다
        )}
        
        {...rest} //onClick이나 Mousemove등이 자동으로 입력되게 된다.  

        >{children}</button>
    );
    
}
Button.defaultProps = {
    size : 'medium',
    color : 'blue'
};

export default Button;
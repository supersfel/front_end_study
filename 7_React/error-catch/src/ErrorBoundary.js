//ErrorBoundary.js
import { withSentryRouting } from '@sentry/react';
import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        error : false
    };

    componentDidCatch(error,info) {    //에러가 발생되었을때 실행
        //에러정보, 에러가 발생곳의 정보
        console.log('에러가 발생했습니다.')
        console.log({
            error,
            info
        });
        this.setState({
            error : true
        });


        if (ProcessingInstruction.env.NODE_ENV === 'production') {
            withSentryRouting.captureException(error, {extra : info });
        }



    }

    render() {
        if ( this.state.error) {
            return <h1>에러 발생!</h1>
        }
        return this.props.children;
    }
}


export default ErrorBoundary;
/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */
import React from "react";
function withTimer(WrappedComponent) {
    return class extends React.Component {
        state = {
            counter: 0,
            isRunning: false
        }
        startTimer = () => {
            if(!this.state.isRunning) {
                this.intervalID = setInterval(() => {
                    this.setState({
                        counter: this.state.counter + 1,
                        isRunning: true
                    })
                }, 100)
            }
        }

        stopTimer = () => {
            clearInterval(this.intervalID);
            this.setState({...this.state, isRunning: false})
        }
        componentWillUnmount() {
            clearInterval(this.intervalID)
        }


        render() {
            return <WrappedComponent counter={this.state.counter} stopTime={this.stopTimer}
                                     startTime={this.startTimer} {...this.props} />
        }
    }

}
export default withTimer;

// import * as React from 'react';
//
// const initialState = { count: 0 };
//
// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return { ...state, count: state.count + 1 };
//
//         default:
//             return state;
//     }
// }

// export default function App() {
//     const [state, dispatch] = React.useReducer(reducer, initialState);
//
//     function handleClick() {
//         dispatch({ type: 'increment' });
//     }
//
//     return (
//         <div>
//             <p>{state.count}</p>
//             <button onClick={handleClick}>Update</button>
//         </div>
//     );
// }
import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
            };
            }

            increment = () => {
                this.setState({
                    counter: this.state.counter + 1
                    });
            }
            decrement = () => {
                this.setState({
                    counter: this.state.counter - 1
                    });
            }
            reset = () => {
                this.setState({
                    counter: 0
                    });
            }
    render() {
        return(
        <div>
            <h1>counter App</h1>
            <h2>{this.state.counter}</h2>
            <button onClick={() => this.increment()}>Increment</button>
            <button onClick={() => this.decrement()}>Decrement</button>
            <button onClick={() => this.reset()}>Reset</button>
        </div>

        )
    }
}
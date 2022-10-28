import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        this.upCounter = this.upCounter.bind(this);
        this.downCounter = this.downCounter.bind(this);
    }

    upCounter() {
        this.setState({'count': this.state.count + 1})
    }

    downCounter() {
        this.setState({'count': this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.upCounter}>Plus</button>
                <button onClick={this.downCounter}>Minus</button>
            </div>
        )
    }
}

export default ClassCounter;
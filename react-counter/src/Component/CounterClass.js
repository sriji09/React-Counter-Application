import React, {Component} from 'react'

class CounterClass extends Component {
    state = {
        count : 0
    }
    incrementNumber() {
        this.setState( {
           count : this.state.count +1
        })
    }
    decrementNumber() {
        if(this.state.count >0) {
            this.setState({
                count: this.state.count-1
            })
        }
    }
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>Number - {this.state.count}</p>
                <button onClick ={() => this.incrementNumber()}>+</button>
                <button onClick={() => this.decrementNumber()}>-</button>
            </div>
        )
    }
}

export default CounterClass
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
            <div className="counter-container">
                <h2>Class Component</h2>
                <p className="count-display">Number - {this.state.count}</p>
                <div className="button-group">
                    <button className="counter-button increment" onClick={() => this.incrementNumber()}>
                        <span className="button-icon">➕</span>
                    </button>
                    <button className="counter-button decrement" onClick ={() => this.decrementNumber()}>
                        <span className="button-icon">➖</span>
                    </button>                    
                </div>
                
            </div>
        )
    }
}

export default CounterClass
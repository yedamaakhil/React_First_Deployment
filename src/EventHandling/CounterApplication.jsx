import React from 'react'
export default class CounterApplication extends React.Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    increment = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement = ()=>{
        this.setState({
            count : this.state.count - 1
        })
    }
    render() {
        return (
            <>
            <h1>Counter : {this.state.count}</h1>
            <div style={{display:"flex",gap:"5px"}}>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
            </>
    )
}
}

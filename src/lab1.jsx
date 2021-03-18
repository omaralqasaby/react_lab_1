import React, { Component } from 'react';
 
class Lab1 extends Component {
    state = {
        counter:0, 
    }
    increment(){
        return this.setState({counter:this.state.counter+1})
    }
    decrement(){
        return this.setState({counter:this.state.counter-1})
    }
    render() {
        return (
        <div>
            <span>{this.state.counter}</span>
            <div>
                <button onClick={()=>this.increment()}>increment</button>
            </div>
            <div>
                <button onClick={()=>this.decrement()}>decrement</button>
            </div>
            </div>);
            } 
            
    
}
 
export default Lab1;
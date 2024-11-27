import { Component } from "react";

class Counter2 extends Component {
    constructor(props){
        super(props);
        this.state = {count : 0}
    } 

    increase =()=>{
        this.setState({count:this.state.count +1})
    }
    decrease =()=>{
        this.setState({count:this.state.count -1})
    }

    render(){
        return(
            <div className="Counter">
                <h2>Counter App_2 = {this.state.count} </h2>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Deccrease</button>
            </div>
        )
    }
}
export default Counter2
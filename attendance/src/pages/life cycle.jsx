import { Component } from "react";


class Lifecycle extends Component{

    constructor (props){
        super(props);
        this.state = {count: 11}
        console.log("cons1")
    }
    componentDidMount(){
        console.log("Init Mount")
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`${prevState.count} to ${this.state.count}`);     
    }
    componentWillUnmount(){
        console.log("UnMount")
        if (this.state.count>10){
            alert("Life cycle counting Number Start with above 10. Reset the count then start")
        }
    }
    increase = ()=>{
        this.setState({count:this.state.count+2})
    }
    decrease = ()=>{
        this.setState({count:this.state.count-2})
    }
    reset = ()=>{
        this.setState({count:0})
    }
    render(){
        console.log("rend1")
        return(
            <>
                <div className="Counter">
                    <h1>Lifecycle Counter App = {this.state.count} </h1>
                    <button onClick={this.increase}>Increase</button>
                    <button onClick={this.decrease}>Decrease</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </>
        )
    }
}
export default Lifecycle



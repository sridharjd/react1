
import Table1 from "./components/class_components"
import Table3 from "./components/class_components3"
import  Day1  from "./components/Day1"
import { Table4 } from "./components/function_class"
import Lifecycle from "./components/life cycle"
import { Counter1 } from "./components/state1"
import Counter2 from "./components/state2"





function app() {

    const students =[
        {id:1, name:"Sam", age:24, grade:"O"},
        {id:2, name:"John", age:25, grade:"A"},
        {id:3, name:"David", age:30, grade:"B"},
        {id:4, name:"Jackie", age:20, grade:"A"},
        
    ]
  
    return (<>
        <Day1/>
        <h2>Class Component table</h2>
        <Table1/>
        <h2>Props in Class Component table</h2>
        <Table3 students={students}/>
        <h2>Props in Function Component table</h2>
        <Table4 students={students}/>
        <h2>State in function components</h2>
        <Counter1/>
        <h2>State in Class components</h2>
        <Counter2 />
        <h2>Lifecycles in components</h2>
        <Lifecycle/>
        

    </>
    )
}
export default app
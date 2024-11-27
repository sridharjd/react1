
import Table1 from "./components/class_components"
import Table3 from "./components/class_components3"
import  Day1  from "./components/Day1"
import { Table4 } from "./components/function_class"


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
        <Table3 props={students}/>
        <h2>Props in Function Component table</h2>
        <Table4 stdid={students}/>
    </>
    )
}
export default app
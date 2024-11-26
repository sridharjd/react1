
import Table1 from "./components/class_components"
import { Table2 } from "./components/class_components2"
import  Day1  from "./components/Day1"

function app() {

    const students =[
        {name:"Sam", age:24},
        {name:"John", age:25},
        {name:"David", age:30},
        {name:"Jackie", age:20},
    ]

    return (<>
        <Day1/>
        <h2>Class Component table</h2>
        <Table1/>
        <h2>Props in Component table</h2>
        <Table2 props={students}/>
    </>
    )
}
export default app
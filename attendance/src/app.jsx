import {BrowserRouter, Routes, Route} from "react-router-dom"
import Table1 from "./pages/class_components"
import Table3 from "./pages/class_components3"
import  Day1  from "./pages/Day1"
import { Table4 } from "./pages/function_class"
import Lifecycle from "./pages/life cycle"
import { Counter1 } from "./pages/state1"
import Counter2 from "./pages/state2"
import Formik1 from "./pages/formik1"
import Axios1 from "./pages/axios"
import Formik2 from "./pages/formik2"
import Formik3 from "./pages/formik3"
import Navbar from "./components/Navbar"
import Error from "./pages/Error"


function App() {
  
    const students =[
                {id:1, name:"Sam", age:24, grade:"O"},
                {id:2, name:"John", age:25, grade:"A"},
                {id:3, name:"David", age:30, grade:"B"},
               {id:4, name:"Jackie", age:20, grade:"A"},    
            ]

  return (
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Day1" element={<Day1/>}/>
        <Route path ="/Table1" element ={<Table1/>}/>
        <Route path ="/Table3" element ={<Table3 students={students} />}/>
        <Route path ="/Table4" element = {<Table4 students={students} />}/>
        <Route path ="/Counter1" element ={<Counter1/>}/>
        <Route path ="/Counter2" element ={<Counter2/>}/>
        <Route path="/Lifecycle" element={<Lifecycle/>}/>
        <Route path ="/Formik1" element ={<Formik1/>}/>
        <Route path ="/Formik2" element ={<Formik2/>}/>
        <Route path ="/Formik3" element = {<Formik3/>}/>
        <Route path ="/Axios1" element = {<Axios1/>}/>
        <Route path ="*" element = {<Error/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
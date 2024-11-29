import { Component } from "react";

class Table3 extends Component {
     render(){
      const {students} = this.props;
         return(
             <div>
                 <table className ="TableCSS">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((students, index) =>(
                            <tr key={index}>
                                <td>{students.name}</td>
                                <td>{students.age}</td>
                                <td>{students.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
             </div>
         )
     }
 }

 export default Table3

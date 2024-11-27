import { Component } from "react";

class Table3 extends Component {
     render(){
      const {props} = this.props;
         return(
             <div>
                 <table className ="TableCSS">
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                    </thead>
                    <tbody>
                        {props.map((props, index) =>(
                            <tr key={index}>
                                <td>{props.name}</td>
                                <td>{props.age}</td>
                                <td>{props.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
             </div>
         )
     }
 }

 export default Table3
// import { Component } from "react";

// class Table2 extends Component {
//     render(){
//      const {props} = this.props;
//         return(
//             <div>
//                 <table className ="TableCSS">
//                     <tbody>
//                         {props.map((props, index) =>(
    //                         <tr key={index}>
    //                             <th>Name</th>
    //                             <td>{props.name}</td>
    //                         </tr>
    //                         <tr>
    //                             <th>Age</th>
    //                             <td>{props.age}</td>
    //                         </tr>
//                        ))}
//                         
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }

// export default Table2

export const Table2= ({props}) => {
  return (
    <div >
        <table className ="TableCSS">
        <thead>
            <th>Name</th>
            <th>Age</th>
        </thead>
        <tbody>
            {props.map((props, index) => (
                <tr key={index}>
                    <td>{props.name}</td>
                    <td>{props.age}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

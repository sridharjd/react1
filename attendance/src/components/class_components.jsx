import { Component } from "react";

class Table1 extends Component {
    render(){
        return(
            <div>
                <table className ="TableCSS">
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sam</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>David</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Jackie</td>
                            <td>24</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table1
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; 

const Navbar = () => {
  return (
    <div>
      <h2>Router</h2>
      <ul>
        <li><Link to="/Day1">React</Link></li>
        <li><Link to="/Table1">Table 1</Link></li>
        <li><Link to="/Table3">Table 3</Link></li>
        <li><Link to="/Table4">Table 4</Link></li>
        <li><Link to="/Counter1">Counter 1</Link></li>
        <li><Link to="/Counter2">Counter 2</Link></li>
        <li><Link to="/Lifecycle">Lifecycle</Link></li>
        <li><Link to="/Formik1">Formik 1</Link></li>
        <li><Link to="/Formik2">Formik 2</Link></li>
        <li><Link to="/Formik3">Formik 3</Link></li>
        <li><Link to="/Axios1">API</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;

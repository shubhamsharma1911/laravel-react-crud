import { Link } from "@material-ui/core";
import React from "react";
import './style.css';
import Menu from "../../components/common/nav";

const HomePage = () => {
    return (
    <>
    <Menu />
    <h1> Welcome to HomePage </h1>
    <br></br>
    <div>
    <Link  href='/employees' style={{"fontSize": "27px"}} className="box"> View Data</Link>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <Link  href='/employees/add' style={{"fontSize": "27px"}} className="box"> Add Data</Link>
    </div>
    <br></br><br></br>
    <div className="mt-3 p-2">
        <p style={{ textAlign: "center" }}>Copyright &copy; Techwondoe 2022</p>
      </div>
    </>
    );

};

export default HomePage;
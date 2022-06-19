import { Link } from "@material-ui/core";
import React from "react";
import './style.css';

const HomePage = () => {
    return (
    <>
    <h1> Welcome To Company's Database </h1>
    <br></br>
    <div>
    <Link  href='/login' style={{"fontSize": "27px"}} className="box"> login</Link>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <Link  href='/register' style={{"fontSize": "27px"}} className="box"> register</Link>
    </div>
    <br></br><br></br>
    <div className="mt-3 p-2">
        <p style={{ textAlign: "center" }}>Copyright &copy; Techwondoe 2022</p>
      </div>
    </>
    );

};

export default HomePage;
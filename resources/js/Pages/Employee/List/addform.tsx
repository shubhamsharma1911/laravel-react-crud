import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"
import Layout from "../../../components/common/layout"
import Loader from "../../../components/common/loader"
import axios from 'axios';
import {Button} from '@material-ui/core'
import { toast } from 'react-toastify';
import Menu from "../../../components/common/nav"

const CompanyAddPage: React.FC = () => {
  const [state, setState] = useState({
    company_name: "",
    company_ceo: "",
    company_address: "",
    inception_date: ""
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    // axios.post('/employees/store', {
    //     company_name: state.company_name,
    //     company_ceo: state.company_ceo,
    //     company_address: state.company_address,
    //     inception_date: state.inception_date,
        
    // }).then(() => {
    //     toast.success("Employee Saved Successfully");
    //     console.log(state.company_name);
    //     setTimeout(() => {
    //         location.reload();
    //     },25)
    // })
    Inertia.post("/employees/store", state);
    setState({company_name: "", company_ceo: "", company_address: "", inception_date: "" });
  }
  return (
    <>
    <Menu />
    <Layout>
      
      <div className="row">
        <div className="col-sm-8">
          
            <form>
              <div className="form-group">
                <br></br>
                <h2 style={{"textAlign": "center"}}>Add new Company Details</h2>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  name="company_name"
                  value={state.company_name}
                  onChange={handleChange}
                  placeholder="company name"
                />
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  name="company_ceo"
                  value={state.company_ceo}
                  onChange={handleChange}
                  placeholder="company ceo"
                />
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  name="company_address"
                  value={state.company_address}
                  onChange={handleChange}
                  placeholder="company address"
                />
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  name="inception_date"
                  value={state.inception_date}
                  onChange={handleChange}
                  placeholder="inception date"
                />
              </div>
              <br></br>
              <Button onClick={ handleSubmit} variant="contained"
>
  Submit
</Button>
            </form>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default CompanyAddPage

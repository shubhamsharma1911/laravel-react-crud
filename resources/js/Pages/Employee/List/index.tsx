import React from "react";
import { Inertia, Method } from '@inertiajs/inertia';
import route from 'ziggy-js';
import { forwardRef } from "react";
import MaterialTable, { Column, Icons } from "@material-table/core";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from "@material-ui/icons";
import { Button, Container } from "@material-ui/core";
import { Company } from "./type";
import IEmployee from "../../../interface/employees";
import axios from 'axios';
import { toast } from 'react-toastify';
import CompanyAddPage from './addform';
import Menu from "../../../components/common/nav"
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import TablePagination from "@material-ui/core/TablePagination";
// import Pagination from "@material-ui/lab/Pagination";
interface Props{
    employees: Array<any>;
    data: Company[];
}

const columns: Array<Column<Company>> = [
    { title: "Company Name", field: "id" },
  { title: "Company Name", field: "company_name" },
  { title: "Company CEO", field: "company_ceo" },
  { title: "Company Address", field: "company_address" },
  { title: "Inception Date", field: "inception_date" },
];

const options = {
  paging: true,
  pageSize: 5,
  emptyRowsWhenPaging: false,
  pageSizeOptions: [5, 10, 20]
};

const EmployeeListPage: React.FC<Props> = ({ employees }) => {
    const handleRowDelete = (id: number) => {
        // Inertia.post('employees/delete', { id });
        // resolve();
        axios.delete('employees/delete/' + id ).then(() => {
            toast.error("Employee Deleted successfully");

            setTimeout(() => {
                location.reload();
            },25)
        })
      };

      const handleRowUpdate = (newData: any, oldData: any) => {
        axios.post('/employees/update', {
            id: oldData.id,
            company_name   :  newData.company_name,
            company_ceo :  newData.company_ceo,
            company_address : newData.company_address,
            inception_date : newData.inception_date,
        }).then(() => {
            toast.success("Employee Updated Successully");
            setTimeout(() => {
                location.reload();
            },25)
        })
      }
      

      const handleRowAdd = (newData: any) => {
        axios.post('/employees/store', {
            company_name   :  newData.company_name,
            company_ceo :  newData.company_ceo,
            company_address : newData.company_address,
            inception_date : newData.inception_date,
        }).then(() => {
            toast.success("Employee Saved Successfully");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }


  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const idd = 1;
    Inertia.post('employees/delete', { idd });
  };
    const data = employees.map((employee, index) => ({
        id: employee.id,
        company_name: employee.company_name,
        company_ceo: employee.company_ceo,
        company_address: employee.company_address,
        inception_date: employee.inception_date
      }));

    return (
    <div>
                <Menu />

    <br></br>
    <h1 className="title" style={{ "textAlign":"center"}}>Companies Data</h1>
    <br></br>

    <Container>
      <MaterialTable
        title="Table Based on Material UI"
        columns={columns}
        data={data}
        options={{
            headerStyle: {
                borderBottomColor: 'green',
                borderBottomWidth: '3px',
                fontFamily: 'verdana',
                minWidth: '100%'
            },
            actionsColumnIndex: -1
        }}
        editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                handleRowUpdate(newData, oldData);
          }),
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              handleRowAdd(newData)
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData.id)
            }),
          }}
      />
      
    </Container>
    {/* <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell >CEO</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >Inception Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {employees.length > 0 && 
                employees.map((employee, index) => {
                    return(
                        <TableRow key={index}>
                        <TableCell >{employee.company_name}</TableCell>
                        <TableCell >{employee.company_ceo}</TableCell>
                        <TableCell >{employee.company_address}</TableCell>
                        <TableCell >{employee.inception_date}</TableCell>
                      </TableRow>
                    )
                })
                }
              
        </TableBody>
        <Pagination count={5} defaultPage={6} siblingCount={0} />
      </Table>
    </Paper> */}
    <div className="mt-3 p-2">
        <p style={{ textAlign: "center" }}>Copyright &copy; Techwondoe 2022</p>
      </div>
    </div>
        );
};

export default EmployeeListPage;
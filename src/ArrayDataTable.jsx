import React from "react";

import Table from 'react-bootstrap/Table';

function ArrayDataTable(){

    // Example 1
    const DataTable = [
        {id:1, name:"sagar", Age:"30", location:"Mumbai"},
        {id:2, name:"sagar", Age:"30", location:"Mumbai"},
        {id:3, name:"sagar", Age:"30", location:"Mumbai"},
        {id:4, name:"sagar", Age:"30", location:"Mumbai"},
    ]

    return(
        <>
        <h1>Array Data Table</h1>

        <Table striped="columns" bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>LOaction</th>
                </tr>
                <tbody>
                    {DataTable.map((data)=>(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.Age}</td>
                            <td>{data.location}</td>
                        </tr>
                    ))} 
                </tbody>
 
            </thead>
        </Table>
        </>
    );
}

export default ArrayDataTable;
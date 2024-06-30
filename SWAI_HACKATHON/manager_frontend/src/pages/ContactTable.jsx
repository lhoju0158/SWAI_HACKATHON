import React, { Component } from "react";
import Table from "../components/Table"
import Sidebar from "../components/Sidebar";

class ContactTable extends Component{
    render(){
        const columns=[
            {path:"id", name:"유저 ID"},
            {path:"name", name:"이름"},
            {path:"cell", name:"연락처"}
        ];
        
        const data=[
            {
                id: 1,
                name:"공혁진",
                cell: "010-0000-0000"
            },
            {
                id: 1,
                name:"공혁진",
                cell: "010-7777-7777"
            },
            {
                id: 2,
                name:"정동주",
                cell: "010-1234-5678"
            }
        ];

        const { onSort, sortColumn } = this.props;
        return (
        <div>
            <Sidebar/>
            <h3>Contatct Information Table</h3>
            <Table data={data} onSort={onSort} sortColumn={sortColumn} columns={columns}/>
        </div>
        );
    }
}

export default ContactTable;
import React, { Component } from "react";
import Table from "../components/Table"
import Sidebar from "../components/Sidebar";

class LogTable extends Component{
    render(){
        const columns=[
            {path:"timerId", name:"타이머 ID"},
            {path:"id", name:"유저 ID"},
            {path:"longitude", name:"경도"},
            {path:"latitude", name:"위도"},
            {path:"createdAt", name:"생성 시간"}
        ];
        
        const data=[
            {
                timerId:1,
                id: 1,
                longitude: 127,
                latitude: 37,
                createdAt: "2024-05-20 11:43"
            },
            {
                timerId:2,
                id: 1,
                longitude: 126,
                latitude: 33,
                createdAt: "2024-06-27 17:32"
            }
        ];

        const { onSort, sortColumn } = this.props;
        return (
        <div>
            <Sidebar/>
            <h3>Location Log Information Table</h3>
            <Table data={data} onSort={onSort} sortColumn={sortColumn} columns={columns}/>
        </div>
        );
    }
}

export default LogTable;
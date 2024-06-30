import React, { Component } from "react";
import Table from "../components/Table"
import Sidebar from "../components/Sidebar";

class TimerTable extends Component{
    render(){
        const columns=[
            {path:"timerId", name:"타이머 Id"},
            {path:"id", name:"유저 ID"},
            {path:"createdAt", name:"생성 시간"},
            {path:"elapsedTime", name:"경과 시간"},
            {path:"policeCall", name:"신고 전화 여부"},
            {path:"report", name:"민원 리포트"}
        ];
        
        const data=[
            {
                timerId:1,
                id: 1,
                createdAt: "2024-06-27 17:32",
                elapsedTime: 130,
                policeCall: false,
                report: true
            },
            {
                timerId:2,
                id: 1,
                createdAt: "2024-05-20 11:43",
                elapsedTime: 240,
                policeCall: true,
                report: false
            }
        ];

        const { onSort, sortColumn } = this.props;
        return (
        <div>
            <Sidebar />
            <h3>Timer Information Table</h3>
            <Table data={data} onSort={onSort} sortColumn={sortColumn} columns={columns}/>
        </div>
        );
    }
}

export default TimerTable;
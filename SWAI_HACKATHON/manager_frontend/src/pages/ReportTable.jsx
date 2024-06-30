import React, { Component } from "react";
import Table from "../components/Table"
import Sidebar from "../components/Sidebar";

class ReportTable extends Component{
    render(){
        const columns=[
            {path:"reportId", name:"민원 ID"},
            {path:"timerId", name:"타이머 ID"},
            {path:"id", name:"유저 ID"},
            {path:"body", name:"민원 내용"}
        ];
        
        const data=[
            {
                reportId: 1,
                timerId:1,
                id: 1,
                body: "뒤에 누가 따라와요.."
            },
            {
                reportId: 1,
                timerId:2,
                id: 1,
                body: "술취한 사람들이 싸워요ㅜ"
            }
        ];

        const { onSort, sortColumn } = this.props;
        return (
        <div>
            <Sidebar />
            <h3>Report Information Table</h3>
            <Table data={data} onSort={onSort} sortColumn={sortColumn} columns={columns}/>
        </div>
        );
    }
}

export default ReportTable;
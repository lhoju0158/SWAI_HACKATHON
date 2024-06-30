import React, { Component } from "react";
import Table from "../components/Table";
import '../sb-admin-2.css';
import Sidebar from "../components/Sidebar";


class UserTable extends Component{
    render(){
        const columns=[
            {path:"id", name:"유저 ID"},
            {path:"username", name:"ID"},
            {path:"password", name:"비밀번호"},
            {path:"sex", name:"성별"},
            {path:"createdAt", name:"생성 시간"},
            {path:"updatedAt", name:"수정 시간"},
            {path:"cell", name:"전화번호"}
            
        ];
        
        const data=[
            {
                id:1,
                username: "공혁진",
                password:"1234",
                sex: "female",
                createdAt: "2024-06-27 17:32",
                updatedAt: "2024-07-31 09:55",
                cell: "010-0000-0000"
            },
            {
                id:2,
                username: "정동주",
                password:"0000",
                sex: "male",
                createdAt: "2024-03-13 08:13",
                updatedAt: "2024-05-27 10:17",
                cell: "010-1234-1234"
            },
            {
                id:3,
                username: "이희주",
                password:"486",
                sex: "female",
                createdAt: "2024-06-28 11:42",
                updatedAt: "2024-09-11 13:59",
                cell: "010-8000-0960"
            },
            {
                id:4,
                username: "백민아",
                password:"2000",
                sex: "female",
                createdAt: "2024-03-18 14:42",
                updatedAt: "2024-10-17 16:39",
                cell: "010-8030-0560"
            }
        ];

        const { onSort, sortColumn } = this.props;
        return (
            <div>
                <Sidebar />
                <h3 style={{position:"absolute" ,top: "20%", left:"48%"}}>User Information Table</h3>
                <Table data={data} onSort={onSort} sortColumn={sortColumn} columns={columns}/>
            </div>
        );
    }
}

export default UserTable;
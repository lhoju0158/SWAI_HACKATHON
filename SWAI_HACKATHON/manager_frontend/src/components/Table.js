import React from 'react';
import '../sb-admin-2.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = (props) => {
  const {columns, data, onSort, sortColumn} = props;

  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">

          <p class="mb-4">
           </p>

          <div style={{verticalAlign:"middle"}} class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                  <table className='table' class="table table-bordered" id="dataTable" width="90%" cellspacing="0">
                    <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
                    <TableBody data={data} columns={columns} />
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Table;

import React from 'react';
import '../sb-admin-2.css';

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    const value = item[column.path];
    if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No';
    }
    return value;
  };

  return (
    <tbody class="table table-bordered" id='dataTable'>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column) => (
            <td key={column.path}>{renderCell(row, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

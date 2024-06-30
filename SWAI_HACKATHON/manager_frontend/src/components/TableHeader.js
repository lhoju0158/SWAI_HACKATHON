import React from 'react';
import '../sb-admin-2.css';

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.path}>{column.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

import React, { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';

const Example = ({ tableData }) => {

  const columns = useMemo(
    () => [
      { accessorKey: 'firstname', header: 'First Name' },
      { accessorKey: 'lastname', header: 'Last Name' },
      { accessorKey: 'mobile', header: 'Mobile Number' },
      { accessorKey: 'age', header: 'Age' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'gender', header: 'Gender' },
      { accessorKey: 'state', header: 'State' },
      { accessorKey: 'edu', header: 'Education', Cell: ({ cell }) => cell.getValue().join(', ') },
      { accessorKey: 'terms', header: 'Accepted Terms', Cell: ({ cell }) => (cell.getValue() ? 'Yes' : 'No') },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data: tableData,
  });

  return <MantineReactTable table={table} />;
};

export default Example;

import React from 'react';
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import { Breadcrumbs, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';

import { testAtom } from './store/toolBar';

const columns: GridColDef[] = [
  { field: 'name', headerName: '이름', width: 200 },
  { field: 'updatedAt', headerName: '수정한 날짜', width: 130 },
  {
    field: 'numberOfStored',
    headerName: '저장된 개수',
    type: 'number',
    width: 90,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, name: 'Snow', updatedAt: 'Jon', numberOfStored: 35 },
  { id: 2, name: 'Lannister', updatedAt: 'Cersei', numberOfStored: 42 },
  { id: 3, name: 'Lannister', updatedAt: 'Jaime', numberOfStored: 45 },
  { id: 4, name: 'Stark', updatedAt: 'Arya', numberOfStored: 16 },
  { id: 5, name: 'Targaryen', updatedAt: 'Daenerys', numberOfStored: null },
  { id: 6, name: 'Melisandre', updatedAt: null, numberOfStored: 150 },
  { id: 7, name: 'Clifford', updatedAt: 'Ferrara', numberOfStored: 44 },
  { id: 8, name: 'Frances', updatedAt: 'Rossini', numberOfStored: 36 },
  { id: 9, name: 'Roxie', updatedAt: 'Harvey', numberOfStored: 65 },
];

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const FileOrSiteList = () => {
  const [checkMode] = useAtom(testAtom);
  console.log(checkMode);
  return (
    // check mode 상태를 만들어서 check mode일 때는 checkbox를 보여주고 아닐 때는 column 클릭 시 이동할 수 있도록 처리.
    <TableWrapper>
      {/* <Stack direction={'row'} alignItems="center">
        <FolderTwoToneIcon color="primary" fontSize="large" />
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <span>t1</span>
          <span>t1</span>
          <span>t1</span>
        </Breadcrumbs>
      </Stack> */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableColumnMenu
        onCellClick={(e) => console.log('bbbb')}
      />
    </TableWrapper>
  );
};

export { FileOrSiteList };

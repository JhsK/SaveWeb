import React from 'react';
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import { Breadcrumbs, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';

import { checkModeAtom } from './store/toolBar';

const columns: GridColDef[] = [
  {
    field: 'type',
    headerName: '유형',
    width: 50,
    sortable: false,
    renderCell: (params) => {
      return (
        <div>
          {params.value === 'folder' ? (
            <FolderTwoToneIcon />
          ) : (
            <InsertDriveFileTwoToneIcon />
          )}
        </div>
      );
    },
  },
  { field: 'name', headerName: '이름', width: 200, sortable: false },
  { field: 'updatedAt', headerName: '수정한 날짜', width: 130 },
  {
    field: 'numberOfStored',
    headerName: '저장된 개수',
    type: 'number',
    width: 120,
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
  {
    id: 1,
    type: 'folder',
    name: 'Snow',
    updatedAt: 'Jon',
    numberOfStored: 35,
  },
  {
    id: 2,
    type: 'file',
    name: 'Lannister',
    updatedAt: 'Cersei',
    numberOfStored: 42,
  },
  {
    id: 3,
    type: 'folder',
    name: 'Lannister',
    updatedAt: 'Jaime',
    numberOfStored: 45,
  },
  {
    id: 4,
    type: 'folder',
    name: 'Stark',
    updatedAt: 'Arya',
    numberOfStored: 16,
  },
  {
    id: 5,
    type: 'folder',
    name: 'Targaryen',
    updatedAt: 'Daenerys',
    numberOfStored: null,
  },
  {
    id: 6,
    type: 'folder',
    name: 'Melisandre',
    updatedAt: null,
    numberOfStored: 150,
  },
  {
    id: 7,
    type: 'folder',
    name: 'Clifford',
    updatedAt: 'Ferrara',
    numberOfStored: 44,
  },
  {
    id: 8,
    type: 'folder',
    name: 'Frances',
    updatedAt: 'Rossini',
    numberOfStored: 36,
  },
  {
    id: 9,
    type: 'folder',
    name: 'Roxie',
    updatedAt: 'Harvey',
    numberOfStored: 65,
  },
];

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const FileOrSiteList = () => {
  const [checkMode] = useAtom(checkModeAtom);

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
        checkboxSelection={checkMode}
        disableColumnMenu
        onCellClick={(e) => console.log('bbbb')}
      />
    </TableWrapper>
  );
};

export { FileOrSiteList };

import styled from '@emotion/styled';
import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { Layout } from '../Layout/Layout';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

// const MenuWrapper = styled.div`
//     display: flex;
//     align-items:
// `;

const UserSave = () => {
  return (
    <Layout>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems={'center'}
        sx={{ pt: 8, pb: 2 }}
      >
        <Typography variant="h5">사용자님의 저장소.</Typography>
        <div>
          <GridViewIcon />
          <ViewHeadlineIcon />
          <AddIcon />
          <RemoveIcon />
        </div>
      </Stack>
      <Divider />
    </Layout>
  );
};

export default UserSave;

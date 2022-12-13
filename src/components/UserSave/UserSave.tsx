import { Stack } from '@mui/material';
import React from 'react';
import { Layout } from '../Layout/Layout';

import { FileOrSiteList } from '../FileOrSiteList';
import { SaveToolBar } from './SaveToolBar';

const UserSave = () => {
  return (
    <Layout>
      <Stack
        spacing={5}
        sx={{
          height: 'calc(100vh - 64px)',
        }}
      >
        <SaveToolBar />
        <FileOrSiteList />
      </Stack>
    </Layout>
  );
};

export { UserSave };

import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Divider, IconButton, Stack, Typography } from '@mui/material';

const SaveToolBar = () => {
  return (
    <div>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems={'center'}
        sx={{ pt: 8, pb: 2 }}
      >
        <Typography variant="h5">사용자님의 저장소.</Typography>
        <div>
          <IconButton>
            <GridViewIcon />
          </IconButton>
          <IconButton>
            <ViewHeadlineIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <RemoveIcon />
          </IconButton>
        </div>
      </Stack>
      <Divider />
    </div>
  );
};

export { SaveToolBar };

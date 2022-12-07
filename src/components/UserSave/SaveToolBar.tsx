import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import { useAtom } from 'jotai';

import { testAtom } from '../store/toolBar';

const SaveToolBar = () => {
  const [checkMode, setCheckMode] = useAtom(testAtom);
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
          <IconButton onClick={() => setCheckMode()}>
            <CheckBoxOutlinedIcon />
          </IconButton>
        </div>
      </Stack>
      <Divider />
    </div>
  );
};

export { SaveToolBar };

import styled from '@emotion/styled';
import React from 'react';
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

interface TypographyProps extends MuiTypographyProps {
  pointer?: boolean;
}

const Typography = ({ pointer, children, ...props }: TypographyProps) => {
  return (
    <Wrapper pointer>
      <MuiTypography {...props}>{children}</MuiTypography>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ pointer: boolean }>`
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
`;

export { Typography };

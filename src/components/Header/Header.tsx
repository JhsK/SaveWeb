import React from 'react';
import styled from '@emotion/styled';

import { Typography } from '../Molecule';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderFlex>
        <Logo src="/logo/logo.png" alt="logo" />
        <Typography>로그인</Typography>
      </HeaderFlex>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 60px;
`;

const Logo = styled.img`
  width: 200px;
  height: 40px;
`;

export { Header };

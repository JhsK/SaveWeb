import React from 'react';
import styled from '@emotion/styled';

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

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderFlex>
        <Logo src="/logo/logo.png" alt="logo" />
        <div>로그인</div>
      </HeaderFlex>
    </HeaderWrapper>
  );
};

export { Header };

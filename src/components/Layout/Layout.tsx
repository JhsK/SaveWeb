import { Container } from '@mui/material';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <Container maxWidth={'lg'}>{children}</Container>;
};

export { Layout };

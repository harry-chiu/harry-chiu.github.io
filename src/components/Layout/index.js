import React from 'react';
import { Container, Section } from './styled';

const Layout = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

Layout.Section = Section;

export default Layout;

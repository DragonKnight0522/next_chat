"use client"

import React from 'react';
import styled from'styled-components';
import NavItem from './navItem';

const Div = styled.div`
	border-right: 1px solid #b1b1b1;
	height: calc(100vh - 5rem);
`;

const navBar = () => {
  return (
    <Div className="pt-32">
      <NavItem href="/">User Profile</NavItem>
      <NavItem href="/">Data Room</NavItem>
      <NavItem href="/" active={true}>Visitor Database</NavItem>
      <NavItem href="/">Last Visit</NavItem>
      <NavItem href="/">Bot Analytics</NavItem>
      <NavItem href="/">Page Settings</NavItem>
    </Div>
  );
}

export default navBar;

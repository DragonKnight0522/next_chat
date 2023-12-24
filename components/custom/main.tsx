"use client"

import React from 'react'
import styled from 'styled-components';

const MainArea = styled.div`
    padding: 0 2rem 6rem 2rem;
    overflow-y: auto;
    height: calc(100vh - 14rem);
`;

const Main = ({
    children,
} : {
    children: React.ReactNode;
}) => {
  return (
    <MainArea>
      {children}
    </MainArea>
  )
}

export default Main;

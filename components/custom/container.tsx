"use client"

import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: calc(100% - 14rem);
  display: inline-block;
`;

const container = ({
  children,
} : {
  children: React.ReactNode;
}) => {
  return (
    <Div>
      {children}
    </Div>
  );
}

export default container;

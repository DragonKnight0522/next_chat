'use client'

import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(to bottom, #f5b159, #e28813);
`;

const button = ({
  className,
  children,
  ...props
} : React.ComponentProps<'button'>) => {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
}

export default button;

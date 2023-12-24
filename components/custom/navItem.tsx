"use client"

import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

const Div = styled.a`
  display: flex;
  font-size: 1.2rem;
  
  &.active {
    border-right: 3px solid;
    border-image-slice: 1;
    border-image: linear-gradient(to bottom, #f5b159, #e28813) 1;
    font-size: 1.7rem;

    background: linear-gradient(to bottom, #f5b159, #e28813);
    background-clip: text;
    color: transparent;
  }
`;

const navItem = ({
  href,
  children,
  active,
} : {
  href: string,
  children: React.ReactNode,
  active?: boolean,
}) => {
  return (
    <Div className={active ? 'active mb-12' : 'mb-12'}>
      <Link href={href}>
        {children}
      </Link>
    </Div>
  );
}

export default navItem;

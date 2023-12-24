"use client"

import React from 'react';
import styled from 'styled-components';
import { IconSearch } from '../ui/icons';

const Box = styled.div`
  border: 1px solid #e28813;
`;

const searchBox = () => {
  return (
    <Box className="flex items-center w-96 rounded-full">
      <div className="ms-6 me-3" style={{color: "#e28813"}}>
        <IconSearch />
      </div>
      <input className="outline-none my-2 bg-transparent w-72" placeholder='Search' />
    </Box>
  );
}

export default searchBox;

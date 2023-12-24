"use client"

import React from 'react';
import styled from "styled-components";
import { IconEnvelope, IconPhone } from '../ui/icons';

const LogDateTitle = styled.span`
  color: #888888;
  font-size: 9px;
  margin-right: 1.5rem;
`;

const LogDate = styled.span`
  color: #888888;
  font-size: 10px;
`;

const databaseItem = () => {
  return (
    <div className="mb-4">
      <div className="flex">
        <div className="w-7/12 grid grid-cols-2">
          <div>
            <p className="text-xl">Angel Egotrip</p>
          </div>
          <div className="flex items-center">
            <div className="me-2">
              <IconEnvelope />
            </div>
            <p className="text-sm">Angel Egotrip@gmail.com</p>
          </div>
        </div>
        <div className="w-5/12 flex justify-between">
          <div className="flex items-center">
            <div className="me-2">
              <IconPhone />
            </div>
            <p className="text-sm">(586) 445-6381</p>
          </div>
          <div className="flex items-center justify-end" style={{color: "#e28813"}}>
            <p className="text-sm">See chat Log</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          <LogDateTitle>Last Visit</LogDateTitle>
          <LogDate>2.00 PM 09.10.2023</LogDate>
        </p>
      </div>
    </div>
  );
}

export default databaseItem;

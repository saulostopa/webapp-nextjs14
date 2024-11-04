// @ts-nocheck

'use client';

import React, { useState } from 'react';
import { IconChevronUp } from '@tabler/icons-react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className="flex items-center justify-between w-full px-4 py-4 text-lg text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <span>{title}</span>
        <IconChevronUp
          className={`${isActive ? 'transform rotate-180' : ''} w-5 h-5 text-s2pro-primary0`}
        />
      </div>
      {isActive && <div className="px-4 pt-4 pb-2">{content}</div>}
    </>
  );
};

export default Accordion;

/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
//import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/DotLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Spinner({ size, color }) {
  return (
    <ClipLoader
      css={override}
      size={size}
      color={color || 'orange'}
      loading="true"
    />
  );
}

export default Spinner;

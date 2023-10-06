import React from 'react'
import {styled} from 'styled-components';

const Wrap = styled.div`
    display: flex;
    width: 100%;
    padding: 24px;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid var(--basic-80, #DFE5EE);
    background: var(--basic-white, #FFF);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12) inset;
    margin-top: 46px;
    margin-bottom: 27px;
`;

const Text = styled.p`
    color: var(--text-100, #252A3C);
    text-align: center;
    font-family: SF Pro Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: 0.08px;
`;

function Index(props) {
  return (
      <>
        <Wrap>
              <Text>{props?.text}</Text>
        </Wrap>
      </>
  )
}

export default Index
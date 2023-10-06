import React from 'react'
import {styled} from 'styled-components';

const TextTab = styled.p`
    color: #6F32D2;
    font-family: SF Pro Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */;
    margin: 0px;
`;
const WrapTab = styled.div`
    width:95px;
    height: 44px;
    position: relative;
`;

const BorderBottom = styled.div`
    position:absolute;
    height: 2px;
    background:#6F32D2;
    stroke-width: 2px;
    stroke: #6F32D2;
    border-radius: 50%;
    width: inherit;
    bottom: 0px;
`;


function Index(props) {
  return (
      <>
          <WrapTab>
              <TextTab>{props?.children}</TextTab>
              {props?.isActive && <BorderBottom />}

          </WrapTab>

      </>
  )
}

export default Index
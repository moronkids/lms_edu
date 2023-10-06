import React from 'react'
import {styled} from 'styled-components';

const Title = styled.p`
    color: var(--text-100, #252A3C);
    font-family: SF Pro Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 100% */;
    margin: ${props => props?.margin || '0px;'}
    width:fit-content;
       &.responsive {
            @media (max-width: 980px) {
            font-size:26px;
        }
    }
`;

function Index(props) {
  return (
      <>
        <Title margin={props?.margin}>{props?.text}</Title>
      </>
  )
}

export default Index
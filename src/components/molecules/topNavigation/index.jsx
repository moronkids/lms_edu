import React from 'react'
import BtnBack from 'src/components/atom/button/back'
import { styled } from "styled-components"

const TextInfo = styled.h3`
    color: var(--text-100, #252A3C);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 133.333% */
`
const Wrap = styled.div`
    padding : 10px 0;
    width: fit-content;
    display:flex;
    justify-content:center;
    align-items:center;
    column-gap: 24px;
    padding: 0 42px;
`;


function Index() {
  return (
    <>
      <Wrap>
        <BtnBack />
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
          <path d="M1 0V40" stroke="#BCC0D0" />
        </svg>
        <TextInfo>Event</TextInfo>
      </Wrap>
    </>
  )
}

export default Index
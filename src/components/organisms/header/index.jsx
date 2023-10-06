import React from 'react'
import { styled } from "styled-components";
import TopNav from 'src/components/molecules/topNavigation'

const HeaderDiv = styled.div`
    display: flex;
    max-width: 1440px;
    height: 92px;
    justify-content: start;
    align-items: center;
    flex-shrink: 0;
    margin: 0 auto;
`
const WrapDiv = styled.div`
    width: 100vw;

    box-shadow: 0px 4px 34px 0px rgba(39, 26, 73, 0.05);
        @media (max-width: 560px) {
        width: 100%;
    }

`;

function Index() {
  return (
      <>
      <WrapDiv>
        <HeaderDiv>
            <TopNav />
        </HeaderDiv>
        </WrapDiv>
      </>
  )
}

export default Index
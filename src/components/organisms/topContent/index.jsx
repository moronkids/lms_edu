import React from 'react'
import Title from 'components/atom/title';
import { styled } from 'styled-components';
import BtnPreview from 'components/atom/button/rectangle';
import Tab from "components/atom/tab"
import EventSchedule from 'components/molecules/eventSchedule';

const SpanLastEdited = styled.span`
    color: var(--text-tertiary, #8189A2);
    font-family: SF Pro Display;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    padding-left: 32px;
    margin: 50px 0px 38px 0;

            @media (max-width: 980px) {
            padding:unset;
            margin:unset;
            align-items: self-start;
        }

`;

const WrapFlex = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content : ${props => props?.justify_content || 'none'};
    position: ${props => props?.position};
    &.responsive {
            @media (max-width: 980px) {
            flex-direction: column;
            align-items: self-start;
        }
    }
    &.responsive-title {
            @media (max-width: 980px) {
            flex-direction: column;
            align-items: self-start;
        }
    }
    &.btn-responsive {
            @media (max-width: 980px) {
            justify-content: end;
            width: 100%;
        }
    }
`;

const Line = styled.div`
    bottom: 0px;
    height: 2px;
    background: var(--basic-80, #DFE5EE);
    width: 100%;
    position: absolute;
    z-index: -1;
`;
function Index() {

  return (
      <>
          <WrapFlex justify_content="space-between" className='responsive'>
              <WrapFlex className='responsive-title' >
                  <Title text="Belajar dan praktek cinematic videography" margin="50px 0px 38px 0px;" />
                 <SpanLastEdited>Last edited 18 October 2021 | 13:23</SpanLastEdited>
              </WrapFlex>
              <WrapFlex className="btn-responsive">
                  <BtnPreview category="preview">Preview</BtnPreview>
              </WrapFlex>
          </WrapFlex>
          <WrapFlex position="relative">
              <Tab isActive={true}>Curicullum</Tab>
              {/* <Tab isActive={true}>Curicullum 1</Tab> */}
              <Line/>
          </WrapFlex>
          <WrapFlex>
              <EventSchedule text="Event Schedule: 24 Oktober 2021, 16:30" />
          </WrapFlex>
      </>
  )
}

export default Index
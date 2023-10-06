import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import {styled} from 'styled-components';
import { Hooks } from "components/provider";
import { useContext } from "react";


const LessonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  align-self: stretch;
  width:inherit;
  padding:0 24px;
  row-gap: 16px;
  padding-right: 0px;
`;

const LessonContent = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;

`;
const LessonContentParent = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
   column-gap:16px;
   max-height:48px;
   justify-content: space-between;
   background: white;
   width: 100%;
   @media (max-width: 980px) {
      flex-direction:column;
      align-items:start;
      max-height:unset;
   }
   @media (max-width: 670px) {
      flex-direction:row;
      align-items:center;
      max-height:unset;
   }
`;
const RightSide = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
   column-gap:16px;
   max-height:48px;
   justify-content: flex-end;
   @media (max-width: 980px) {
justify-content: space-between;
    width: 100%;
    padding-left: 5px;
   }
   @media (max-width: 670px) {
    display: none;
   }
`;
const LeftSide = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
   column-gap:16px;
   max-height:48px;
   justify-content: flex-start;
      @media (max-width: 670px) {
    justify-content: space-between;
    width:100%;
   }
`;

const LessonText = styled.p`
  color: var(--text-100, #252A3C);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.32px;
`
  ;

const WrapSvg = styled.div`
  border-radius: 8px;
  width: 48px;
height: 48px;
flex-shrink: 0;
  background: var(--basic-background, #F6F8FC);
      display: flex;
    justify-content: center;
    align-items: center;
`;

const RequiredText = styled.p`
  color: var(--primary-100, #7800EF);
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

const RightSideText = styled.p`
  color: var(--text-100, #252A3C);
  text-align: center;
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.08px;
`;

const ButtonResponsive = styled.div`
  display:none;
   @media (max-width: 670px) {
    display: flex;
   }
`;
const Lesson = props => {
  const {modal, setModal, setDataSession, dataSession, setType, setIdLesson, setIdSession} = useContext(Hooks)
  const { question, questionNum } = props;
  return (
    <Droppable droppableId={`droppable${question.id}`} type={`${questionNum}`}>
      {(provided, snapshot) => (
        <LessonWrap
          ref={provided.innerRef}
          // style={getAnswerListStyle(snapshot.isDraggingOver)}
        >
          {question.answers?.map((answer, index) => {
            return (
              <Draggable
                key={`${questionNum}${index}`}
                draggableId={`${questionNum}${index}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <LessonContentParent
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <LeftSide>
                      <LessonContent {...provided.dragHandleProps}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                        <ellipse cx="8.13361" cy="5" rx="1.91379" ry="2" fill="#BCC0D0" />
                        <ellipse cx="8.13361" cy="12" rx="1.91379" ry="2" fill="#BCC0D0" />
                        <ellipse cx="8.13361" cy="19" rx="1.91379" ry="2" fill="#BCC0D0" />
                        <ellipse cx="14.8319" cy="5" rx="1.91379" ry="2" fill="#BCC0D0" />
                        <ellipse cx="14.8319" cy="12" rx="1.91379" ry="2" fill="#BCC0D0" />
                        <ellipse cx="14.8319" cy="19" rx="1.91379" ry="2" fill="#BCC0D0" />
                      </svg>
                    </LessonContent>
                    <WrapSvg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect x="4" y="8" width="17.3333" height="16" rx="2.66667" stroke="#252A3C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.9997 10.6667L21.333 16L27.9997 21.3333V10.6667Z" stroke="#252A3C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </WrapSvg>
                    <LessonText>{answer}</LessonText>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="20" viewBox="0 0 2 20" fill="none">
                      <path d="M1 0V20" stroke="#DFE5EE"/>
                    </svg>
                    <RequiredText>
                      Required
                      </RequiredText>
                      <ButtonResponsive>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ cursor: 'pointer' }} onClick={
                        () => {
                          setModal(!modal);
                          setType('Update Lesson');
                          setIdLesson(index);
                          setIdSession(questionNum)
                        }
                      }>
                      <rect width="32" height="32" rx="8" fill="#F6F8FC"/>
                      <circle cx="16.0013" cy="10.6673" r="1.33333" fill="#252A3C"/>
                      <circle cx="16.0015" cy="16.0007" r="1.33333" fill="#252A3C"/>
                      <circle cx="16.0015" cy="21.334" r="1.33333" fill="#252A3C"/>
                    </svg>
                      </ButtonResponsive>
                    </LeftSide>
                    <RightSide>
                      <FontAwesomeIcon icon={faClock} />
                      <RightSideText>24 Oktober 2021, 16:30</RightSideText>
                      <FontAwesomeIcon icon={faCircle} style={{width: '7px', color: '#BCC0D0'}}/>
                      <RightSideText>06:30 Min</RightSideText>
                      <FontAwesomeIcon icon={faCircle} style={{ width: '7px', color: '#BCC0D0' }} />
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M10.1222 13.4361L10.1222 1.3951" stroke="#252A3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.0382 10.5084L10.1222 13.4364L7.20621 10.5084" stroke="#252A3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.755 6.12801H15.688C17.723 6.12801 19.372 7.77701 19.372 9.81301V14.697C19.372 16.727 17.727 18.372 15.697 18.372L4.55701 18.372C2.52201 18.372 0.872009 16.722 0.872009 14.687V9.80201C0.872009 7.77301 2.51801 6.12801 4.54701 6.12801H5.48901" stroke="#252A3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <RightSideText>Downloadable</RightSideText>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ cursor: 'pointer' }} onClick={
                        () => {
                          setModal(!modal);
                          setType('Update Lesson');
                          setIdLesson(index);
                          setIdSession(questionNum)
                        }
                      }>
                      <rect width="32" height="32" rx="8" fill="#F6F8FC"/>
                      <circle cx="16.0013" cy="10.6673" r="1.33333" fill="#252A3C"/>
                      <circle cx="16.0015" cy="16.0007" r="1.33333" fill="#252A3C"/>
                      <circle cx="16.0015" cy="21.334" r="1.33333" fill="#252A3C"/>
                    </svg>
                    </RightSide>
                  </LessonContentParent>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </LessonWrap>
      )}
    </Droppable>
  );
};

export default Lesson;

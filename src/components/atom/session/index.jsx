import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Reorder} from "components/atom/utils.js";
import Answers from "components/atom/lesson";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import BtnAddLesson from "src/components/atom/button/rectangle";
import BtnMenu from "components/atom/session/menuBtn";
import { useContext } from "react";
import { Hooks } from "../../provider";

const SessionWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1444px;
  row-gap: 20px;
`;

const SessionContent = styled.div`
  border-radius: 8px;
  border: 1px solid var(--basic-80, #DFE5EE);
  background: var(--basic-white, #FFF);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12) inset;
  display: flex;
  padding: 16px 24px 16px 2px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
  width: inherit;
`;

const SessionTitle = styled.span`
  color: var(--text-100, #252A3C);
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.48px;
`;

const WrapSessionLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
`;

const AddLesson = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0px 24px;
  height: 33px;
  cursor: pointer;
`;

const TextLesson = styled.div`
  color: var(--text-100, #252A3C);
  text-align: center;
  font-family: SF Pro Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.08px;
`;

function Session() {
  const { dataSession, setDataSession, setIdSession, modal, setModal, setType, type } = useContext(Hooks)
  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.type === "QUESTIONS") {
      const updatedQuestions = Reorder(
        dataSession,
        result.source.index,
        result.destination.index
      );

      setDataSession(updatedQuestions);
    } else {
      const answers = Reorder(
        dataSession[parseInt(result.type, 10)].answers,
        result.source.index,
        result.destination.index
      );

      const updatedQuestions = [...dataSession];
      updatedQuestions[result.type].answers = answers;

      setDataSession(updatedQuestions);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="QUESTIONS">
        {(provided, snapshot) => (
          <SessionWrap ref={provided.innerRef}>
            {dataSession.map((question, index) => (
              <Draggable
                key={question.id}
                draggableId={question.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <>
                    <SessionContent ref={provided.innerRef} {...provided.draggableProps}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: "space-between",
                          alignItems: 'center',
                          columnGap: '8px',
                          width: '100%',
                        }}
                      >
                        <WrapSessionLeft>
                          <span {...provided.dragHandleProps} style={{ display: 'flex', alignItems: 'center' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none" style={{ cursor: 'pointer' }} >
                              <ellipse cx="8.13361" cy="5" rx="1.91379" ry="2" fill="#BCC0D0" />
                              <ellipse cx="8.13361" cy="12" rx="1.91379" ry="2" fill="#BCC0D0" />
                              <ellipse cx="8.13361" cy="19" rx="1.91379" ry="2" fill="#BCC0D0" />
                              <ellipse cx="14.8319" cy="5" rx="1.91379" ry="2" fill="#BCC0D0" />
                              <ellipse cx="14.8319" cy="12" rx="1.91379" ry="2" fill="#BCC0D0" />
                              <ellipse cx="14.8319" cy="19" rx="1.91379" ry="2" fill="#BCC0D0" />
                            </svg>
                          </span>
                          <SessionTitle>
                            {question.content}
                          </SessionTitle>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" style={{ cursor: 'pointer' }} onClick={() => {
                            setModal(!modal);
                            setIdSession(index);
                            setType('Update Session')
                          }}>
                            <path d="M10.4217 16.0358H16.4655" stroke="#BCC0D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.61552 2.16233C10.2619 1.38982 11.4238 1.27655 12.2124 1.90978C12.256 1.94413 13.6567 3.03232 13.6567 3.03232C14.523 3.55599 14.7922 4.66925 14.2567 5.51882C14.2282 5.56432 6.3088 15.4704 6.3088 15.4704C6.04533 15.7991 5.64538 15.9931 5.21794 15.9978L2.18512 16.0358L1.50179 13.1436C1.40607 12.7369 1.50179 12.3098 1.76527 11.9811L9.61552 2.16233Z" stroke="#BCC0D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.14954 4.00074L12.6931 7.49001" stroke="#BCC0D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </WrapSessionLeft>
                        <BtnMenu onClick={() => setIdSession(index)} id={index} />
                      </div>
                      <Answers questionNum={index} question={question}  />
                      <AddLesson onClick={() => {
                        setIdSession(index);
                      }}>
                        <BtnAddLesson category="add-no-text"></BtnAddLesson>
                        <TextLesson>Add Lesson Material</TextLesson>
                      </AddLesson>
                    </SessionContent>
                  </>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </SessionWrap>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Session;

import Header from 'src/components/organisms/header';
import TopContent from 'src/components/organisms/topContent';
import MainContent from 'src/components/organisms/mainContent';
import { styled } from 'styled-components';
import BtnAddSession from 'components/atom/button/rectangle'
import PopUp from 'components/molecules/popUp'
import { useRef, useState } from 'react';
import { Hooks } from "components/provider";
import { useContext } from 'react';
import FormSession from 'components/molecules/form/session'
import FormLesson from 'components/molecules/form/lesson'
import ConfirmationDelete from 'components/molecules/popUp/ConfirmationDelete'
import { useMemo } from 'react';

const Container = styled.div`
  padding: 0 40px;
  max-width: 1444px;
  margin: 0 auto;
  min-height: 100vh;
`;
const WrapBtn = styled.div`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  padding:27px 0px;

`;

function Index() {

  const {modal,type, setType } = useContext(Hooks)

  const renderMemo = useMemo(() => {
    switch (type) {
      case 'Create Session':
      case 'Update Session':
        return (
          <>
            <FormSession />
          </>
        )
        break;
      case 'Create Lesson':
      case 'Update Lesson':
        return (
          <>
            <FormLesson />
          </>
        )
        break;
      case 'Delete Lesson':
      case 'Delete Session':
        return (
          <>
            <ConfirmationDelete type={type === 'Delete Session' ? 'Session' : 'Lesson'} />
          </>
        )
        break;

      default:
        return (
          <></>
        )
        break;
    }
  }, [type, modal])

  const renderPopUp = useMemo(() => {
    return (
      <>
       <PopUp>
        {renderMemo}
      </PopUp>
      </>
     )
  }, [type, modal])
  console.log(type ,"<dbg")
  return (
    <>
      <Header />
      <Container>
        <TopContent />
        <MainContent />
        <WrapBtn>
          <BtnAddSession category="add">Add Session</BtnAddSession>
        </WrapBtn>
      </Container>
      {renderPopUp}
    </>
  )
}

export default Index
import React, { useContext } from 'react'
import {styled} from 'styled-components'
import Btn from 'components/atom/button/rectangle'
import { Hooks } from '../../provider';
import { toast } from 'react-toastify';

const Title = styled.h2`
  text-align: center;
`;

const Wrap = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction:column;
  height: inherit;
  &.flex-row {
     flex-direction:row;
     height: unset;
  }
`;


function ConfirmationDelete(props) {
  const { type, dataSession, idSession, idLesson, setDataSession } = useContext(Hooks)
  const deleteLesson = () => {
    if (type === 'Delete Lesson') {
      const datas = [...dataSession]
    datas[idSession]?.answers.splice(idLesson, 1)
      setDataSession(datas);
           toast.success('Successfully delete Lesson', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
    }
    else {
      const datas = [...dataSession]
      datas.splice(idSession, 1)
      setDataSession(datas);
             toast.success('Successfully delete Session', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
    }

  }
  return (
      <>
      <Wrap>
        <Title>Are you sure delete this {props?.type}?</Title>
      <Wrap className='flex-row'>
          <Btn type_={type} category={'delete-func'} deleteLesson={() => deleteLesson()}  />
        <Btn type_={type} category={'cancel'} type="submit" >Cancel</Btn>
      </Wrap>
      </Wrap>
      </>
  )
}

export default ConfirmationDelete
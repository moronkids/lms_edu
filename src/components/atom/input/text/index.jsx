import React from 'react'
import {styled} from 'styled-components'

const InputText = styled.input`
    min-height: 30px;
    border-radius: 5px;
    border: 1px solid #747474;
    padding: 0 10px;
    font-family: SF Pro Display;
`;

const LabelText = styled.label`
  font-family: SF Pro Display;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

function Input(props) {
  return (
    <>
      <Wrap>
        <LabelText>{props?.label}</LabelText>
        <InputText type="text" name={props?.name} id="" placeholder={props?.placeholder} {...props?.register(props?.name, {required:true})} defaultValue={props?.defaultValues} />
        </Wrap>
      </>
  )
}

export default Input
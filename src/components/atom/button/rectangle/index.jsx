import React from 'react'
import { styled } from "styled-components";
import View from 'assets/img/view_icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Hooks} from 'components/provider'
import { useContext } from 'react';
const PreviewBtn = styled.div`
    display: inline-flex;
    padding: 10px 16px;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid #6F32D2;
    color: #6F32D2;
    text-align: right;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    display: flex;
    cursor: pointer;
`;

const AddBtn = styled.div`
    display: inline-flex;
    padding: 12px 23px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--primary-100, #7800EF);
    color: white;
    column-gap: 16px;
    cursor: pointer;
    &.small {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5.739px;
        background: var(--primary-100, #7800EF);
        width:33px;
        height: 33px;
        padding:0px;
        color: white;
    }
`;
const DeleteButton = styled.div`
    display: inline-flex;
    padding: 12px 23px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #ff7575;
    color: white;
    column-gap: 16px;
    cursor: pointer;
    font-size: 14px;
    &.small {
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5.739px;
        background: #ff7575;
        width:33px;
        height: 33px;
        padding:0px;
        color: white;
    }
`;

function Index(props) {
    const {modal, setModal, setType} = useContext(Hooks)
    let btnStyling = ''
    const Render_ = () => {
        switch (props.category) {
            case 'add':
                return (
                    <>
                        <AddBtn onClick={() => {
                            setModal(true);
                            setType(props?.type_ || 'Create Session')
                        }}><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>{props.children}</AddBtn>
                    </>
                )
                break;
            case 'add-no-text':
                return (
                    <>
                        <AddBtn className="small" onClick={() => { setModal(true);         setType(props?.type_ ||'Create Lesson')}}>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                            {props.children}</AddBtn>
                    </>
                )
                break;
            case 'preview':
                return (
                    <>
                        <PreviewBtn ><span>
                            <img src={View} alt="" srcset="" style={{
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: "center"
                            }} />
                        </span>{props.children}
                        </PreviewBtn></>
                )
                break;
            case 'delete':
                return (
                    <>
                        <DeleteButton onClick={() => { setModal(true);         setType(props?.type_ ||'Delete Lesson')}}>
                            <FontAwesomeIcon icon={faTrash} />
                            Delete
                        </DeleteButton>
                    </>
                )
                break;
            case 'delete-func':
                return (
                    <>
                        <DeleteButton onClick={() => {
                            props?.deleteLesson();
                            setModal(false)
                        }}>
                            <FontAwesomeIcon icon={faTrash} />
                            Yes
                        </DeleteButton>
                    </>
                )
                break;
            default:
                return (
                    <>
                        <AddBtn onClick={() => {
                            setModal(false);
                        }}>{props.children}</AddBtn>
                    </>
                )
                break;
        }
    }
    return (
        <>
            {Render_()}
        </>
    )
}

export default Index
import React, { useContext } from 'react'
import InputText from 'components/atom/input/text'
import Btn from 'components/atom/button/rectangle'
import { styled } from 'styled-components'
import { Hooks } from '../../../provider'
import { useForm } from "react-hook-form";
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TitleModal = styled.h2`
    font-family: SF Pro Display;
    padding:0px;
    margin:0px;
    margin-bottom: 20px;
`

const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SpanError = styled.span`
    font-size: 12px;
    font-style: italic;
    color: red;
`;
function Index() {
    const { type, dataSession, setDataSession, setModal, idSession, setType } = useContext(Hooks);
    const [localType, setLocalType] = useState(type)
    const {
        handleSubmit,
        register,
        watch,
        setValue,
        getValues,
        formState: { errors }
    } = useForm({ mode: "all" });
    const onSubmit = (data) => {
        console.log(localType, "<<tp")

        if (localType === 'Update Session') {
            console.log(data.session_name, "<<ssx")
            try {
                const data_ = [...dataSession]
                data_[idSession].content = data.session_name
                console.log(data_, "<<after")
                setDataSession(data_)
                setModal(false)
                toast.success('Successfully update Session', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } catch (error) {
                alert("error")
                console.log(error)
                setModal(true);
                toast.error('Failed update Session', {
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
        else {
            try {
                const data_ = [...dataSession, {
                    ...{
                        id: `session_name_${data.session_name}`+ new Date(),
                        content: data.session_name,
                        answers: []
                    }
                }
                ]
                setDataSession(data_)
                setModal(false)
                toast.success('Successfully create Session', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } catch (error) {
                setModal(true)
                  toast.error('Failed create Session', {
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

    }
    return (
        <>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TitleModal>{type}</TitleModal>
                    <InputText name="session_name" label={'Session Name'} defaultValues={type === 'Update Session' ? dataSession?.[idSession].content : null} placeholder={"Input session name"} register={register} />
                    <SpanError>
                        {errors.session_name && <span>This field is required</span>}
                    </SpanError>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {type === 'Update Session' && <><Btn type_={'Delete Session'} category={'delete'} /></>}
                    <div>
                        <label htmlFor="test">
                            <Btn type_={type} category={'add'} type="submit" onClick={(e) => {
                                e.preventDefault();
                                handleSubmit(onSubmit);
                                setLocalType(type)
                            }}>
                                Submit</Btn>
                        </label>
                        <button id="test" type="submit" value="" style={{ display: "none" }} />
                    </div>
                </div>
            </Form>
        </>
    )
}

export default Index
import React, { useContext } from 'react'
import InputText from 'components/atom/input/text'
import Btn from 'components/atom/button/rectangle'
import { styled } from 'styled-components'
import { Hooks } from '../../../provider'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'

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
    const { type, dataSession, setDataSession, setModal, idSession, setType, idLesson } = useContext(Hooks);
    const {
        handleSubmit,
        register,
        watch,
        setValue,
        getValues,
        formState: { errors }
    } = useForm({ mode: "all" });
    const onSubmit = (data) => {
        if (type === 'Update Lesson') {
            try {
                const data_ = [...dataSession]
                data_[idSession].answers[idLesson] = data.lesson_name
                console.log(data_, "<<after")
                setDataSession(data_)
                setModal(false)
                toast.success('Successfully update Lesson', {
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
                setModal(true)
                toast.error('Failed update Lesson', {
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
                const data_ = [...dataSession]
                data_[idSession].answers.push(
                    data.lesson_name
                )
                console.log(data_, "<<after")
                setDataSession(data_)
                setModal(false)
                toast.success('Successfully create Lesson', {
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
                console.log(error, "<<after-2")
                setModal(true);
                toast.error('Failed create Lesson', {
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
    console.log("<<type", dataSession?.[idSession]?.answers, idLesson)
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TitleModal>{type}</TitleModal>
                    <InputText name="lesson_name" label={'Lesson Name'} placeholder={"Input lesson name"} register={register} defaultValues={type === 'Update Lesson' ? dataSession?.[idSession]?.answers[idLesson] : null} />
                    <SpanError>
                        {errors.lesson_name && <span>This field is required</span>}
                    </SpanError>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {type === 'Update Lesson' && <><Btn type_={'Delete Lesson'} category={'delete'} onClick={() => {

                    }} /></>}
                    <div>
                        <label htmlFor="test">
                            <Btn type_={type} category={'add'} type="submit" onClick={(e) => {
                                e.preventDefault();
                                handleSubmit(onSubmit);
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
import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { Hooks } from "components/provider";
import { useMemo } from 'react';

const ContainerPopUp = styled.div`
    width: 600px;
    height: 450px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
    z-index: 1;
        padding: 20px;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const ContainerBg = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: black;
    opacity: 0.6;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;



const useOutsideClick = (callback) => {
    const ref = React.useRef();
    React.useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [ref]);

    return ref;
};

function Index(props) {
    const { type, modal, setModal } = useContext(Hooks);
    const handleClickOutside = () => {
        setModal(false)
    };
    const ref = useOutsideClick(handleClickOutside);

    const renderMemo = useMemo(() => {
        return (
            <>
            {modal && (
                <>
                        <Container>
                        <ContainerPopUp ref={ref}>{props?.children}</ContainerPopUp>
                        <ContainerBg></ContainerBg>
                    </Container>
                </>
            )}
            </>
        )
    }, [modal, type])
    return (
        <>
            {renderMemo}
        </>
    )
}

export default Index
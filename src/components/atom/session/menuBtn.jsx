import React from 'react'
import {Hooks} from 'components/provider'
import { useContext } from 'react'

function MenuBtn(props) {
    const {modal, setModal, setIdSession, setType} = useContext(Hooks)
    return (
        <>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                          transform: 'rotate(90deg)',
                          cursor: 'pointer'
            }}

                onClick={() => {
                    setModal(!modal);
                    setIdSession(props?.id);
                    setType('Update Session')
            }}>
                          <rect width="32" height="32" rx="8" fill="#F6F8FC" />
                          <circle cx="16.0013" cy="10.6673" r="1.33333" fill="#252A3C" />
                          <circle cx="16.0015" cy="16.0007" r="1.33333" fill="#252A3C" />
                          <circle cx="16.0015" cy="21.334" r="1.33333" fill="#252A3C" />
                        </svg>
        </>
    )
}

export default MenuBtn
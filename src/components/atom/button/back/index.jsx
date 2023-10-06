import React from 'react'
import btn_back from 'assets/img/btn_back.png'

function Index(props) {
  return (
      <>
          <img src={btn_back} alt="" height={props?.h || '24px'} width={props?.w || '24px'} style={{            cursor: 'pointer'}} />
      </>
  )
}

export default Index
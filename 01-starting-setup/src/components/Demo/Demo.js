import React from 'react'
import MyParagraph from './MyParagraph'

function Demo({show}) {
  return (
    <MyParagraph>{show ? 'This is new!!' : ''}</MyParagraph>
  )
}

export default React.memo(Demo)

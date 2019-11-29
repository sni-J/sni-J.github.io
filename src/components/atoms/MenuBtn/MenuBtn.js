import React from 'react'
import MenuBtnWrapper from './MenuBtn.styled'

const menu_btn = ({ open, setOpen }) => {
  return (
    <MenuBtnWrapper open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </MenuBtnWrapper>
  )
}

export default menu_btn

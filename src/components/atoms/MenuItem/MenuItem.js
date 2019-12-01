import React from 'react'
import MenuItemWrapper from './MenuItem.styled'

const MenuItem = ({ mobile, active, scrollTo, content, idx, setOpen }) => {
  return (
    <MenuItemWrapper
      mobile={mobile}
      active={active}
      onClick={() => {
        scrollTo(idx)
        if (mobile) {
          setOpen(false)
        }
      }}
    >
      <span>{content}</span>
    </MenuItemWrapper>
  )
}

export default MenuItem

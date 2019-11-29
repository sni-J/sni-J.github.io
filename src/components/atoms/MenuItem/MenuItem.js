import React from 'react'
import MenuItemWrapper from './MenuItem.styled'

const MenuItem = ({ mobile, activeItem, setActiveItem, content }) => {
  return (
    <MenuItemWrapper
      mobile={mobile}
      active={activeItem === content}
      onClick={() => setActiveItem(content)}
    >
      <span>{content}</span>
    </MenuItemWrapper>
  )
}

export default MenuItem

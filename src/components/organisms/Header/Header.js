import React, { useState } from 'react'
import HeaderWrapper from './Header.styled'

import MenuItem from '../../atoms/MenuItem'
import MenuBtn from '../../atoms/MenuBtn'

const menuItems = ['Home', 'Development']

const Header = ({ mobile }) => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  return (
    <HeaderWrapper mobile={mobile} open={open}>
      <div>
        {menuItems.map(item => (
          <MenuItem
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            content={item}
            mobile={mobile}
            key={item}
          />
        ))}
      </div>
      {mobile ? <MenuBtn open={open} setOpen={setOpen} /> : null}
    </HeaderWrapper>
  )
}

export default Header

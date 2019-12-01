import React, { useState } from 'react'
import HeaderWrapper from './Header.styled'

import MenuItem from '../../atoms/MenuItem'
import MenuBtn from '../../atoms/MenuBtn'

const Header = ({ activeItem, scrollTo, menuItems, mobile }) => {
  const [open, setOpen] = useState(false)

  return (
    <HeaderWrapper mobile={mobile} open={open}>
      <div>
        {menuItems.map((content, idx) => (
          <MenuItem
            active={menuItems[activeItem] === content}
            {...{ scrollTo, idx, content, mobile, setOpen }}
            key={idx}
          />
        ))}
      </div>
      {mobile ? <MenuBtn open={open} setOpen={setOpen} /> : null}
    </HeaderWrapper>
  )
}

export default Header

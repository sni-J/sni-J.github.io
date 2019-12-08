import React, { forwardRef } from 'react'

import ScrollableWrapper from './Scrollable.styled'

const Scrollable = forwardRef(({ children }, ref) => {
  return <ScrollableWrapper ref={ref}>{children}</ScrollableWrapper>
})

export default Scrollable

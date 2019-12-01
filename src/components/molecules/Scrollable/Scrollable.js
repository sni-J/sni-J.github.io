import React, { forwardRef } from 'react'

import ScrollableWrapper from './Scrollable.styled'

const Scrollable = forwardRef(({ mobile, open, children }, ref) => {
  return (
    <ScrollableWrapper open={open} ref={ref}>
      {children}
    </ScrollableWrapper>
  )
})

export default Scrollable

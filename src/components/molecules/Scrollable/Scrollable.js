import React, { forwardRef, useState, useEffect } from 'react'

import ScrollableWrapper from './Scrollable.styled'

const Scrollable = forwardRef(({ open, children }, ref) => {
  const [scrolling, setScrolling] = useState(0)

  const scroll = () => {
    const dest = Math.min(
      1,
      Math.max(ref.current.scrollTop + ref.current.clientHeight * scrolling, 0)
    )

    if (ref.current.scrollTop < dest) {
      setScrolling(0)
    }
  }

  const wheel = e => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      setScrolling(Math.sign(e.deltaY))
    }
  }

  useEffect(() => {
    if (ref.current) {
      if (typeof ref.current.scrollTo === 'function') {
        ref.current.scrollTo({
          top: ref.current.scrollTop + ref.current.clientHeight * scrolling,
          behavior: 'smooth',
        })
      } else {
        ref.current.scrollTop += ref.current.clientHeight * scrolling
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolling])

  return (
    <ScrollableWrapper open={open} ref={ref} onScroll={scroll} onWheel={wheel}>
      {children}
    </ScrollableWrapper>
  )
})

export default Scrollable

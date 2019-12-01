import React, { forwardRef } from 'react'

import TabContentWrapper from './TabContent.styled'

import HomeContent from './HomeContent'
import DevContent from './DevContent'

const TabContent = forwardRef(({ mobile, open }, ref) => {
  return (
    <TabContentWrapper open={open} ref={ref}>
      <HomeContent mobile={mobile} />
      <DevContent mobile={mobile} />
    </TabContentWrapper>
  )
})

export default TabContent

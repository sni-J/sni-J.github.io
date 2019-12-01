import React from 'react'

import TabContentWrapper from './TabContent.styled'

import HomeContent from './HomeContent'
import DevContent from './DevContent'

const TabContent = ({ mobile }) => {
  return (
    <TabContentWrapper>
      <HomeContent mobile={mobile} />
      <DevContent mobile={mobile} />
    </TabContentWrapper>
  )
}

export default TabContent

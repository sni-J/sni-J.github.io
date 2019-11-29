import React from 'react'

import HomeContentWrapper from './HomeContent.styled'

import logo from '../../../static/logo/sniperJ.svg'

const HomeContent = () => {
  return (
    <HomeContentWrapper>
      <img src={logo} alt="sniperJ" />
      <span>
        <a href="http://github.com/sni-J">github@sni-J</a>|
        <a href="http://instagram.com/sniperj_got_ya_back">
          instagram@sniperJ_got_ya_back
        </a>
      </span>
    </HomeContentWrapper>
  )
}

export default HomeContent

import React from 'react'

import HomeContentWrapper from './HomeContent.styled'

import logo from 'static/logo/sniperJ_logo.svg'

const HomeContent = ({ mobile }) => {
  return (
    <HomeContentWrapper mobile={mobile}>
      <img src={logo} alt="sniperJ" />
      <div>
        <span>Seoul, South Korea</span>
        <span>
          GitHub<a href="http://github.com/sni-J">sni-J</a>
        </span>
        <span>
          Instagram
          <a href="http://instagram.com/sniperj_got_ya_back">
            sniperJ_got_ya_back
          </a>
        </span>
        <span>
          Email
          <a href="mailto:wjl0316@kaist.ac.kr">wjl0316@kaist.ac.kr</a>
        </span>
      </div>
    </HomeContentWrapper>
  )
}

export default HomeContent

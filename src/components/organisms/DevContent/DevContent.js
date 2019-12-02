import React from 'react'

import DevContentWrapper from './DevContent.styled'

import Cards from '../../molecules/Cards'

const cards = [
  {
    name: 'sni-j.github.io',
    description: 'Portfolio based on github page',
    links: [
      { name: 'Link', link: 'http://sni-J.github.io' },
      { name: 'GitHub', link: 'http://github.com/sni-J/sni-J.github.io' },
    ],
  },
  {
    name: 'sni-j.github.io',
    description: 'Portfolio based on github page',
    links: [
      { name: 'Link', link: 'http://sni-J.github.io' },
      { name: 'GitHub', link: 'http://github.com/sni-J/sni-J.github.io' },
    ],
  },
  {
    name: 'sni-j.github.io',
    description: 'Portfolio based on github page',
    links: [
      { name: 'Link', link: 'http://sni-J.github.io' },
      { name: 'GitHub', link: 'http://github.com/sni-J/sni-J.github.io' },
    ],
  },
  {
    name: 'sni-j.github.io',
    description: 'Portfolio based on github page',
    links: [
      { name: 'Link', link: 'http://sni-J.github.io' },
      { name: 'GitHub', link: 'http://github.com/sni-J/sni-J.github.io' },
    ],
  },
  {
    name: 'sni-j.github.io',
    description: 'Portfolio based on github page',
    links: [
      { name: 'Link', link: 'http://sni-J.github.io' },
      { name: 'GitHub', link: 'http://github.com/sni-J/sni-J.github.io' },
    ],
  },
]

const DevelopmentContent = ({ mobile }) => {
  return (
    <DevContentWrapper mobile={mobile}>
      <Cards {...{ cards, mobile }} />
    </DevContentWrapper>
  )
}

export default DevelopmentContent

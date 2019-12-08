import React from 'react'

import DevContentWrapper from './DevContent.styled'

import Cards from 'components/molecules/Cards'

const cards = [
  {
    name: 'sni-j.github.io',
    meta: 'Portfolio',
    description: 'CRA / GitHub Page 기반 포트폴리오',
    date: 'WIP | 2019.08~',
    logo: 'sniperJ.svg',
    bg: 'sni-j.github.io.png',
    links: [
      { name: 'Link', link: 'http://sni-J.github.io' },
      { name: 'GitHub', link: 'http://github.com/sni-J/sni-J.github.io' },
    ],
  },
  {
    name: 'KSAReD Renewal',
    meta: 'Toy Project',
    description: 'KSAReD 리뉴얼 프로젝트',
    date: 'WIP | 2019.06~',
    links: [],
  },
  {
    name: '미궁',
    meta: '2019 KAIST 신나는 대학 생활 프로그램 외주 [Team]',
    description: '미궁 게임 웹페이지',
    date: '2019.08~2019.11',
    bg: 'maze.png',
    links: [
      { name: 'GitHub(Front)', link: 'http://github.com/sni-J/maze_front' },
      { name: 'GitHub(Back)', link: 'http://github.com/sni-J/maze_back' },
    ],
  },
  {
    name: 'RunDry',
    meta: 'SPARCS 신입생 프로젝트',
    description: '기숙사 세탁기/건조기 사용상태 공유 웹페이지',
    date: '2019.05~2019.06',
    logo: 'RunDry.svg',
    bg: 'RunDry.png',
    links: [{ name: 'GitHub', link: 'http://github.com/sni-J/RunDry' }],
  },
  {
    name: 'KSAReD',
    meta: 'KSA 졸업연구',
    description: '한국과학영재학교 학생 연구활동 데이터베이스',
    date: '2018.03~2018.12',
    logo: 'KSAReD.png',
    bg: 'KSAReD.png',
    links: [
      { name: 'Link', link: 'http://ksared.herokuapp.com' },
      { name: 'GitHub', link: 'http://github.com/sni-J/ksared' },
    ],
  },
  {
    name: 'EOS 블로그',
    meta: 'EOS 프로젝트',
    description: 'EOS Team Blog with Hexo / GitHub Page',
    date: '2018.05~2018.06',
    logo: 'EOS.png',
    bg: 'eosofksa.github.io.png',
    links: [
      { name: 'Link', link: 'http:/eosofksa.github.io' },
      { name: 'GitHub', link: 'http://github.com/eosofksa/eosofksa.github.io' },
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

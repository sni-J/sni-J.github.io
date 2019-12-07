import React, { useState, useEffect, createRef } from 'react'

import AppWrapper from './App.styled'

import Scrollable from './components/molecules/Scrollable'
import Header from './components/organisms/Header'
import HomeContent from './components/organisms/HomeContent'
import DevContent from './components/organisms/DevContent'

const App = () => {
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  const appRef = createRef()

  const menuItems = ['contact', 'development']

  const resize = () => {
    setMobile(window.innerWidth < 768 && window.innerHeight > window.innerWidth)
  }
  const scroll = () => {
    setActiveItem(
      parseInt(appRef.current.scrollTop / appRef.current.clientHeight + 0.5)
    )
  }

  const scrollTo = idx => {
    if (appRef) {
      if (typeof appRef.current.scrollTo === 'function') {
        appRef.current.scrollTo({
          top: appRef.current.clientHeight * idx,
          behavior: 'smooth',
        })
      } else {
        appRef.current.scrollTop = appRef.current.clientHeight * idx
      }
    }
  }

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
  }, [])

  return (
    <AppWrapper onScroll={scroll}>
      <Header {...{ activeItem, scrollTo, menuItems, mobile, open, setOpen }} />
      <Scrollable {...{ mobile, open }} ref={appRef}>
        <HomeContent mobile={mobile} />
        <DevContent mobile={mobile} />
      </Scrollable>
    </AppWrapper>
  )
}

export default App

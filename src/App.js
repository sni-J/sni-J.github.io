import React, { useState, useEffect, createRef } from 'react'

import AppWrapper from './App.styled'

import Header from './components/organisms/Header'
import TabContent from './components/organisms/TabContent'

const App = () => {
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  const appRef = createRef()

  const menuItems = ['home', 'development']

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
      appRef.current.scrollTo({
        top: appRef.current.clientHeight * idx,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
  })

  return (
    <AppWrapper onScroll={scroll}>
      <Header {...{ activeItem, scrollTo, menuItems, mobile, open, setOpen }} />
      <TabContent {...{ mobile, open }} ref={appRef} />
    </AppWrapper>
  )
}

export default App

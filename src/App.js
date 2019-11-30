import React, { useState, useEffect } from 'react'

import Header from './components/organisms/Header'
import HomeContent from './components/organisms/HomeContent'

const App = () => {
  const [mobile, setMobile] = useState(false)
  const resize = () => {
    setMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
  })

  return (
    <div>
      <Header mobile={mobile} />
      <HomeContent mobile={mobile} />
    </div>
  )
}

export default App

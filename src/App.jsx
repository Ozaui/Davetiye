import { useState, useEffect } from 'react'
import Envelope from './components/Envelope'
import ThemePicker from './components/ThemePicker'
import './App.css'

function App() {
  const [theme, setTheme] = useState(null)
  const [opened, setOpened] = useState(false)

  /*
    Theme class goes on <body> so the CSS variables also reach the
    fullscreen overlay, which is portaled directly under <body>.
  */
  useEffect(() => {
    if (theme) document.body.className = `theme-${theme}`
  }, [theme])

  if (!theme) {
    return <ThemePicker onSelect={setTheme} />
  }

  return (
    <div className="scene">
      <Envelope opened={opened} onOpen={() => setOpened(true)} />
    </div>
  )
}

export default App

import { useState } from "react"
import { Button } from "./components/button"
import { MenuDrawer } from "./components/menuDrawer"



function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`size-screen ${isOpen ? "bg-black/50" : ""}`}>
        <div className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Button onClick={() => setIsOpen(true)}>Open Menu</Button>
        </div>
        <MenuDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  )
}

export default App

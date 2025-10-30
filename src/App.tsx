import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import techMenu from "./data/techMenu"



function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`size-screen ${isOpen ? "bg-black/50" : ""}`}>
        <button className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full hover:shadow-sm transition-all duration-300' onClick={() => setIsOpen(true)}>Open Menu</button>
        <div className="">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-50 flex items-center justify-center"
              >
                <div className="w-[90vw] h-[90vh] bg-gray-100 flex flex-col items-start rounded-md space-y-4 p-4">
                  {techMenu.map((item) => (
                    <div key={item.title} className="">
                      <div className="flex items-start gap-2">
                        <item.icon className="size-6 m-1" />
                        <span className="flex flex-col items-start">
                          <h3 className="text-lg font-medium">{item.title}</h3>
                          <p className="text-sm">{item.description}</p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default App

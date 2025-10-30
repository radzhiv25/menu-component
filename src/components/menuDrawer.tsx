import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import type { Menu as MenuType } from "../types/menu"
import { techMenu } from "../data/techMenu"
import { Menu } from "./menu"

interface MenuDrawerProps {
  isOpen: boolean
  onClose: () => void
  items?: MenuType
}

export const MenuDrawer = ({ isOpen, onClose, items = techMenu }: MenuDrawerProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [fadeTop, setFadeTop] = useState(0)
  const [fadeBottom, setFadeBottom] = useState(0)

  const updateFades = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const atTop = scrollTop <= 2
    const atBottom = scrollTop + clientHeight >= scrollHeight - 2
    setFadeTop(atTop ? 0 : 1)
    setFadeBottom(atBottom ? 0 : 1)
  }

  useEffect(() => {
    updateFades()
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          onClick={onClose}
          className="fixed inset-5 z-50 flex items-end sm:items-center justify-center"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-[90vw] max-h-[90vh] min-h-auto overflow-hidden bg-white rounded-2xl border p-5"
            drag="y"
            dragConstraints={{ top: 0, bottom: 240 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 800) onClose()
            }}
          >
            <div className="flex justify-center items-center -mt-1 mb-3">
              <div className="h-1.5 w-10 rounded-full bg-gray-300" />
            </div>
            <div className="relative">
              <div
                ref={scrollRef}
                onScroll={updateFades}
                className="max-h-[82vh] overflow-y-auto no-scrollbar pr-1"
              >
                <Menu items={items} />
              </div>
              <div
                className="pointer-events-none absolute left-0 right-0 top-0 h-6 bg-gradient-to-b from-white to-transparent transition-opacity"
                style={{ opacity: fadeTop }}
              />
              <div
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent transition-opacity"
                style={{ opacity: fadeBottom }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuDrawer


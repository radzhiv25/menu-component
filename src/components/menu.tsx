import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { techMenu } from "../data/techMenu"
import type { Menu as MenuType, MenuItem } from "../types/menu"
import MenuItemRow from "./menuItem"

interface MenuProps {
    items?: MenuType
}

export const Menu = ({ items = techMenu }: MenuProps) => {
    const [stack, setStack] = useState<MenuItem[][]>([items])
    const [direction, setDirection] = useState<number>(1)

    const currentItems = stack[stack.length - 1]

    const push = (children: MenuItem[]) => {
        setDirection(1)
        setStack((prev: MenuItem[][]) => [...prev, children])
    }

    const pop = () => {
        if (stack.length > 1) {
            setDirection(-1)
            setStack((prev: MenuItem[][]) => prev.slice(0, prev.length - 1))
        }
    }

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? 32 : -32, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -32 : 32, opacity: 0 }),
    }

    return (
        <div className="w-full">
            {stack.length > 1 && (
                <button onClick={pop} className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <motion.span
                        key={stack.length}
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: direction < 0 ? [0, -4, 0] : [0, -2, 0] }}
                        transition={{ duration: 0.25 }}
                    >
                        <ChevronLeft className="size-4" />
                    </motion.span>
                    Back
                </button>
            )}
            <div className="relative">
                <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                    <motion.div
                        key={stack.length}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="flex flex-col"
                    >
                        {currentItems.map((it: MenuItem) => {
                            const hasChildren = (it.subMenu && it.subMenu.length > 0) ?? false
                            const onClick = () => {
                                if (hasChildren && it.subMenu) push(it.subMenu)
                            }
                            return (
                                <button
                                    key={it.title}
                                    onClick={onClick}
                                    className="text-left py-3 sm:py-4 first:pt-1 last:pb-1 w-full"
                                >
                                    <MenuItemRow item={it} direction={direction} />
                                </button>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Menu
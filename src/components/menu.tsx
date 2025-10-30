import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
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
    const [indexStack, setIndexStack] = useState<number[]>([0])
    const itemRefs = useRef<Array<HTMLButtonElement | null>>([])

    const currentItems = stack[stack.length - 1]
    const currentIndex = indexStack[indexStack.length - 1] ?? 0

    const setCurrentIndex = (nextIndex: number) => {
        setIndexStack((prev: number[]) => {
            const copy = [...prev]
            copy[copy.length - 1] = Math.max(0, Math.min(nextIndex, currentItems.length - 1))
            return copy
        })
    }

    const focusIndex = (i: number) => {
        const el = itemRefs.current[i]
        if (el) el.focus()
    }

    const push = (children: MenuItem[]) => {
        setDirection(1)
        setStack((prev: MenuItem[][]) => [...prev, children])
        setIndexStack((prev: number[]) => [...prev, 0])
    }

    const pop = () => {
        if (stack.length > 1) {
            setDirection(-1)
            setStack((prev: MenuItem[][]) => prev.slice(0, prev.length - 1))
            setIndexStack((prev: number[]) => prev.slice(0, prev.length - 1))
        }
    }

    useEffect(() => {
        itemRefs.current = []
        const toFocus = 0
        setCurrentIndex(toFocus)
        const id = requestAnimationFrame(() => focusIndex(toFocus))
        return () => cancelAnimationFrame(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stack.length])

    const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        switch (e.key) {
            case "ArrowDown": {
                e.preventDefault()
                const next = (currentIndex + 1) % currentItems.length
                setCurrentIndex(next)
                focusIndex(next)
                break
            }
            case "ArrowUp": {
                e.preventDefault()
                const next = (currentIndex - 1 + currentItems.length) % currentItems.length
                setCurrentIndex(next)
                focusIndex(next)
                break
            }
            case "Home": {
                e.preventDefault()
                setCurrentIndex(0)
                focusIndex(0)
                break
            }
            case "End": {
                e.preventDefault()
                const last = Math.max(0, currentItems.length - 1)
                setCurrentIndex(last)
                focusIndex(last)
                break
            }
            case "ArrowRight":
            case "Enter":
            case " ": {
                e.preventDefault()
                const it = currentItems[currentIndex]
                const hasChildren = (it.subMenu && it.subMenu.length > 0) ?? false
                if (hasChildren && it.subMenu) {
                    push(it.subMenu)
                }
                break
            }
            case "ArrowLeft":
            case "Backspace": {
                e.preventDefault()
                pop()
                break
            }
            default:
                break
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
                        transition={{
                            duration:
                                typeof window !== "undefined" && window.matchMedia &&
                                    window.matchMedia("(prefers-reduced-motion: reduce)").matches
                                    ? 0
                                    : 0.2,
                            ease: "easeOut",
                        }}
                        className="flex flex-col will-change-transform"
                        role="menu"
                        aria-orientation="vertical"
                        aria-label="Main menu"
                        onKeyDown={onKeyDown}
                        tabIndex={-1}
                    >
                        {currentItems.map((it: MenuItem, idx: number) => {
                            const hasChildren = (it.subMenu && it.subMenu.length > 0) ?? false
                            const onClick = () => {
                                if (hasChildren && it.subMenu) push(it.subMenu)
                            }
                            return (
                                <button
                                    key={it.title}
                                    onClick={onClick}
                                    className="text-left py-3 sm:py-4 first:pt-1 last:pb-1 w-full"
                                    role="menuitem"
                                    aria-haspopup={hasChildren ? "menu" : undefined}
                                    aria-expanded={undefined}
                                    tabIndex={idx === currentIndex ? 0 : -1}
                                    ref={(el) => {
                                        itemRefs.current[idx] = el
                                    }}
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
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import type { MenuItem } from "../types/menu"

interface MenuItemRowProps {
  item: MenuItem
  direction?: number // 1 forward, -1 back
}

export const MenuItemRow = ({ item, direction = 1 }: MenuItemRowProps) => {
  const hasChildren = (item.subMenu && item.subMenu.length > 0) ?? false
  const Icon = item.icon
  return (
    <div className="flex items-start justify-between w-full">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-gray-700" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium text-gray-900">{item.title}</span>
          {item.description && (
            <span className="text-sm text-gray-500 leading-snug">
              {item.description}
            </span>
          )}
        </div>
      </div>
      {hasChildren && (
        <motion.span
          key={direction}
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: direction > 0 ? [0, 4, 0] : [0, -4, 0], opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </motion.span>
      )}
    </div>
  )
}

export default MenuItemRow


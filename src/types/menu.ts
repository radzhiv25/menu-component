import type { LucideIcon } from "lucide-react"

export interface MenuItem {
    title: string
    description?: string
    icon: LucideIcon
    path?: string
    subMenu?: MenuItem[]
}

export type Menu = MenuItem[]



## Menu Component (React + TypeScript)

An accessible, nested menu with smooth, direction-aware slide transitions. It supports full keyboard navigation, screen readers, and responsive layouts.

### Features
- Smooth, direction-aware slide animations (60fps) with reduced-motion support
- Intuitive back navigation and level history
- Full keyboard support and proper ARIA roles
- Responsive, modern visual design with hover states
- Focus management on open and between levels

### Types
```ts
export interface MenuItem {
  title: string
  description?: string
  icon: LucideIcon
  path?: string
  subMenu?: MenuItem[]
}

export type Menu = MenuItem[]
```

### Quick Start
```tsx
import { useState } from 'react'
import { MenuDrawer } from './src/components/menuDrawer'
import { techMenu } from './src/data/techMenu'

export default function Example() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <MenuDrawer isOpen={open} onClose={() => setOpen(false)} items={techMenu} />
    </>
  )
}
```

### Props
- `MenuDrawer`
  - `isOpen: boolean` — whether the drawer is open
  - `onClose: () => void` — called on overlay click, drag-to-close, or Escape
  - `items?: Menu` — menu data (defaults to `techMenu`)

### Keyboard
- ArrowDown / ArrowUp: move between items
- Home / End: jump to first/last item
- Enter / Space / ArrowRight: open submenu
- ArrowLeft / Backspace: go back a level
- Escape: close drawer

### Accessibility
- Container: `role="menu"`, `aria-orientation="vertical"`, labeled for screen readers
- Items: `role="menuitem"`, `aria-haspopup="menu"` when a submenu exists
- Drawer: `role="dialog"`, `aria-modal="true"`, focus trapped to menu and returned to trigger on close

### Customization
- Adjust Tailwind classes for spacing, colors, borders
- Supply any `LucideIcon` (or adapt the type) per `MenuItem`
- Pass your own `Menu` data via the `items` prop

### Sample Data
See `src/data/techMenu.ts` for a comprehensive nested example.

---

## Project Notes
- Built with Vite + React + TypeScript
- Dev: `npm run dev`  •  Build: `npm run build`  •  Preview: `npm run preview`

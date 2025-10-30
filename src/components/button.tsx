import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-full hover:shadow-sm transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
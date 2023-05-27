import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { ButtonStyles, DisabledButtonStyles } from './types'

export interface ButtonProps {
  onClick?: () => void
  style?: keyof typeof ButtonStyles
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
  className?: string
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  style = 'solidPrimary',
  disabled = false,
  className = '',
  type,
}) => {
  return (
    <button
      type={type}
      className={`${className} flex min-w-[7rem] justify-center
    rounded-lg border-2 px-4 py-2 text-sm font-medium leading-5 shadow 
    transition-colors duration-150 focus:outline-none ${
      disabled ? DisabledButtonStyles[style] : ButtonStyles[style]
    }`}
      onClick={() => {
        onClick && onClick()
      }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

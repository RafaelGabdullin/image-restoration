import { useMemo } from 'react'
import { Label } from './Label'

interface InputProps {
  className?: string
  label?: string
  value: string
  onChange?: (value: string) => void
  disabled?: boolean
  validationFn?: (value: string) => string
  errorMessage?: string
  icon?: React.ReactNode
  placeHolder?: string
  outlined?: boolean
  onHasError?: (hasError: boolean) => void
  errors?: string
  onClear?: () => void
  onHintClick?: () => void
  type?: 'default' | 'password'
}

export const Input: React.FC<InputProps> = ({
  className = '',
  label,
  value,
  onChange,
  disabled,
  icon,
  placeHolder,
  outlined,
  onClear,
  onHintClick,
  type = 'default',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value)
  }

  const inputStyles = useMemo(() => {
    let styles = ''
    if (icon) {
      styles += ' p-2.5 pl-10'
    } else {
      styles += ' p-2.5'
    }
    if (outlined) {
      styles += ' border border-slate-300'
    }
    return styles
  }, [icon, outlined])

  return (
    <div className={`${className} `}>
      <div className="flex items-center gap-2">
        <Label>{label}</Label>
        {onHintClick && (
          <div
            className="bg-primary-500 mb-2 h-4 w-4 cursor-pointer  rounded-full text-center text-xs text-white"
            onClick={onHintClick}
          >
            ?
          </div>
        )}
      </div>
      <div className={`relative ${onClear ? 'flex gap-x-[0.3rem]' : ''}`}>
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex w-[1.8rem] items-center pl-3 ">
            {icon}
          </div>
        )}

        <input
          disabled={disabled}
          type={type}
          id="input-group-1"
          className={`
            block w-full rounded-lg bg-gray-50 shadow-inner
            ${inputStyles} 
            focus:border-primary-500 focus:ring-primary-500
            text-base text-gray-900 focus:outline-none focus:ring-1`}
          placeholder={placeHolder}
          onChange={(e) => handleChange(e)}
          value={value}
        />
      </div>
    </div>
  )
}

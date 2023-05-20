interface LabelProps {
  className?: string
  children: React.ReactNode
}

export const Label: React.FC<LabelProps> = ({ children, className = '' }) => (
  <label
    className={`${className} mb-2 block text-sm font-medium text-neutral-500 dark:text-gray-300`}
  >
    {children}
  </label>
)

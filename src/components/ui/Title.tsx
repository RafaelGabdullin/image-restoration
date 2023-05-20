import { PropsWithChildren } from 'react'

export interface ITitleProps {
  className?: string
}

const Title: React.FC<PropsWithChildren<ITitleProps>> = ({ className = '', children }) => (
  <h2 className={`${className} text-xl font-bold`}>{children}</h2>
)

export default Title

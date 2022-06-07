import React from 'react'
import '../../../assets/stylesheets/index.css'

interface ButtonProps {
  variant?: 'bg-ecforce-blue' | 'bg-red-900'
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  variant = 'bg-ecforce-blue',
  size = 'large',
  label,
  ...props
}: ButtonProps) => {
  const sizeMap = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-5 py-2 text-xs',
    large: 'px-6 py-3 text-sm',
  }
  return (
    <button
      type="button"
      className={`text-white font-medium rounded ${variant} ${sizeMap[size]}`}
      {...props}
    >
      {label}
    </button>
  )
}

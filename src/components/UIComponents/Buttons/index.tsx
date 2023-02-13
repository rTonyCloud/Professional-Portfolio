import React from 'react'

export interface ButtonProps {
    children: React.ReactNode
    variant?: 'blue' | 'gray' | 'white'
    disabled?: boolean
    sx?: React.CSSProperties
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    const { children, variant, sx, onClick, disabled, type } = props

    const returnButtonBg = (): string => {
        switch (variant) {
            case 'gray':
                return '#5D5B69'
            case 'white':
                return '#ffffff'
            default:
                return '#007CF0'
        }
    }

    return <button
    onClick={onClick}
    type={type}
    disabled={disabled}
    style={{
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Montserrat',
      minWidth: '220px',
      width: 'max-content',
      borderRadius: '24px',
      cursor: 'pointer',
      padding: '8px 12px',
      backgroundColor: returnButtonBg(),
      color: '#fff',
      ...sx,
    }}
  >
    {children}
  </button>
}

export default Button

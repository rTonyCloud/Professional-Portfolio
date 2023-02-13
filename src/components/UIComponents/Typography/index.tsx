import React from 'react'

export type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'

interface Props {
    children: React.ReactNode
    variant?: Variant
    sx?: React.CSSProperties
}

const Typography: React.FC<Props> = (props: Props): JSX.Element => {
    const { children, variant, sx, } = props

    switch (variant) {
        case 'h1':
            return (
                <h1
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '78px',
                        fontWeight: 500,
                        color: 'white',
                        ...sx,
                    }}
                >
                    {children}
                </h1>
            )
        case 'h2':
            return (
                <h2
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '57px',
                        fontWeight: 500,
                        color: 'white',
                        ...sx,
                    }}
                >
                    {children}
                </h2>
            )
        case 'h3':
            return (
                <h3
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '47px',
                        fontWeight: 500,
                        color: 'white',
                        ...sx,
                    }}
                >
                    {children}
                </h3>
            )
        case 'h4':
            return (
                <h4
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '39px',
                        fontWeight: 500,
                        color: 'white',
                        ...sx,
                    }}
                >
                    {children}
                </h4>
            )
        case 'h5':
            return (
                <h5
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '28px',
                        fontWeight: 500,
                        color: 'white',
                        ...sx,
                    }}
                >
                    {children}
                </h5>
            )
        case 'h6':
            return (
                <h6
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '24px',
                        fontWeight: 500,
                        color: 'white',
                        ...sx,
                    }}
                >
                    {children}
                </h6>
            )
        case 'body1':
            return (
                <p
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '20px',
                        fontWeight: 400,
                        color: 'white',
                        ...sx,
                    }}
                >
                    {children}
                </p>
            )
        default:
            return (
                <p
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: '16px',
                        fontWeight: 400,
                        ...sx,
                    }}
                >
                    {children}
                </p>
            )
    }
}

export default Typography

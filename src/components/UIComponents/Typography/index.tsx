import React from 'react'
import * as styles from './Typography.styles'

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

const Typography: React.FC<Props> = ({
    children,
    variant,
    sx = {},
}: Props): JSX.Element => {
    const validCSSProps = {
        color: sx.color,
        fontSize: sx.fontSize,
        fontWeight: sx.fontWeight,
        lineHeight: sx.lineHeight,
        letterSpacing: sx.letterSpacing,
        textAlign: sx.textAlign,
        textTransform: sx.textTransform,
        textDecoration: sx.textDecoration,
        fontFamily: sx.fontFamily,
        fontStyle: sx.fontStyle,
        margin: sx.margin,
        padding: sx.padding,
        border: sx.border,
        borderRadius: sx.borderRadius,
        backgroundColor: sx.backgroundColor,
        boxShadow: sx.boxShadow,
        opacity: sx.opacity,
        visibility: sx.visibility,
        display: sx.display,
        flex: sx.flex,
        flexGrow: sx.flexGrow,
        flexShrink: sx.flexShrink,
        flexBasis: sx.flexBasis,
        alignItems: sx.alignItems,
        alignContent: sx.alignContent,
        justifyContent: sx.justifyContent,
        flexDirection: sx.flexDirection,
        flexWrap: sx.flexWrap,
        gap: sx.gap,
        gridTemplateColumns: sx.gridTemplateColumns,
        gridTemplateRows: sx.gridTemplateRows,
        gridColumn: sx.gridColumn,
        gridRow: sx.gridRow,
        gridArea: sx.gridArea,
        justifySelf: sx.justifySelf,
        alignSelf: sx.alignSelf,
        order: sx.order,
        transform: sx.transform,
        transition: sx.transition,
        overflow: sx.overflow,
        overflowX: sx.overflowX,
        overflowY: sx.overflowY,
        zIndex: sx.zIndex,
        cursor: sx.cursor,
        userSelect: sx.userSelect,
        pointerEvents: sx.pointerEvents,
        resize: sx.resize,
        wordWrap: sx.wordWrap,
        whiteSpace: sx.whiteSpace,
        position: sx.position,
        top: sx.top,
        left: sx.left,
        bottom: sx.bottom,
        right: sx.right,
    }
    switch (variant) {
        case 'h1':
            return <styles.H1 style={validCSSProps}>{children}</styles.H1>
        case 'h2':
            return <styles.H2 style={validCSSProps}>{children}</styles.H2>
        case 'h3':
            return <styles.H3 style={validCSSProps}>{children}</styles.H3>
        case 'h4':
            return <styles.H4 style={validCSSProps}>{children}</styles.H4>
        case 'h5':
            return <styles.H5 style={validCSSProps}>{children}</styles.H5>
        case 'h6':
            return <styles.H6 style={validCSSProps}>{children}</styles.H6>
        case 'body2':
            return <styles.P2 style={validCSSProps}>{children}</styles.P2>
        case 'body1':
        default:
            return <styles.P1 style={validCSSProps}>{children}</styles.P1>
    }
}
export default Typography

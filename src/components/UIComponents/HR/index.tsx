import * as styles from './HR.styles'

const LineWithCircles: React.FC = (): JSX.Element => {
    return (
        <styles.LineContainer>
            <styles.Wrapper>
            <styles.Line />
                    <styles.Circle />
                    <styles.Circle />
                    <styles.Circle />
                    <styles.Circle />
                    <styles.Circle />
            </styles.Wrapper>
        </styles.LineContainer>
    )
}

export default LineWithCircles

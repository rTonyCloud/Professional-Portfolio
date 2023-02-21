

const stylesGuide = () => {

    const edubodyStyle = {
        position: 'absolute',
        bottom: '120px',
        left: '55px',
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '400',
    }

    const rtonyTextStyle = {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '39px',

    }

    const RtonyYearsStyle = {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '27px',
        textTransform: 'uppercase',
    }

    const RtonyExperienceStyle = {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '27px',
        textTransform: 'uppercase',


    }

    const HeaderbuttonStyles = {
            display: 'flex',
            padding: '1em',
            background:'#00c2ff',
            border: '1px solid #ffffff',
            }

    return { HeaderbuttonStyles, rtonyTextStyle, RtonyExperienceStyle, RtonyYearsStyle}
}

export default stylesGuide
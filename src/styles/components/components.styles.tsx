import { CSSProperties } from 'react';

const stylesGuide = () => {
    const edubodyStyle:CSSProperties = {
        position: 'absolute',
        bottom: '120px',
        left: '55px',
        fontSize: '14px',
        fontFamily: 'Inter',
        fontWeight: '400',
    }

    const rtonyTextStyle:CSSProperties = {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '39px',
    }

    const RtonyYearsStyle:CSSProperties= {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '27px',
        textTransform: 'uppercase',
    }

    const RtonyExperienceStyle:CSSProperties = {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '27px',
        textTransform: 'uppercase',
    }

    const HeaderbuttonStyles:CSSProperties = {
        display: 'flex',
        padding: '1em',
        background: '#00c2ff',
        border: '1px solid #ffffff',
    }

    const EduCardsStyles:CSSProperties = {
        fontSize: '36px',
        position: 'relative',
        lineHeight: '40px',
        top: '-40px',
    }

    return {
        HeaderbuttonStyles,
        rtonyTextStyle,
        RtonyExperienceStyle,
        RtonyYearsStyle,
        EduCardsStyles,
    }
}

export default stylesGuide

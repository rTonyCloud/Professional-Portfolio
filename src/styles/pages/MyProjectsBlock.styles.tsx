import styled from 'styled-components'

export const Section = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100%;
`

export const Container = styled.div`
    width: 100%;
    cursor: pointer;
    .slick-slide > div {
        display: grid;
        place-items: center;
        width: 80%;
        margin-top: 50px;
        margin: auto;
        height: 500px;
        padding: 0px;
    }
    .slick-dots {
        position: relative;
        width: 100%;
    }

    .slick-dots li {
        width: 28.3px;
    }

    .slick-dots li button:before {
        position: absolute;
        font-size: 20px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        background: linear-gradient(
            92.61deg,
            rgba(0, 194, 255, 0.85) 7.28%,
            rgba(255, 117, 244, 0.85) 92.72%
        );
    }

    .slick-dots li.slick-active button:before {
        border: 2px solid #ffffff;
        border-radius: 50%;
        color: #00c2ff;
    }
`

export const AnimatedGradientText = styled.p`
    color: #00c2ff;
    background-image: linear-gradient(93.11deg, #00c2ff 15.03%, #ff75f4 83.95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Montserrat', 'Roboto';
    font-feature-settings: 'kern';
    font-size: 49px;
    font-weight: 700;
    overflow-wrap: break-word;
    text-align: left;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
`

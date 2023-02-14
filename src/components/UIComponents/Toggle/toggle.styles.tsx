import styled from 'styled-components'

export const ButtonLayout = styled.div`
display: flex;
position: relative;
background: rgba(255, 255, 255, 0.1);
border-radius: 49.5px;
width: 250px;
height: 50px;

`;

export const Button = styled.div`
display: flex;
position: relative;
height: 100%;
width: 100%;
align-items: center;
flex-direction: row;
box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 130px;
`
export const ToggleButton = styled.button`
display: flex;
position: relative;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
color: #fff;
border: 0;
cursor: pointer;
background: transparent;
outline: none;
text-align: center;
&:focus {

    background: #00C2FF;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 130px;
    transition: 0.5s;
}
`
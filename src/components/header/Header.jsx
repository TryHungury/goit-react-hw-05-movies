// import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderStyles = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-bottom: ${p=>p.theme.borders.normal};
border-bottom-left-radius: ${p=>p.theme.radii.normal};
border-bottom-right-radius: ${p=>p.theme.radii.normal};
background-color: ${p=>p.theme.colors.background};
`

const Nav = styled.nav`
width: 15%;
display: flex;
justify-content: space-evenly;
align-items: center;
padding: ${p=>p.theme.space[3]}px;
`

const LinkStyled = styled.button`
/* min-width: 70px; */
border: ${p=>p.theme.borders.normal};
border-radius: ${p=>p.theme.radii.normal};
font-family: ${p=>p.theme.fonts.heading};
font-size: ${p=>p.theme.fontSizes[4]}px;
background-color: ${p=>p.theme.colors.backgroundSecondary};
color: ${p=>p.theme.colors.accent};
border-color: ${p=>p.theme.colors.text};
scale: 1;
transition: 
background-color 250ms linear,
color 250ms linear,
scale 250ms linear,
border-color 250ms linear;
&:hover, &:focus {
    scale: 1.05;
    color: ${p=>p.theme.colors.text};
    border-color: ${p=>p.theme.colors.accent};
    background-color: ${p=>p.theme.colors.background};
}
`

export const Header = () => {
    return (
        <HeaderStyles>
            <Nav>
                <LinkStyled>Home</LinkStyled>
                <LinkStyled>Movies</LinkStyled>
            </Nav>
        </HeaderStyles>
    )
}
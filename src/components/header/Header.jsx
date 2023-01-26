import { NavLink } from "react-router-dom"
import styled from "styled-components"
import  StyledLink_css  from "../header/StyledLink.module.css";
// import { Box } from "components/box/Box";

const {Styled__Link,  Selected} = StyledLink_css;

const HeaderStyles = styled.header`
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
border-bottom: ${p=>p.theme.borders.normal};
border-bottom-left-radius: ${p=>p.theme.radii.normal};
border-bottom-right-radius: ${p=>p.theme.radii.normal};
background-color: ${p=>p.theme.colors.background};
@media screen and (min-width: 320px) {
    height: 15vh;
}
@media screen and (min-width: 720px) {
    height: 20vh;
}
@media screen and (min-width: 1200px) {
    height: 25vh;
}
`

const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
padding: ${p=>p.theme.space[3]}px;

@media screen and (min-width: 320px) {
    width: 70%;
}
`

export const Header = () => {
    return (
        <HeaderStyles>
            <Nav>
                {/* <Box className={Styled__Link}> */}
                    <NavLink to="/" className={({isActive})=>{return !!isActive ? `${Styled__Link} ${Selected}` : `${Styled__Link}` }}>Home</NavLink>
                {/* </Box> */}
                {/* <Box className={Styled__Link}> */}
                    <NavLink to="/movies" className={({isActive})=>{return !!isActive ? `${Styled__Link} ${Selected}` : `${Styled__Link}` }}>Movies</NavLink>
                {/* </Box> */}
            </Nav>
        </HeaderStyles>
    )
}
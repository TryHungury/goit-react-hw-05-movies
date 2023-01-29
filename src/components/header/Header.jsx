import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import  StyledLink_css  from "../header/StyledLink.module.css";
// import { Box } from "components/box/Box";

const {Styled__Link,  Selected} = StyledLink_css;

// const HeaderStyles = styled.header`
// width: 100%;
// height: 100px;
// display: flex;
// justify-content: center;
// align-items: center;
// border-bottom: ${p=>p.theme.borders.normal};
// border-bottom-left-radius: ${p=>p.theme.radii.normal};
// border-bottom-right-radius: ${p=>p.theme.radii.normal};
// background-color: ${p=>p.theme.colors.background};
// @media screen and (min-width: 320px) {
//     height: 150px;
// }
// @media screen and (min-width: 720px) {
//     height: 200px;
// }
// @media screen and (min-width: 1200px) {
//     height: 250px;
// }
// `

// const animateHeader = keyframes`
//   0% {
//     transform: scale(1.1);
//   }
//   50% {
//     transform: scale(1.15);
//   }
//   100% {
//     transform: scale(1.1);
//   }
// `;

const HeaderStyles = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: #333;
  color: ${p=>p.theme.colors.accent};

  @media (max-width: 767px) {
    height: 70px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 80px;
  }

  @media (min-width: 992px) {
    height: 90px;
  }
`;

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
                    <NavLink to="/" className={({isActive})=>{return !!isActive ? `${Styled__Link} ${Selected}` : `${Styled__Link}` }}>Home</NavLink>
                    <NavLink to="/movies" className={({isActive})=>{return !!isActive ? `${Styled__Link} ${Selected}` : `${Styled__Link}` }}>Movies</NavLink>
            </Nav>
        </HeaderStyles>
    )
}
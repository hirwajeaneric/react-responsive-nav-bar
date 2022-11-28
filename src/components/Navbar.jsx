import React, { useState } from 'react'
import { 
  Container, 
  Left, 
  Logo, 
  MenuButton, 
  NavbarContainer, 
  NavBarExtendedContainer, 
  NavbarLink, 
  NavbarLinkExtended, 
  Right, 

} from './Navbar.elements';

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(current => !current)
  }

  return (
    <Container>
      
      <Left>
        <NavbarContainer>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/features">Features</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
          <MenuButton onClick={handleClick}>{menuOpen ? <>&#10005;</> : <>&#8801;</>}</MenuButton>
        </NavbarContainer>
      </Left>

      <Right>
        <Logo>Logo</Logo>
      </Right>

      {menuOpen && (
        <NavBarExtendedContainer>
          <NavbarLinkExtended to="/" onClick={handleClick}>Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about" onClick={handleClick}>About</NavbarLinkExtended>
          <NavbarLinkExtended to="/features" onClick={handleClick}>Features</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact" onClick={handleClick}>Contact</NavbarLinkExtended>
        </NavBarExtendedContainer>
      )}

    </Container>
  )
}

export default Navbar
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const Left = styled.div`
  flex: 7;
  padding-left: 20px;
`;

export const Right = styled.div`
  flex: 3;
  padding-right: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const Logo = styled.h1``;

export const NavbarContainer = styled.div``;

export const NavbarLink = styled(NavLink)`
    font-size: large;
    text-decoration: none;
    color: white;
    margin: 10px;
    padding: 0 10px;
    cursor: pointer;

    &.active{
        background-color: white;
        color: black;
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const MenuButton = styled.button`
    width: 40px;
    height: 50px;
    border: none;
    background: none;
    font-size: 40px;
    color: white;
    cursor: pointer;

    @media screen and (min-width: 700px) {
        display: none;
    }
`;

export const NavBarExtendedContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NavbarLinkExtended = styled(NavLink)`
    font-size: large;
    text-decoration: none;
    color: white;
    margin: 10px;
    padding: 0 10px;
    cursor: pointer;
    margin-bottom: 20px;
`;
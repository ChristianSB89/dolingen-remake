import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  background: #c93c32;
  padding: 1em;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinkFlex = styled.div`
  display: flex;
`;

export const LiFix = styled.li`
  list-style: none;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  &:hover,
  &.active {
    color: #d6d6d6;
    border-top: 2px #d6d6d6 solid;
    border-bottom: 2px #d6d6d6 solid;
  }
`;

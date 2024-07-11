"use client"
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #F25CAF;
  height: 45px;
  position: fixed;
  width: 100%;
  z-index: 999;
 padding-top: 5px;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Caminhos = styled.li`
  padding: 0 50px;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 6px;
  cursor: pointer;
  &:hover {
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  }
`;

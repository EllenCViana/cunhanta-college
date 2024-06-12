"use client"
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const Caminhos = styled.li`
  padding: 0 50px;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 6px;
  cursor: pointer;
  &:hover {
    color: #F25CAF;
    border-bottom: 2px solid #F25CAF;
  }
`;

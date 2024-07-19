import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    z-index: 50;
    background-color: #E23C98;
`;

export const SearchInput = styled.input`
    margin: 0 80px;
    background-color: transparent;
    border: 1px solid transparent;
    flex: 1;
    border-radius: 8px;
    color: #ffffff;
    width: 830px;
    height: 40px;
    padding: 0 16px;
    background-color: #CB3488;
    &::placeholder {
        color: #ffffff;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 16px;
`;

export const Button = styled.button`
    flex: initial;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: 500;
    font-size: 1.25rem; 
    color: #fff;
    border-radius: 8px;
    width: 120px;
    height: 40px;
    transition: background-color 0.3s;
    &.login {
        background-color: #43bdff;
        &:hover {
            background-color: #099ce0;
        }
    }
    &.signup {
        background-color: #ffd426;
        width: 169px;
        &:hover {
            background-color: #dda807;
        }
    }
`;

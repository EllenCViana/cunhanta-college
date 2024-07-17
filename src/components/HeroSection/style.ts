"use client"
import styled from "styled-components";

export const Section = styled.section`
    height: 607px;
    padding-left: 130px;
    display: flex;
    gap: 14px;
    margin-bottom: 30px;
    margin-top: 89px;
`

export const Title = styled.h1`
    font-size: 48px;
    margin-top: 150px;
    font-weight: 700;
    font-family: 'Murecho', sans-serif;
    &:hover {
    cursor: pointer;
  }
`

export const Text = styled.p`
    width: 570px;
    margin-top: 21px;
    font-size: 18px;
    color: #fefefe;
`

export const Button = styled.button`
    width: 239px;
    height: 55px;
    background-color: #f25caf;
    border-radius: 8px;
    font-size: 20px;
    margin-top: 53px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
    background-color: #EB53A7;
  }
`

export const Personagens = styled.img`
    height: 496px;
    width: 536px;
    margin-top: 90px;
    margin-left: 14px;
`

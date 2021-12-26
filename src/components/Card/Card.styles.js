import styled from "styled-components";
import {CardContainer} from "../CardLearn/CardLearn.styles";
import React from "react";

export const Header = styled.div`
  height: 15%;
  width: 100%;
  font-size: 2em;
  display: flex;
  justify-content: center;
  vertical-align: center;
`

export const Title = styled.div`
  padding-top: 10px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const SelectionFooter = styled.div`
  margin-top: auto;
  width: 100%;
  margin-bottom: 0;
  height: 12%;
  font-size: 1.5em;
  display: flex
`;

export const FooterBad = styled.div`
  border-radius: 12px;
  width: 50%;
  background-color: var(--red);
  opacity: 0.3;
  transition: 0.3s;
  &:hover{
    opacity: 0.8;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterGood = styled.div`
  border-radius: 12px;
  width: 50%;
  background-color: var(--green);
  opacity: 0.3;
  transition: 0.3s;
  &:hover{
    opacity: 0.8;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Description = styled.div`
  height: 29%;
  padding-left: 20px; padding-right: 20px;
  width: calc(100% - 40px);
  font-size: 1.3em;
  @media screen and (max-width: 470px) {
    font-size: 1.1em;
  }
`;

export const RevealDiv = styled.div`
  font-size: 40px;
  border-radius: 25px;
  background: rgba(47,51,58,1);
  border-color: var(--blue);
  transition: 0.3s;
  &:hover{
    background-color: var(--blue);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56%;
  `;

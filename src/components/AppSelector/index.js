import React from 'react';
// Routing
import { Link } from 'react-router-dom';
import App from '../../App';
// Components
import Navbar from '../Navbar'
import LiPoint from "./LiPoint";
// Styled components
import {
  CardContainer,
  CardHeader,
  CardUl,
  ContentWrapper,
  HeaderImage,
  HeaderImageDiv,
  HeaderText
} from "./AppSelector.styles";
// Resources
import NoImage from "../../images/NoImage.png";

const AppSelector = () => {
  return (
    <>
      <Navbar width={ 600 }/>
      <ContentWrapper>
        <Link to={`/apps/learn`}>
          <CardContainer>
            <CardHeader>
              <HeaderText>
                Magic Cards Learning
              </HeaderText>
              <HeaderImageDiv>
                <HeaderImage src={NoImage}/>
              </HeaderImageDiv>
            </CardHeader>
            <CardUl>
              <LiPoint text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
              <LiPoint text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
              <LiPoint text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
              <LiPoint text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
            </CardUl>
          </CardContainer>
        </Link>
        <Link to={`/apps/edit/cards`}>
          <CardContainer>
            <CardHeader>
              <HeaderText>
                Magic Cards Editor
              </HeaderText>
              <HeaderImageDiv>
                <HeaderImage src={NoImage}/>
              </HeaderImageDiv>
            </CardHeader>
            <CardUl>
              <LiPoint text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
              <LiPoint text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
              <LiPoint text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
              <LiPoint text={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
            </CardUl>
          </CardContainer>
        </Link>
      </ContentWrapper>
    </>
  );
}

export default AppSelector;
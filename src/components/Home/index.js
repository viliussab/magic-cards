import React from 'react';
// Routing
import { Link } from 'react-router-dom';
// Components

// Styled Components
import {
  MainWrapper,
  HeaderWrapper,
  LogoWrapper,
  LogoImage,
  ButtonWrapper,
  Button,
  ContImageWrapper, ContImage, Motivational, LowerMotivational, TextSizeManager, TextHeader, TextInterest, TextContent
} from './Home.styles';
import { ContentWrapper, ContentChild} from "./Home.styles";
// Resources
import Logo from '../../images/Logo.png';
import SmallLogo from '../../images/LogoSmall.png';
import NoImage from '../../images/NoImage.png';

import { useState, useEffect } from 'react';

// const getWidth = () => window.innerWidth
//   || document.documentElement.clientWidth
//   || document.body.clientWidth;

const Home = () => {
  let [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    let timeoutId = null;
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
      setWidth(window.innerWidth);
      // clearTimeout(timeoutId);
      // timeoutId = setTimeout(() => setWidth(window.innerWidth), 50);
    }
    window.addEventListener('resize', handleResize);
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', handleResize);
    }
  })
  return (
    <>
      <MainWrapper>
        <HeaderWrapper className="shadow p-3 mb-5 rounded">
          <LogoWrapper>

            <LogoImage src={ width > 550 ? Logo : SmallLogo } />

          </LogoWrapper>
          <ButtonWrapper>
            <Link to={`/apps`}><Button className={ "btn btn-outline-primary"  + (width > 550? " btn-lg" : "")}>Login</Button></Link>
            <Link to={`/apps`}><Button className={ "btn btn-primary" + (width > 550? " btn-lg" : "") }>Register</Button></Link>
          </ButtonWrapper>


        </HeaderWrapper>
        <ContentWrapper>
          <ContentChild>
            <ContImage src={ NoImage }/>
          </ContentChild>
          <ContentChild>
            <TextSizeManager>
              <TextHeader>
                <div className="shadow p-3 mb-2 rounded">
                  <div>
                    Flashcard learning platform.
                  </div>
                  <div>
                    Simple and efficient.
                  </div>
                </div>

              </TextHeader>
              <TextContent>
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </TextContent>
              <TextInterest>
                Interested?
                <Link to={`/apps`}><Button className={ "btn btn-primary" + (width > 550? " btn-lg" : "") }>Register</Button></Link>
              </TextInterest>
            </TextSizeManager>


          </ContentChild>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
}

export default Home;
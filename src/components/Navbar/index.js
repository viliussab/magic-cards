import React, {useState} from 'react';
// Routing
import { Link } from 'react-router-dom';

// Componens
import {AdditionalWrapper, Icon, LogoDiv, MiddleSection, UserDiv, UserImage,  UserItem, Wrapper} from "./Navbar.styles";
import {Image} from "./Navbar.styles";
// Resources
import Logo from "../../images/Logo.png";
import LogoSmall from "../../images/LogoSmall.png";
import UserPic from "../../images/UserImage.png";
import {Button} from "./Navbar.styles";

const Navbar = ( { user, isExpanded } ) => {
  let [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
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
      <Wrapper className={ width > 1050 ? "navbar" : "navbar"}>
        <LogoDiv>
          <Link to={`/apps`}>
          <Image src={width > 550 ? Logo : LogoSmall}/>
          </Link>
        </LogoDiv>
        {width > 1050 ?
          <MiddleSection>
          </MiddleSection> : <></>}

        <UserDiv>
          <UserItem>
            <div>{"Hello, " + (user || "User213143")}</div>
          </UserItem>
          <UserItem>
            <UserImage src={UserPic}/>
          </UserItem>
          <UserItem>
          <Link to={`/`}><Button className={ "btn btn-primary btn-lg" }>Logout</Button></Link>
          </UserItem>
        </UserDiv>
      </Wrapper>
      {
        isExpanded === true ? width > 1050 ?
          <></> :
          <AdditionalWrapper className={ "navbar" }>
            <MiddleSection>
              MiddleSection
            </MiddleSection>
          </AdditionalWrapper> : <></>
      }
    </>
  );
}

export default Navbar;
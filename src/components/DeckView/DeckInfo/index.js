import React from 'react';
import {
  BottomFoot,
  ButtonImg,
  ButtonSpace,
  Description,
  Element, FooterButton,
  Header,
  ReviewElement,
  ReviewElements,
  Title,
  Wrapper
} from "./DeckInfo.styles";
// Routing

// Components

// Styled components

// Resources
import BackWhiteArrow from '../../../images/ReverseWhiteArrow.png';
import TrashIcon from '../../../images/TrashIcon.png';
import {Link} from "react-router-dom";


const DeckInfo = ({id, title, description, cardTotalCount, cardLearnCount, cardReviewCount, onClose, onRemove}) => {
  const removeEvent = () => {
    onRemove(id);
  }

  return (
    <>
      <Wrapper>
        <Header>
          <ButtonSpace onClick={onClose} className={"btn btn-primary"}><ButtonImg src={BackWhiteArrow}/></ButtonSpace>
          <Title>
            {title}
          </Title>
          <ButtonSpace onClick={onRemove} className={"btn btn-danger"}><ButtonImg src={TrashIcon}/></ButtonSpace>
        </Header>
        <Description>
          {description}
        </Description>
        <ReviewElements>
          <Element>Cards left to learn: <div style={{color: "#007bff", "margin-left": "auto"}}>{cardTotalCount}</div></Element>
          <Element>Cards left to learn today: <div style={{color: "#28a745", "margin-left": "auto"}}>{cardLearnCount}</div></Element>
          <Element>Cards left to review today: <div style={{color: "#dc3545", "margin-left": "auto"}}>{(cardReviewCount)}</div></Element>
        </ReviewElements>
        <BottomFoot>
          <Link to={`/apps/learn/card`}><FooterButton className={"btn btn-lg btn-primary"}>Study</FooterButton></Link>
        </BottomFoot>
      </Wrapper>

    </>
  );
}

export default DeckInfo;
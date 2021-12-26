import React from 'react';
// Routing
import { Link } from 'react-router-dom';
// Components
import {CardContainer} from "../CardLearn/CardLearn.styles";
import {Description, FooterBad, FooterGood, Header, RevealDiv, SelectionFooter, Title} from "./Card.styles";

const Card = ({card, reveal, isRevealed, width, nextCard}) => {
  return (
    <>

      <CardContainer>
        <Header>
          <Title>
            {card?.name}
          </Title>
        </Header>
        <Description>
          {card?.description}
        </Description>
        {isRevealed === true ?
          <>
            <Header>
              <Title>
                {card?.answer}
              </Title>
            </Header>
            <Description>
              {card?.answerDescription}
            </Description>
            { width > 950 ?
              <></>
              : <SelectionFooter>
                <FooterBad  onClick={nextCard}>Bad</FooterBad>
                <FooterGood  onClick={nextCard}>Good</FooterGood>
              </SelectionFooter>}
          </>
          :
          <RevealDiv onClick={reveal}>
            Reveal
          </RevealDiv>
        }

      </CardContainer>
    </>
  );
}

export default Card;
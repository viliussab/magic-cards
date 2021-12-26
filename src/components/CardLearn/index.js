import React, {useState} from 'react';
// Components
import Navbar from '../Navbar';
import {
  CardContainer,
  ContentWrapper,
  Description, FooterBad, FooterGood,
  Header,
  RevealDiv,
  SelectBad,
  SelectGood, SelectionFooter,
  Title
} from "./CardLearn.styles";
import {getCards} from "../../MockDB";
import {BottomFoot} from "../DeckView/DeckInfo/DeckInfo.styles";
import Card from "../Card";

const CardLearn = () => {
  let [width, setWidth] = useState(window.innerWidth);
  let [isRevealed, setIsRevealed] = useState(false);
  // let [currentId, setCurrentId] = useState(1);
  let [card, setCard] = useState(getCards()[0]);
  const reveal = () => {
    setIsRevealed(true);
  }
  const nextCard = () => {
    setIsRevealed(false);
    setCard(getCards()[Math.floor(Math.random()*getCards().length)]);
  }
  React.useEffect(() => {
    function handleResize() {
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
  }, [])
  return (
    <>
      <Navbar/>
      <ContentWrapper>
        {isRevealed === true && width > 950 ?
          <SelectBad onClick={nextCard}>
            Bad
          </SelectBad> : <></>}
        <Card width={width} reveal={reveal} isRevealed={isRevealed} nextCard={nextCard} card={card}/>
        {isRevealed === true && width > 950?
          <SelectGood onClick={nextCard}>
            Good
          </SelectGood> : <></>
        }
      </ContentWrapper>
    </>
  );
}

export default CardLearn;
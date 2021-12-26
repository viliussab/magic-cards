import React, {useEffect, useState} from 'react';
// Routing
import { Link } from 'react-router-dom';
// Components
import Navbar from '../Navbar';
import {CardContainer, ContentWrapper} from "./EditCard.styles";
import Card from "../Card";
import {getCards, getDecks} from "../../MockDB";
import CardItem from "../DeckView/CardItem";
import CardEdit from "./CardEdit";

const EditCard = () => {
  let [selectedId, setSelectedId] = useState(null);
  let [editingCard, setEditingCard] = useState(null);
  let [width, setWidth] = useState(window.innerWidth);
  let [cardName, setCardName] = useState(null);
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
  const expandCard = (id) => {
    setCardName(getCards()[id-1].name);
    setEditingCard(getCards()[id-1]);
    setSelectedId(id);

  }
  const returnToDefault = () => {
    setSelectedId(null);
  }
  return (
    <>
      <Navbar/>
      <ContentWrapper>
        {selectedId !== null && width < 1500? <></> :
        <CardContainer>
          {getCards().map((element) =>
            <CardItem name={element.name} id={element.id} onClickEvent={expandCard} selectedId={selectedId} resetEvent={returnToDefault}/>
          )}
        </CardContainer>}
        {selectedId !== null ?
          <>
            <CardContainer>
              <CardEdit cardOldName={cardName} card={editingCard} cardSetter={setEditingCard} onClose={returnToDefault} onRemove={returnToDefault}/>
            </CardContainer>
            <Card isRevealed={true} card={editingCard}/>
          </>

          : <></>}

      </ContentWrapper>
    </>
  );
}

export default EditCard;
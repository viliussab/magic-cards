import React, {useState} from 'react';
// Routing
import { Link } from 'react-router-dom';
import {getCards, getDecks } from "../../../MockDB";
// Components

// Styled components
import {ContentWrapper, CardContainer} from "./Content.styles";
import CardItem from "../CardItem";
import DeckInfo from "../DeckInfo";

const Content = ({handleClick, selectedCardId, resetIdClick}) => {
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
  });
  console.log("selected card id", selectedCardId);
  return (
    <>
      <ContentWrapper>
        {
          selectedCardId != null && width < 980 ?
            <></>
            :
            <CardContainer>
              {getDecks().map((element) =>
                <CardItem name={element.name} id={element.id} onClickEvent={handleClick} selectedId={selectedCardId} resetEvent={resetIdClick}/>
              )}
            </CardContainer>
        }
        {
          selectedCardId != null ?         <CardContainer>
            <DeckInfo
              title={getDecks()[selectedCardId-1].name} description={getDecks()[selectedCardId-1].description} cardLearnCount={getDecks()[selectedCardId-1].cards.length} cardReviewCount={0} cardTotalCount={getDecks()[selectedCardId-1].cards.length}
            onRemove={resetIdClick} onClose={resetIdClick}/>
          </CardContainer> : <></>
        }
      </ContentWrapper>
    </>
  );
}

export default Content;
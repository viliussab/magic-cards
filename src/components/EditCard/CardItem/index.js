import React from 'react';
// Routing
import { Link } from 'react-router-dom';
import {DeckNameSpace, ExpandImg, ExpandSpace, SelectedWrapper, Wrapper} from "./CardItem.styles";
// Components


import Arrow from "../../../images/WhiteArrow.png";

const CardItem = ({name, id, onClickEvent, selectedId, resetEvent}) => {
  const event = () => {
    if (selectedId === id) {
      resetEvent();
    }
    else {
      onClickEvent(id);
    }
  }
  console.log("isSelected?", selectedId);
  return (
    <>
      <Wrapper>
        <DeckNameSpace>
          {name || "Unnamed card"}
        </DeckNameSpace>
        <ExpandSpace className={"btn " + (selectedId === id ?  " btn-primary" : " btn-outline-primary")} onClick={event}>
          <ExpandImg src={Arrow}/>
        </ExpandSpace>
      </Wrapper>
    </>
  );
}

export default CardItem;
import React, {useState} from 'react';

// Routing
import { Link } from 'react-router-dom';
// Components
import Navbar from '../Navbar';
// Styled components
import {ContentWrapper, CardContainer} from "./DeckView.styles";
import Content from "./Content";

const DeckView = () => {
  let [selectedId, setSelectedId] = useState(null);
  const handleClick = (id) => {
    setSelectedId(id);
    console.log("Pressed id ", id);
  }
  const resetId = () => {
    setSelectedId(null);
  }
  return (
    <>
      <Navbar/>
      <Content handleClick={handleClick} selectedCardId={selectedId} resetIdClick={resetId}/>
    </>
  );
}

export default DeckView;
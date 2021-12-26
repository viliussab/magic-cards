import React, {useState} from 'react';
import {
  BottomFoot,
  ButtonImg,
  ButtonSpace,
  Description, DivForm,
  Element, FooterButton,
  Header, LabelDiv, LongTextArea, LongTextDiv,
  ReviewElement,
  ReviewElements, ShortTextArea, ShortTextDiv,
  Title,
  Wrapper
} from "./CardEdit.styles";
// Routing

// Components

// Styled components

// Resources
import BackWhiteArrow from '../../../images/ReverseWhiteArrow.png';
import TrashIcon from '../../../images/TrashIcon.png';
import {Link} from "react-router-dom";


const CardEdit = ({cardOldName, card, cardSetter, onClose, onRemove}) => {
  const handleNameEdit = (event) => {
    if (cardSetter == null) {
      return;
    }
    cardSetter({
      id: card.id,
      name: event.target.value,
      description: card.description,
      answer: card.answer,
      answerDescription: card.answerDescription,
    });
  }
  const handleDescriptionEdit = (event) => {
    if (cardSetter == null) {
      return;
    }
    cardSetter({
      id: card.id,
      name: card.name,
      description: event.target.value,
      answer: card.answer,
      answerDescription: card.answerDescription,
    });
  }
    const handleAnswerEdit = (event) => {
      if (cardSetter == null) {
        return;
      }
      cardSetter({
        id: card.id,
        name: card.name,
        description: card.description,
        answer: event.target.value,
        answerDescription: card.answerDescription,
      });
    }
    const handleAnswerDescriptionEdit = (event) => {
      if (cardSetter == null) {
        return;
      }
      cardSetter({
        id: card.id,
        name: card.name,
        description: card.description,
        answer: card.answer,
        answerDescription: event.target.value,
      });
    }
//        id: 3,
//         name: "Word 3",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         answer: "Answer 3",
//         answerDescription: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  return (
    <>
      <Wrapper>
        <Header>
          <ButtonSpace onClick={onClose} className={"btn btn-primary"}><ButtonImg src={BackWhiteArrow}/></ButtonSpace>
          <Title>
            {cardOldName}
          </Title>
          <ButtonSpace onClick={onRemove} className={"btn btn-danger"}><ButtonImg src={TrashIcon}/></ButtonSpace>
        </Header>
        <ShortTextDiv>
          <LabelDiv>Card name</LabelDiv> <ShortTextArea value={card.name} onChange={handleNameEdit} />
        </ShortTextDiv>
        <LongTextDiv>
          <LabelDiv>Card description</LabelDiv> <LongTextArea value={card.description} onChange={handleDescriptionEdit} />
        </LongTextDiv>
        <div style={{"margin-top" : "20px"}}/>
        <ShortTextDiv>
          <LabelDiv>Answer</LabelDiv> <ShortTextArea value={card.answer} onChange={handleAnswerEdit} />
        </ShortTextDiv>

        <LongTextDiv>
          <LabelDiv>Answer description</LabelDiv> <LongTextArea value={card.answerDescription} onChange={handleAnswerDescriptionEdit} />
        </LongTextDiv>
        <BottomFoot>
          <FooterButton onClick={onClose} className={"btn btn-lg btn-primary"}>Save Changes</FooterButton>
        </BottomFoot>
      </Wrapper>

    </>
  );
}

export default CardEdit;
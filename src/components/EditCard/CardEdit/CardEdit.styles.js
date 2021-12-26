import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px;
  height: calc(100% - 40px);
  width: calc(100% - 40px);
`;

export const ButtonSpace = styled.button`
  border-radius: 15px;
  height: calc(100% - 20px);
  width: 12%;
  @media screen and (max-width: 470px) {
    width: 18%;
  }
`;

export const ButtonImg = styled.img`
  width: 100%;
  `;

export const Header = styled.div`
  height: 12%;
  width: 100%;
  font-size: 2em;
  display: flex;
  justify-content: center;
  vertical-align: center;
`

export const Title = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ShortTextArea = styled.textarea`
  background-color: var(--dark);
  margin-right:0;
  margin-left: auto;
  border-radius: 4px;
  border-style: solid;
  border-width: thin;
  width: 280px;
  height: 38px;
  outline: none;
  resize: none;
  @media screen and (max-width: 470px) {
    width: 170px;
  }
`;

export const ShortTextDiv = styled.div`
  margin-top: 10px;
  font-size: 19px;
  display:flex;
  vertical-align: center;


`

export const DivForm = styled.div`
  padding-top: 10px
`


export const LabelDiv = styled.div`
  @media screen and (max-width: 470px) {
    padding-top: 3px;
    font-size: 18px;
  }
`

export const LongTextDiv = styled.div`
  margin-top: 5px;
  font-size: 19px;
  margin-bottom: 5px;
`
export const LongTextArea = styled.textarea`
  background-color: var(--dark);
  border-radius: 4px;
  border-style: solid;
  border-width: thin;
  width: 100%;
  height: 76px;
  outline: none;
  resize: none;
`

export const LargeTextArea = styled.textarea`
  font-size: 19px;
  height: 84px;
`

export const Description = styled.div`
  height: 35%;
  width: 100%;
  font-size: 1.1em;
  @media screen and (max-width: 470px) {
    font-size: 1em;
  }
`;

export const ReviewElements = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 25%;
  width: 100%;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  `;

export const Element = styled.div`
  display: flex;
  `;

export const BottomFoot = styled.div`
  margin-top: 120px;
  margin-bottom: 10px;
  //height: 20%;
  width: 100%;
  `;

export const FooterButton = styled.button`;
  //margin-top: auto;
  //margin-bottom: 0;
  display: flex;
  height: 50px;
  width: 160px;
`;
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px;
  border-radius: 10px;
  display: flex;
  width: calc(100% - 20px);
  height: 60px;
  background-color: var(--dark);
  border-color: var(--white);
  -webkit-box-shadow: 0px 0px 50px -30px rgba(0,0,0,0.53);
  box-shadow: 0px 0px 50px -29px rgba(0,0,0,0.53);
`;

export const SelectedWrapper = styled.div`
  margin: 10px;
  border-radius: 10px;
  display: flex;
  width: calc(100% - 20px);
  height: 60px;
  background-color: var(--blue);
  border-color: var(--white);
  -webkit-box-shadow: 0px 0px 50px -30px rgba(0,0,0,0.53);
  box-shadow: 0px 0px 50px -29px rgba(0,0,0,0.53);
`;

export const DeckNameSpace = styled.div`
  font-size: 22px;
  padding: 10px;
  display: flex;
  height: 100%;
  width: 600px;
  margin-right: auto;
`;

export const ExpandSpace = styled.button`
  border-radius: 15px;
  height: 100%;
  width: 25%;
`;

export const ExpandImg = styled.img`
  padding: 10px;
  width: 100%;
  @media screen and (max-width: 470px) {
    padding: 0;
  }
`;
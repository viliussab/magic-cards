import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin: 40px 40px;
  width: calc(100% - 80px);
  height: calc(70% - 80px);
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const SelectBad = styled.div`
  font-size: 40px;
  font-weight: bold;
  border-width: thin;
  height: 620px;
  width: calc((100% - 470px)/2);
  border-style: solid;
  border-radius: 25px;
  border-color: var(--red);
  background-color: var(--red);
  opacity: 0.3;
  margin-left: 0;
  margin-right: auto;
  transition: 0.3s;
  &:hover{
    opacity: 0.8;
  }
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SelectGood = styled.div`
  font-size: 40px;
  font-weight: bold;  
  border-width: thin;
  width: calc((100% - 470px)/2);
  height: 620px;
  border-style: solid;
  border-radius: 25px;
  border-color: var(--green);
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 20px;
  background-color: var(--green);
  opacity: 0.3;
  transition: 0.3s;
  &:hover{
    opacity: 0.85;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardContainer = styled.div`
  border-radius: 25px;
  background: rgba(47,51,58,1);
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 20px;
  height: 620px;
  width: 470px;
  @media screen and (max-width: 470px) {
    width: 350px;
  }
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

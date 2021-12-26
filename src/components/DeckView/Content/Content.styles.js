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
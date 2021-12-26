import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 40px 40px;
  width: calc(100% - 80px);
  height: calc(70% - 80px);
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  &:hover {
    -webkit-box-shadow: 0px 0px 23px -8px #007BFF;
    box-shadow: 0px 0px 23px -8px #007BFF;
  }
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

export const CardHeader = styled.div`
  display: flex;
  font-size: 47px;
  border-radius: 25px;
  font-family: Impact,serif;
  padding: 20px 20px;
  background: rgba(43,47,55,1);
  height: 170px;
  @media screen and (max-width: 470px) {
    font-size: 35px;
  }
`;

export const CardUl = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 440px
`;

export const HeaderText = styled.div`
  height: 100%;
  width: 70%;
`;

export const HeaderImageDiv = styled.div`
  height: 100%;
  width: 30%;
  `;

export const HeaderImage = styled.img`
  width: 100%;
`;


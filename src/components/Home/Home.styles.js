import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    margin: 0px 0px 0px 0px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 10px 10px 10px 10px;
  height: 150px;
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

export const LogoWrapper = styled.div`
  float: left;
`;

export const LogoImage = styled.img`
  height: 130px;
  top: 0;
  bottom: 0;
  margin: auto;
  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 0;
  vertical-align: center;
`;

export const Button = styled.button`
  width: 100px;
  margin-left: 20px;
  @media screen and (max-width: 550px) {
    width: 80px;
    margin-left: 0px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 40px 40px;
  width: calc(100% - 80px);
  height: calc(70% - 80px);
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-end;
  
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentChild = styled.div`
  margin: auto;
  width: 50%;
  padding: 20px 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContImage = styled.img`
  padding: 0 10% 0 10%;
  width: 100%;
`;

export const TextSizeManager = styled.div`
  font-size: 16px;

  @media screen and (max-width: 1300px) {
    font-size: 13px;
  }
  @media screen and (max-width: 960px) {
    font-size: 11px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 630px) {
    font-size: 12px;
  }
  @media screen and (max-width: 550px) {
    font-size: 11px;
  }
`;

export const TextHeader = styled.div`
  font-size: 2.5em;
`;

export const TextContent = styled.div`
  padding: 10px 0px 10px 0px;
  font-weight: lighter;
  font-size: 1.5em;
`

export const TextInterest = styled.div`
  font-size: 2em;
`;


import styled from 'styled-components';


export const Wrapper = styled.div`
  font-size: 20px;
  display: flex;
  width: 100%;
  padding: 10px 10px 10px 10px;
  height: 120px;
  @media screen and (max-width: 1050px) {
    height: 80px;
  }
`;

export const AdditionalWrapper = styled.div`
  width: 100%;
  padding: 10px 10px 10px 10px;
  height: 80px;
  display: flex;
`

export const Image = styled.img`
  height: 100%;
`;

export const LogoDiv = styled.div`
  width: 350px;
  @media screen and (max-width: 1050px) {
    width: 35%;
  }
  @media screen and (max-width: 550px) {
    width: 15%;
  }
`;
export const UserImage = styled.img`
  top: 0;
  bottom: 0;
  padding: 10px 10px 10px 10px;
  height: 100%;
  @media screen and (max-width: 1050px) {
    padding: 0px;
  }
`;

export const MiddleSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const UserDiv = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  @media screen and (max-width: 1050px) {
    height: 60px;
    margin-left: auto;
    margin-right: 0;
    width: 65%;
  }
  @media screen and (max-width: 550px) {
    width: 85%;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const UserItem = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const UserItemButton = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  width: 120px;
  height: 100%;
`;


export const Button = styled.button`
  width: 100px;
  margin-right: 20px;
`;
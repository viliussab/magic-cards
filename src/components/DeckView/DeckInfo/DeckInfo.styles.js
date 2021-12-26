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
  margin-top: auto;
  margin-bottom: 10px;
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  vertical-align: center;
  `;

export const FooterButton = styled.div`
  margin-top: auto;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  vertical-align: center;
  height: 50px;
  width: 100px;
`;
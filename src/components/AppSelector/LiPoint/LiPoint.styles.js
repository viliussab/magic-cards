import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  background: var(--dark-grey);
`

export const PointDiv = styled.div`
  height: 100%;
  width: 20%;
  `;

export const Point = styled.img`
  padding: 10px;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 1.5rem;
  @media screen and (max-width: 470px) {
    font-size: 1.2rem;
  }
  `;
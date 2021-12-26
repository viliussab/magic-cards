import React from 'react';
// Routing
import { Link } from 'react-router-dom';
// Components
import {Point, PointDiv, Text, Wrapper} from "./LiPoint.styles";

import Arrow from "../../../images/ListItem.png";

const LiPoint = ( {text} ) => {
  return (
    <>
      <Wrapper>
        <PointDiv><Point src={ Arrow }/></PointDiv>
        <Text>
          {text}
        </Text>
      </Wrapper>
    </>
  );
}

export default LiPoint;
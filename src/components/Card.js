/*
  Card component, which encompasses all components on the page.
*/

import styled from "styled-components";

const Card = styled.div.attrs({
  margin: props => props.margin || "0.3rem 0",
  padding: props => props.padding || "2rem 3rem"
})`
  background: var(--white);
  padding: ${props => props.padding};
  width: 100%;
  margin: ${props => props.margin};
`;

export default Card;

import styled from "styled-components";

const Card = styled.div.attrs({
  margin: props => props.margin || "0.3rem 0"
})`
  background: var(--white);
  padding: 2rem 3rem;
  width: 100%;
  margin: ${props => props.margin};
`;

export default Card;

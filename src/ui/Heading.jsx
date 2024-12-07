import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;
const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-weight: 600;
      font-size: 3rem;
    `};
  ${(props) =>
    props.type === "h2" &&
    css`
      font-weight: 600;
      font-size: 3rem;
    `};
  ${(props) =>
    props.type === "h3" &&
    css`
      font-weight: 500;
      font-size: 2rem;
    `};
  ${(props) =>
    props.as === "h4" &&
    css`
      font-weight: 600;
      font-size: 3rem;
      text-align: center;
    `};
`;
export default Heading;

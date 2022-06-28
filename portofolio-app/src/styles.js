import styled from "styled-components";

export const StyledAbout = styled.div`
  border: 1px solid yellow;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: black;
`;

export const StyledDescription = styled.div`
  border: 1px solid blue;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  border: 1px solid green;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
  border: 1px solid purple;
`;

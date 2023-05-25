import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flexbox;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Annoucement = () => {
  return <Container>¡Adentrate y viaja a tu siguiente aventura...!</Container>;
};

export default Annoucement;

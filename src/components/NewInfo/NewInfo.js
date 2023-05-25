import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: teal;
`;
const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const Cont = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const NewInfo = () => {
  return (
    <Container>
      <Title>¡No te pierdas nada!</Title>
      <Description>
        Suscríbete a nuestro boletín y mantente al día de todas las novedades.
      </Description>
      <Cont>
        <Input placeholder="Ingresa tu email" />
        <Button>
          <SendIcon />
        </Button>
      </Cont>
    </Container>
  );
};

export default NewInfo;

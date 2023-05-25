import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Descripcion = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flexbox;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flexbox;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flexbox;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flexbox;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Descripcion>
          ¿Buscas una Librería que tenga gran variedad de libros al mejor
          precio?, llegaste al lugar indicado, en nuestra librerpía encontraras
          la más amplia variedad de libros en distintos formatos para que no te
          limites y descubras las nuevas historias que los mejores autores del
          mundo tienen por contarte. No te pierdas de tu próxima gran aventura
          literaria.
        </Descripcion>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Categorías</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Mundo Infantil</ListItem>
          <ListItem>Libros Académicos</ListItem>
          <ListItem>Literatura Juvenil</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Medellín, Colombia
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +57 (304) 434 75 52
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> Onlylibrary@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

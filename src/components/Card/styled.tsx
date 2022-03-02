import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  padding: 24px;
  margin: 50px 0;
  border-radius: 4px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #567983;
  text-transform: capitalize;
  font-size: 32px;
  margin: 0;
  font-family: "Marck Script", cursive;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 200px;
  height:200px;
  margin: auto;
`;

const Subtitle = styled.p`
  font-family: "Marck Script", cursive;
  font-size: 18px;
  font-weight: 600;
  color: #508ccb;
  display: flex;
  align-items:center;
  margin: 0 0 10px 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const ItemList = styled.li`
  list-style: none;
  color: #6b6d70;
  font-weight: 500;
  display: flex;
  align-items: center;
  line-height: 20px;
`;

const IconLeft = styled.span`
  margin-right: 8px;
`;

const IconRight = styled.span`
  margin-left: 8px;
`;

export {
  Container,
  Content,
  Category,
  Row,
  Header,
  Title,
  Image,
  Subtitle,
  List,
  ItemList,
  IconLeft,
  IconRight,
};
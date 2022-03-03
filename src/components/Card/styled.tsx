import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: auto;
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
  font-size: 36px;
  margin: 0;
  font-family: "Marck Script", cursive;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  margin-bottom: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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

const Chip = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
  opacity: 0.6;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 32px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

const ListGrid = styled.ul`
  width: max-content;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 10px;
`;

const TypeIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
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
  Chip,
  ListGrid,
  TypeIcon,
};
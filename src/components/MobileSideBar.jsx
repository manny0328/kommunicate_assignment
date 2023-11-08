import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 0.5;
  height: 100%;
  display: grid;
  place-items: start;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  display: none;
  ${mobile({
    display: "block",
    height: "200px",
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: "2",
    borderBottomLeftRadius: "0",
    borderTopLeftRadius: "0",
  })}
`;
const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  border-radius: 10px;
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  ${mobile({
    width: "100%",
    height: "200px",
    borderRadius: "0",
    backgroundImage: "url(/images/bg-sidebar-mobile.svg)",
    backgroundSize: "cover",
    objectFit: "fill",
  })}
`;
const BoxContainer = styled.div`
  width: 195px;
  height: 330px;
  padding: 1.3rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${mobile({
    width: "220px",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "2rem",
  })}
`;
const Boxes = styled.div`
  width: 100%;
  height: 50px;
  padding: 0.45rem 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: ${(props) => (props.active ? "none" : "1px solid white")};
  color: ${(props) => (props.active ? "#000000" : "#fff")};
  font-family: "ubuntu", sans-serif;
  background-color: ${(props) =>
    props.active ? "#79d5ff" : "rgba(0, 0, 0, 0)"};

  ${mobile({
    width: "35px",
    height: "35px",
  })}
`;

const MobileSideBar = ({ step }) => {
  const itemsArr = [
    {
      itemNum: "1",
    },
    {
      itemNum: "2",
    },
    {
      itemNum: "3",
    },
    {
      itemNum: "4",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <BoxContainer>
          {itemsArr.map((items, index) => (
            <Boxes key={items.itemNum}>
              <ItemNumber active={index === step}>{items.itemNum}</ItemNumber>
            </Boxes>
          ))}
        </BoxContainer>
      </Wrapper>
    </Container>
  );
};

export default MobileSideBar;

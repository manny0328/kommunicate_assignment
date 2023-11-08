import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 0.5;
  height: 100%;
  display: grid;
  place-items: start;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  ${mobile({
    display: "none",
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
`;
const BoxContainer = styled.div`
  width: 195px;
  height: 330px;
  padding: 1.3rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
`;
const Info = styled.div`
  flex: 1;
  height: 100%;
  color: white;
  font-size: 0.87rem;
  font-family: "ubuntu", sans-serif;
`;

const SideBar = ({ step, isMobileWidth }) => {
  const itemsArr = [
    {
      itemNum: "1",
      info: "YOUR INFO",
    },
    {
      itemNum: "2",
      info: "SELECT PLAN",
    },
    {
      itemNum: "3",
      info: "ADD-ONS",
    },
    {
      itemNum: "4",
      info: "SUMMARY",
    },
  ];

  return (
    <Container
      className={isMobileWidth ? "" : "animate__animated animate__fadeInUpBig"}
    >
      <Wrapper>
        <BoxContainer>
          {itemsArr.map((items, index) => (
            <Boxes key={items.itemNum}>
              <ItemNumber active={index === step}>{items.itemNum}</ItemNumber>
              <Info>
                <p>
                  <small style={{ fontSize: "0.65rem", color: "#c7c7c7" }}>
                    STEP {items.itemNum}
                  </small>
                </p>
                <p style={{ fontWeight: "500" }}>{items.info}</p>
              </Info>
            </Boxes>
          ))}
        </BoxContainer>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

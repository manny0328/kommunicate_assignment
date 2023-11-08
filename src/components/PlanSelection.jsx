import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import "../App.css";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 2;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    marginTop: "0rem",
    padding: "1.1rem 1rem",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  ${mobile({})}
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    color: #6b6b6b;
    ${mobile({
      fontSize: "0.95rem",
    })}
  }
  h1 {
    ${mobile({
      fontSize: "1.8rem",
    })}
  }
`;

const RadioBoxes = styled.div`
  flex: 1;
  display: flex;
  gap: 1.1rem;
  margin-bottom: 20px;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Boxes = styled.div`
  width: 140px;
  height: 170px;
  overflow: hidden;
  border-radius: 10px;
  padding: 0 0.7rem;
  border: 1px solid #bcbcbc;
  ${({ isSelected }) => isSelected && "border-color: blue;"}
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  ${mobile({
    width: "100%",
    height: "72px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: "0.6rem 0.8rem",
  })}
`;

const SubSelectButton = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: aliceblue;
  display: grid;
  place-items: center;
`;
const Subscriptions = styled.div`
  display: flex;
  gap: 10px;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  ${mobile({
    width: "40px",
    height: "40px",
  })}
`;
const Text = styled.div`
  width: 100%;
  height: 75px;
  line-height: 24px;
  ${mobile({
    width: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    lineHeight: "20px",
  })}
  h4 {
    font-weight: 550;
    color: hsl(213, 96%, 18%);
    ${mobile({
      fontSize: "0.9rem",
    })}
  }
  p {
    font-size: 0.9rem;
    color: #686868;
    ${mobile({
      fontSize: "0.85rem",
    })}
  }
  small {
    font-size: 0.75rem;
    font-weight: 500;
    color: hsl(213, 96%, 18%);
  }
`;

const Span = styled.span`
  &:before {
    position: absolute;
    content: "";
    height: 0.85em;
    width: 0.85em;
    border-radius: 20px;
    left: 0.15em;
    bottom: 0.146em;
    background-color: #ffffff;
    transition: 0.4s;
  }
  ${(props) =>
    props.checked &&
    css`
      &:before {
        transform: translateX(0.98em);
        background-color: #fff;
      }
    `}
`;

const Monthly = styled.p`
  color: ${(props) => props.color};
`;
const Yearly = styled.p`
  color: ${(props) => props.color};
`;

const PlanSelection = ({
  formData,
  handleChange,
  billingCycle,
  handleBillingChange,
}) => {
  const [check, setCheck] = useState(
    localStorage.getItem("isChecked") === "true"
  );
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(
    localStorage.getItem("selected")
      ? Number(localStorage.getItem("selected"))
      : null
  );
  //
  const { plan } = formData;

  const handleBoxClick = (index) => {
    setSelectedBoxIndex(index);
  };

  useEffect(() => {
    // Get the value of the `check` state from localStorage
    const storedCheck = localStorage.getItem("check");
    // If the value is not null or undefined, update the `check` state
    if (storedCheck !== null && storedCheck !== undefined) {
      setCheck(storedCheck === true);
    }
  }, []);

  useEffect(() => {
    const SavedSelectedIndex = localStorage.getItem("select");
    if (SavedSelectedIndex) {
      setSelectedBoxIndex(Number(SavedSelectedIndex));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isChecked", check);
  }, [check]);

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selectedBoxIndex));
  }, [selectedBoxIndex]);

  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>Select Your Plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </Title>
        <RadioBoxes>
          {billingCycle === "monthly" ? (
            <>
              <Boxes
                isSelected={selectedBoxIndex === 0}
                onClick={() => handleBoxClick(0)}
              >
                <Icon url={"/images/icon-arcade.svg"}></Icon>
                <Text>
                  <input
                    className="inputBox"
                    type="radio"
                    name="plan"
                    id="arcade"
                    value="arcade"
                    checked={plan === "arcade"}
                    onChange={handleChange}
                  />
                  <h4>Arcade</h4>
                  <p>$9/mo</p>
                </Text>
              </Boxes>
              <Boxes
                isSelected={selectedBoxIndex === 1}
                onClick={() => handleBoxClick(1)}
              >
                <Icon url={"/images/icon-advanced.svg"}></Icon>
                <Text>
                  <input
                    className="inputBox"
                    type="radio"
                    name="plan"
                    id="advanced"
                    value="advanced"
                    checked={plan === "advanced"}
                    onChange={handleChange}
                  />
                  <h4>Advanced</h4>
                  <p>$12/mo</p>
                </Text>
              </Boxes>
              <Boxes
                isSelected={selectedBoxIndex === 2}
                onClick={() => handleBoxClick(2)}
              >
                <Icon url={"/images/icon-pro.svg"}></Icon>
                <Text>
                  <input
                    className="inputBox"
                    type="radio"
                    name="plan"
                    id="pro"
                    value="pro"
                    checked={plan === "pro"}
                    onChange={handleChange}
                  />
                  <h4>Pro</h4>
                  <p>$15/mo</p>
                </Text>
              </Boxes>
            </>
          ) : (
            <>
              <Boxes
                isSelected={selectedBoxIndex === 0}
                onClick={() => handleBoxClick(0)}
              >
                <Icon url={"/images/icon-arcade.svg"}></Icon>
                <Text>
                  <input
                    className="inputBox"
                    type="radio"
                    name="plan"
                    id="arcade"
                    value="arcade"
                    checked={plan === "arcade"}
                    onChange={handleChange}
                  />
                  <h4>Arcade</h4>
                  <p>$90/yr</p>
                  <small>2 Months Free</small>
                </Text>
              </Boxes>
              <Boxes
                isSelected={selectedBoxIndex === 1}
                onClick={() => handleBoxClick(1)}
              >
                <Icon url={"/images/icon-advanced.svg"}></Icon>
                <Text>
                  <input
                    className="inputBox"
                    type="radio"
                    name="plan"
                    id="advanced"
                    value="advanced"
                    checked={plan === "advanced"}
                    onChange={handleChange}
                  />
                  <h4>Advanced</h4>
                  <p>$120/yr</p>
                  <small>2 Months Free</small>
                </Text>
              </Boxes>
              <Boxes
                isSelected={selectedBoxIndex === 2}
                onClick={() => handleBoxClick(2)}
              >
                <Icon url={"/images/icon-pro.svg"}></Icon>
                <Text>
                  <input
                    className="inputBox"
                    type="radio"
                    name="plan"
                    id="pro"
                    value="pro"
                    checked={plan === "pro"}
                    onChange={handleChange}
                  />
                  <h4>Pro</h4>
                  <p>$150/yr</p>
                  <small>2 Months Free</small>
                </Text>
              </Boxes>
            </>
          )}
        </RadioBoxes>
        <SubSelectButton>
          <Subscriptions>
            <Monthly color={check ? "#686868" : "hsl(213, 96%, 18%)"}>
              <b>Monthly</b>
            </Monthly>
            <div className="checkbox-wrapper-64">
              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked={check}
                  name="billingCycle"
                  value={billingCycle}
                  onClick={handleBillingChange}
                />
                <Span
                  onClick={() => setCheck(!check)}
                  checked={check}
                  className="slider"
                ></Span>
              </label>
            </div>
            <Yearly color={check ? "hsl(213, 96%, 18%)" : "#686868"}>
              <b>Yearly</b>
            </Yearly>
          </Subscriptions>
        </SubSelectButton>
      </Wrapper>
    </Container>
  );
};

export default PlanSelection;

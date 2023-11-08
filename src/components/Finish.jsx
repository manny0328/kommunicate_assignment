import { useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 2;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    marginTop: "0.5rem",
    padding: "0 1rem",
  })}
`;
const Wrapper = styled.div`
  width: 79%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  ${mobile({
    width: "100%",
  })}
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    color: #6b6b6b;
    ${mobile({
      lineHeight: "25px",
      fontSize: "0.95rem",
    })}
  }
  h1 {
    ${mobile({
      fontSize: "1.8rem",
    })}
  }
`;

const BoxContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 10px;
`;
const Box = styled.div`
  background-color: #00800023;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  flex: 1;
  ${mobile({})}
`;
const Total = styled.div`
  flex: 0.4;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "1rem 0",
  })}
`;
const SelectedPlan = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
  p {
    font-size: 0.9rem;
    text-decoration: underline;
    color: #323131;
  }
`;

const Items = styled.div`
  h4 {
    color: hsl(213, 96%, 18%);
  }
`;
const AddOns = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
`;
const Price = styled.div`
  color: hsl(213, 96%, 18%);
  font-size: 0.9rem;
`;
const Hr = styled.hr`
  height: 0.5px;
  border: none;
  background-color: #636363c3;
`;
const Desc = styled.p`
  font-size: 0.85rem;
  color: #454545;
`;

const Finish = ({ formData, billingCycle, navigation, setData }) => {
  const { plan, addons } = formData;

  const planPrices = {
    "arcade-monthly": 9,
    "advanced-monthly": 12,
    "pro-monthly": 15,
    "arcade-yearly": 90,
    "advanced-yearly": 120,
    "pro-yearly": 150,
  };
  const planPrice = planPrices[`${plan}-${billingCycle}`];

  const onlineServicePrice = billingCycle === "monthly" ? 1 : 10;
  const largerStoragePrice = billingCycle === "monthly" ? 2 : 20;
  const customizePrice = billingCycle === "monthly" ? 2 : 20;

  const total = Object.entries(addons).reduce((acc, [addon, isSelected]) => {
    const addonPrice = isSelected
      ? addon === "onlineService"
        ? onlineServicePrice
        : addon === "largerStorage"
        ? largerStoragePrice
        : customizePrice
      : 0;
    return acc + addonPrice;
  }, planPrices[`${plan}-${billingCycle}`]);

  const selectedOnlineServicePrice = addons.onlineService
    ? onlineServicePrice
    : 0;
  const selectedCustomizePrice = addons.customize ? customizePrice : 0;
  const selectedLargerStoragePrice = addons.largerStorage
    ? largerStoragePrice
    : 0;

  useEffect(() => {
    setData({
      planFee: planPrice,
      total: total,
      addOnPrice: {
        onlineService: selectedOnlineServicePrice,
        customize: selectedCustomizePrice,
        largerStorage: selectedLargerStoragePrice,
      },
    });
  }, [
    plan,
    total,
    selectedOnlineServicePrice,
    selectedCustomizePrice,
    selectedLargerStoragePrice,
    planPrice,
    setData,
  ]);

  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>Finishing Up</h1>
          <p>Double check everything looks OK before confirming.</p>
        </Title>
        <BoxContainer>
          <Box>
            <SelectedPlan>
              <div>
                <Items>
                  <h4>
                    <span style={{ textTransform: "capitalize" }}>{plan}</span>{" "}
                    ({billingCycle})
                  </h4>
                </Items>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => navigation.go(1)}
                >
                  Change
                </p>
              </div>
              <Items style={{ color: "hsl(213, 96%, 18%)", fontWeight: "550" }}>
                {`$${planPrice}/${billingCycle === "monthly" ? "mo" : "yr"}`}
              </Items>
            </SelectedPlan>
            <Hr />
            <AddOns>
              <Items>
                <Desc>{addons.onlineService && "Online Services "}</Desc>
                <Desc>{addons.largerStorage && "Larger Storage "}</Desc>
                <Desc>{addons.customize && "Customize "}</Desc>
              </Items>
              <Price>
                <p>
                  {addons.onlineService &&
                    `$${onlineServicePrice}/${
                      billingCycle === "monthly" ? "mo" : "yr"
                    }`}
                </p>
                <p>
                  {addons.largerStorage &&
                    `$${largerStoragePrice}/${
                      billingCycle === "monthly" ? "mo" : "yr"
                    }`}
                </p>
                <p>
                  {addons.customize &&
                    `$${customizePrice}/${
                      billingCycle === "monthly" ? "mo" : "yr"
                    }`}
                </p>
              </Price>
            </AddOns>
          </Box>
          <Total>
            <Desc style={{ fontSize: "1rem" }}>
              Total (per {billingCycle === "monthly" ? "month" : "year"})
            </Desc>
            <Price style={{ fontSize: "1.3rem", fontWeight: "550" }}>
              {`+$${total}/${billingCycle === "monthly" ? "mo" : "yr"}`}
            </Price>
          </Total>
        </BoxContainer>
      </Wrapper>
    </Container>
  );
};

export default Finish;

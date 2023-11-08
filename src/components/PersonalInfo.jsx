import styled from "styled-components";
import "../App.css";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 2;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${mobile({
    flex: "1",
    position: "relative",
    zIndex: "3",
    marginTop: "0rem",
    padding: "1.5rem 1rem",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;
const Title = styled.div`
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

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: hsl(213, 96%, 18%);
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  color: #bd0f0f;
  font-size: 0.85rem;
  font-weight: 500;
`;

const TextField = styled.input`
  width: 100%;
  height: 45px;
  padding: 12px;
  border-radius: 8px;
  border: 1.5px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
  ${mobile({
    marginBottom: "5px",
  })}
  &:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    border: 2px solid #19a7ce;
  }
`;

const PersonalInfo = ({ formData, handleChange, errors }) => {
  const { userName, phoneNum, email } = formData;

  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </Title>
        <Box>
          <Text>
            <label htmlFor="userName">Name:</label>{" "}
            {errors.userName && (
              <Span className="error">{errors.userName}</Span>
            )}
          </Text>
          <TextField
            required
            autoComplete="off"
            type={"text"}
            placeholder="e.g. virat kohli"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Text>
            <label htmlFor="email">Email Address:</label>
            {errors.email && <Span className="error">{errors.email}</Span>}
          </Text>
          <TextField
            required
            autoComplete="off"
            type={"email"}
            placeholder="e.g. viratkohli@gmail.com"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Text>
            <label htmlFor="phoneNum">Phone Number:</label>
            {errors.phoneNum && (
              <Span className="error">{errors.phoneNum}</Span>
            )}
          </Text>
          <TextField
            required
            autoComplete="off"
            type={"number"}
            placeholder="e.g. +9966332255"
            id="phoneNum"
            name="phoneNum"
            value={phoneNum}
            onChange={handleChange}
          />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default PersonalInfo;

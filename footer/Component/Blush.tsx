import React from "react";
import styled from "styled-components";
import {
  AiFillInstagram,
  AiOutlineDown,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FiFigma } from "react-icons/fi";
import img from "./Asset/blush.png";

const Blush = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <Box>
            <h6>Bush</h6>
            <Nav>Pricing Plans</Nav>
            <Nav>About</Nav>
            <Nav>
              English
              <Icon>
                <AiOutlineDown />
              </Icon>
            </Nav>
          </Box>
          <Box>
            <Nav>Teams</Nav>
            <Nav>Blog</Nav>
            <Nav>Become an llustrator </Nav>
          </Box>
          <Box>
            <Nav>
              <FiFigma />
              Figma Plugin
            </Nav>
            <Nav>Sketch Plugin</Nav>
          </Box>
        </Div1>
        <Div2>
          <Icon>
            <AiFillInstagram />
          </Icon>
          <Icon>
            <AiOutlineTwitter />
          </Icon>
        </Div2>
      </Wrapper>
      <Div3>
        <Copyrg>© Blush Design Inc. All rights reserved.</Copyrg>
        <Teams>
          <Text>Terms of Service</Text>
          <Text>Privacy Policy</Text>
        </Teams>
        <Imag src={img} />
      </Div3>
      <Question>?</Question>
    </Container>
  );
};

export default Blush;

const Question = styled.div`
  :hover {
    border: 2px solid rgb(0, 94, 255);
  }
  position: absolute;
  cursor: pointer;
  bottom: 10%;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Imag = styled.img`
  object-fit: contain;
  width: 200px;
  height: 100px;
  margin-top: 10px;
  margin-left: 400px;
`;

const Copyrg = styled.div`
  font-size: 14px;
  margin-left: 123px;
  font-weight: 400;
  color: rgb(0, 0, 0, 0.6);
`;
const Teams = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 50px;
`;
const Text = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 10px;
  width: 120px;
  color: rgb(0, 0, 0, 0.7);

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Div3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Icon = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div1 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 150px;
  color: rgb(0, 0, 0, 0.7);

  h6 {
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 700;
    color: rba(0, 0, 0);
  }
`;

const Nav = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 10px;
  width: 150px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Div2 = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

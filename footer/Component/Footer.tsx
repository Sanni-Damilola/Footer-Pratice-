import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Firstdiv>
          <Logo />
          <p>
            We are the leading TECH EDUCATION company with students from over 30
            countries and a leading UK accreditation to deliver the best digital
            workforce training.
          </p>
          <Icons>
            <BsFacebook />
          </Icons>
        </Firstdiv>
        <Seconddiv>
          <Box>
            <h6>i m donre</h6>
            <Nav>wassup</Nav>
            <Nav>wassup</Nav>
            <Nav>wassup</Nav>
          </Box>
        </Seconddiv>
        <br />
        <br />
        <br />

        <Copyrg>
          <span>© 2022 Utiva. All right reserved.</span>
        </Copyrg>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Box = styled.div``;
const Copyrg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
  padding-bottom: 20px;
  font-size: 13px;
  color: rgb(129, 132, 141);
  transition: all 400ms;

  :hover {
    color: orange;
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #f0f5ff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  flex-wrap: wrap;
`;
const Firstdiv = styled.div`
  width: 300px;
  margin-top: 40px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(30, 32, 39);
`;
const Seconddiv = styled.div`
  margin-top: 20px;
  width: 67%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;
const Logo = styled.img``;
const p = styled.p``;
const Icons = styled.div`
  color: #000269;
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

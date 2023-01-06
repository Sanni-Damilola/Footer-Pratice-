import React from "react";
import styled from "styled-components";
import img from "./Asset/logo.silver1.png";
import img1 from "./Asset/google-play.svg";

const Netnaija = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <Logo src={img} />
          <Logo src={img1} />
        </Div1>
        <Div2>
          <Box>
            <h1>Link</h1>
            <Green_line></Green_line>
            <Nav>
              <span>Sabishare</span>
            </Nav>
            <Nav>Torizone</Nav>
            <Nav>Emmanuel Analike</Nav>
            <Nav>Pitakwa360</Nav>
          </Box>
          <Box>
            <h1>Social Media</h1>
            <Pink_line></Pink_line>
            <Nav>Facebook</Nav>
            <Nav>Twitter</Nav>
            <Nav>Instagram</Nav>
            <Nav>Telegram</Nav>
          </Box>
          <Box>
            <h1>Resources</h1>
            <Orange_line></Orange_line>
            <Nav>Login</Nav>
            <Nav>Sign Up</Nav>
            <Nav>Contact Us</Nav>
            <Nav>Advertise</Nav>
            <Nav>Privacy Policy</Nav>
            <Nav>DMCA Takedown</Nav>
          </Box>
        </Div2>
        <Copyrg>
          <span>© 2022 Netnaija</span>
        </Copyrg>
      </Wrapper>
    </Container>
  );
};

export default Netnaija;

const Copyrg = styled.div`
  width: 100%;
  font-size: 17px;
  color: rgb(153, 153, 153);
  font-weight: 500;
  cursor: pointer;

  span{
    margin-left: 40px;
  }
`;

const Nav = styled.div`
  font-size: 17px;
  color: rgb(153, 153, 153);
  font-weight: 500;
  cursor: pointer;
  padding-bottom: 15px;
`;

const Container = styled.div`
  width: 100%;
  background-color: #3d3d3d;
  height: 400px;
`;

const Div1 = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 40px;
`;
const Div2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 65%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Logo = styled.img`
  width: 200px;
  object-fit: contain;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;
`;

const Box = styled.div`
  margin-top: 20px;
  flex-direction: column;
  color: rgb(153, 153, 153);
  justify-content: center;

  /* align-items: center; */
`;

const Green_line = styled.div`
  width: 100px;
  margin-bottom: 5px;
  height: 1px;
  background-color: rgb(12, 216, 117);
  color: transparent;
`;
const Pink_line = styled.div`
  width: 100px;
  margin-bottom: 5px;
  height: 1px;
  background-color: rgb(216, 12, 212);
  color: transparent;
`;
const Orange_line = styled.div`
  width: 100px;
  margin-bottom: 5px;
  height: 1px;
  background-color: rgb(216, 117, 12);
  color: transparent;
`;

import React from "react";
import styled from "styled-components";
import img from "./Asset/git.png";
import { TfiWorld, TfiYoutube } from "react-icons/tfi";
import { AiFillCaretDown, AiFillLinkedin } from "react-icons/ai";
import { GrFacebook, GrTwitter } from "react-icons/gr";

const Vercel_footer = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <Logo src={img} />
        </Div1>
        <Div2>
          <Text_wrapper>
            <h5>PRODUCTS</h5>
            <Nav>Jira Software</Nav>
            <Nav>Jira Align</Nav>
            <Nav>Jira Service Management</Nav>
            <Nav>Confluence</Nav>
            <Nav>Trello</Nav>
            <Nav>Bitbucket</Nav>
            <h6>View all products</h6>
          </Text_wrapper>
          <Text_wrapper>
            <h5>RESOURCES</h5>

            <Nav>Technical Support</Nav>
            <Nav>Purchasing & licensing</Nav>
            <Nav>Atlassian Community</Nav>
            <Nav>Knowledge base</Nav>
            <Nav>Marketplace</Nav>
            <Nav>My Account</Nav>
            <h6>Create support ticket</h6>
          </Text_wrapper>
          <Text_wrapper>
            <h5>EXPAND & LEARN</h5>

            <Nav>Partners</Nav>
            <Nav>Training & Certification</Nav>
            <Nav>Documentation</Nav>
            <Nav>Developer Resources</Nav>
            <Nav>Enterprise services</Nav>
            <h6>View all resources</h6>
          </Text_wrapper>
          <Text_wrapper>
            <h5>ABOUT ATLASSIAN</h5>

            <Nav>Company</Nav>
            <Nav>Careers</Nav>
            <Nav>Events</Nav>
            <Nav>Blogs</Nav>
            <Nav>Investor Relations</Nav>
            <Nav>Trust & Security</Nav>
            <h6>Contact us</h6>
          </Text_wrapper>
        </Div2>

        <Div3>
          <System>
            <Monitor>
              <TfiWorld />
            </Monitor>
            <span>English</span>
            <Up_and_Down>
              <AiFillCaretDown />
            </Up_and_Down>
          </System>
          <Git>
            <Text>Privacy policy</Text>
            <Text>Terms</Text>
            <Text>Impressum</Text>
          </Git>
          <Copyry>Copyright © 2022 Atlassian</Copyry>
          <Status>
            <Facebook>
              <GrFacebook />
            </Facebook>
            <Twiter>
              <GrTwitter />
            </Twiter>
            <Linkdin>
              <AiFillLinkedin />
            </Linkdin>
            <Youtube>
              <TfiYoutube />
            </Youtube>
          </Status>
        </Div3>
      </Wrapper>
    </Container>
  );
};

export default Vercel_footer;

const Facebook = styled.div`
  color: rgb(60, 90, 153);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;
const Twiter = styled.div`
  color: rgb(96, 169, 220);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;
const Linkdin = styled.div`
  color: #016699;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;
const Youtube = styled.div`
  color: rgb(66, 82, 110);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgb(0, 0, 0, 0.7);

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const S = styled.span`
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  span {
    margin-left: 10px;
  }
  color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  :hover {
    background-color: rgb(0, 112, 243);
  }
`;
const D = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  :hover {
    background-color: rgb(0, 112, 243);
  }
`;
const L = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.5);
  :hover {
    background-color: rgb(0, 112, 243);
  }
`;

const Up_and_Down = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 1px;
`;

const Monitor = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyry = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(0, 0, 0, 0.7);
`;
const Git = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;
const Status = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  color: blue;
`;

const System = styled.div`
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  padding: 0px 10px 0px 10px;
  width: 100px;
  display: flex;
  justify-content: center;
  height: 29px;
  align-items: center;
  color: rgb(0, 0, 0, 0.7);
`;
const Span = styled.span`
  color: rgb(0, 0, 0, 0.7);
  font-weight: 400;
  font-size: 13px;
`;

const Switch = styled.div`
  width: 5px;
  height: 22px;
  flex-direction: column;

  cursor: pointer;
`;

const Div3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Container = styled.div`
  width: 100%;
  background-color: rgb(244, 245, 247);
  display: flex;
  justify-content: center;
`;

const Icon = styled.nav`
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text_wrapper = styled.div`
  margin-top: 16px;
  h5 {
    font-size: 15px;
    font-weight: 900;
    color: rba(66, 82, 110);
  }

  h6 {
    color: rgb(0, 82, 204);
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const Nav = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 10px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 250px;
  height: 100px;
  object-fit: cover;
`;
const Div1 = styled.div``;
const Div2 = styled.div`
  color: rgb(0, 0, 0, 0.7);
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

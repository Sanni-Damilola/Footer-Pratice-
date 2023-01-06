import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import img from "./Asset/logo.png";
import { BiExit, BiChevronDown } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const Vercel_footer = () => {
  const on: any = useRef();
  const off: any = useRef();
  const system: any = useRef();
  const display: any = useRef();
  const bacg_dark: any = useRef();
  const color_ref: any = useRef();
  const color1_ref: any = useRef();
  const color2_ref: any = useRef();

  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);

  const arr: string[] = ["none", "block"];
  const border: string[] = ["white", "2px solid black"];
  const color: string[] = ["", "rgb(136,136,136)"];
  const color1: string[] = ["", "rgb(136,136,136)"];
  const color2: string[] = ["", "white"];
  const bg: string[] = ["", "rgb(17,17,17)"];

  const add = () => {
    setcount(count + 1);
  };

  const add_dark = () => {
    setcount1(count1 + 1);
  };

  useEffect(() => {
    display.current.style.display = arr[count % arr.length];
    system.current.style.border = border[count % border.length];
  });

  useEffect(() => {
    bacg_dark.current.style.backgroundColor = bg[count1 % bg.length];
    color_ref.current.style.color = color[count1 % color.length];
    color1_ref.current.style.color = color1[count1 % color1.length];
    color2_ref.current.style.color = color2[count1 % color2.length];
  });

  return (
    <Container ref={bacg_dark}>
      <Wrapper>
        <Div1>
          <Logo src={img} />
        </Div1>
        <Div2 ref={color_ref}>
          <Text_wrapper ref={bacg_dark}>
            <h5>Frameworks</h5>
            <Nav>Next.js</Nav>
            <Nav>Create React App</Nav>
            <Nav>Svelte</Nav>
            <Nav>Nuxt</Nav>
            <Nav>Gatsby</Nav>
            <Nav>Vue</Nav>
            <Nav>Angular</Nav>
            <Nav>More Frameworks</Nav>
          </Text_wrapper>
          <Text_wrapper ref={bacg_dark}>
            <h5>Resources</h5>

            <Nav>Documentation</Nav>
            <Nav>Experts</Nav>
            <Nav>Customers</Nav>
            <Nav>Guides</Nav>
            <Nav>Help</Nav>
            <Nav>API Reference</Nav>
            <Nav>OSS</Nav>
            <Nav>Command-Line</Nav>
            <Nav>Integrations</Nav>
          </Text_wrapper>
          <Text_wrapper ref={bacg_dark}>
            <h5>Company</h5>

            <Nav>Home</Nav>
            <Nav>Blog</Nav>
            <Nav>Changelog</Nav>
            <Nav>About</Nav>
            <Nav>Careers</Nav>
            <Nav>Pricing</Nav>
            <Nav>Enterprise</Nav>
            <Nav>Security</Nav>
            <Nav>
              Next.js Conf
              <Icon>
                <BiExit />
              </Icon>
            </Nav>
            <Nav>Partners</Nav>
            <Nav>Contact Us</Nav>
          </Text_wrapper>
          <Text_wrapper ref={bacg_dark}>
            <h5>Legal</h5>

            <Nav>Privacy Policy</Nav>
            <Nav>Terms of Service</Nav>
            <Nav>Trademark Policy</Nav>
            <Nav>Inactivity Policy</Nav>
            <Nav>DMCA Policy</Nav>
            <Nav>Support Terms</Nav>
            <Nav>DPA</Nav>
            <Nav>SLA</Nav>
            <Nav>Sub-processors</Nav>
            <Nav>Cookie Preferences</Nav>
            <Nav>Event Terms and Conditions</Nav>
            <Nav>Job Applicant Privacy Notice</Nav>
          </Text_wrapper>
        </Div2>

        <Div3 ref={color1_ref}>
          <Copyry>Copyright © 2022 Vercel Inc. All rights reserved</Copyry>
          <Git ref={color1_ref}>
            <AiOutlineGithub />
            <AiOutlineTwitter />
          </Git>
          <Status ref={color2_ref}>
            <span>Status:</span>
            <All>
              <BsFillCircleFill />
            </All>
            <p>All systems normal.</p>
          </Status>
          <System ref={system} onClick={add}>
            <Monitor ref={color1_ref}>
              <CiMonitor />
            </Monitor>
            <span>System</span>
            <Up_and_Down ref={color1_ref}>
              <HiChevronUp />
              <BiChevronDown />
            </Up_and_Down>
          </System>

          <Light ref={display}>
            <S>
              <span>System</span>
            </S>
            <D onClick={add_dark}>Dark</D>
            <L>Light</L>
          </Light>
        </Div3>
      </Wrapper>
    </Container>
  );
};

export default Vercel_footer;

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

const Light = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: -14px;
  right: 3px;
  width: 115px;
  background-color: white;
  height: 56px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border: 1px solid rgb(0, 0, 0, 0.3);
  border-radius: 3px 3px 4px 4px;
`;

const Up_and_Down = styled.div`
  display: flex;
  height: 25px;
  flex-direction: column;
  cursor: pointer;
`;

const Monitor = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const All = styled.div`
  display: flex;
  margin: 7px;
  width: 10px;
  color: rgb(0, 112, 243);
`;

const Copyry = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
const Git = styled.div`
  display: flex;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  div {
    padding: 0px 10px 0px 10px;
    border: 1px solid rgb(0, 0, 0, 0.3);
    border-radius: 5px;
    height: 30px;
    span {
      color: rgb(0, 0, 0, 0.9);
      font-size: 14px;
    }
  }
`;
const Status = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 10px 0px 10px;

  align-items: center;
  border: 1px solid rgb(0, 0, 0, 0.2);
  height: 25px;
  border-radius: 5px;

  p {
    color: rgb(0, 112, 243);
    font-weight: 700;
    font-size: 14px;
  }
`;

const System = styled.div`
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  padding: 0px 10px 0px 10px;
  width: 100px;
  border: 1px solid rgb(0, 0, 0, 0.3);
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
  justify-content: space-between;
  align-items: center;
  height: 120px;
  position: relative;
`;

const Container = styled.div`
  width: 100%;

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
  h5 {
    font-size: 13px;
    font-weight: 500;
    color: gray;
  }
`;
const Nav = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 500;
  padding-bottom: 15px;
`;

const Logo = styled.img`
  width: 100px;
  height: 60px;
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
  width: 85%;
`;

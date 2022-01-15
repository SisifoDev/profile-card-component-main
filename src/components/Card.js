import React from "react";

import styled from "styled-components";

export default function Card() {
  return (
    <CardWrapper>
      <CardHeader></CardHeader>
      <CardBody>
        <Avatar>
          <img src="images/image-victor.jpg" alt="victor" />
        </Avatar>
        <UserDetails>
          <DataContainer>
            <h1>Victor Crest</h1>
            <strong>26</strong>
          </DataContainer>
          <h3>
            <strong>London</strong>
          </h3>
        </UserDetails>
      </CardBody>
      <CardFooter>
        <FooterData>
          <h2>80k</h2>
          <p>
            <strong>Followers</strong>
          </p>
        </FooterData>
        <FooterData>
          <h2>803K</h2>
          <p>
            <strong>Likes</strong>
          </p>
        </FooterData>
        <FooterData>
          <h2>1.4k</h2>
          <p>
            <strong>Photos</strong>
          </p>
        </FooterData>
      </CardFooter>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  height: 374px;
  width: 326px;
  /* max-width: 326px; */
  background: white;
  margin: 0 25px;
  border-radius: 15px;

  & h3 {
    font-size: 14px;
  }

  & p {
    font-size: 10px;
  }

  & strong {
    color: var(--darkGrayishBlue);
    font-weight: 400;
  }
`;

const CardHeader = styled.header`
  height: calc((100% - 88px) / 2);
  background-image: url(images/bg-pattern-card.svg);
  border-radius: 15px 15px 0 0;
`;

const CardBody = styled.section`
  height: calc((100% - 88px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;
  height: 100px;
  top: -50px;

  & img {
    width: 96px;
    height: 96px;
    border: 5px solid white;
    border-radius: 50%;
  }
`;
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
  top: -40px;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardFooter = styled.footer`
  height: 88px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid #e8e9ec;
  padding: 0 25px;
`;

const FooterData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

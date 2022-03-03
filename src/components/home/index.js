import React from 'react';
import { Container, HomeBtn, HomeDesc, HomeInfo, HomeInformation, HomeSection, HomeTitle, Span } from './style';
import './style.js'

const Home
 = () =>    {
    return(
      <HomeSection>
      <Container>
          <HomeInformation>
              <HomeTitle>Islam Fares</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                  Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <HomeBtn >Let's Begin</HomeBtn>
          </HomeInformation>
      </Container>
  </HomeSection>
     )
  }

  export default Home
   ;
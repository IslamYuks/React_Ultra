import React from 'react';
import { AboutInfo, AboutSection, AboutTitle, InfoDesc, InfoDir, Link, Span } from './style';

const About = ()=>{
    return (
     
         <AboutSection>
            <div class="container">
                <AboutInfo>
                    <AboutTitle><Span>This is</Span> Me</AboutTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Link href="#">explicabo</Link> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam 
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    
     )
  }

  export default About ;


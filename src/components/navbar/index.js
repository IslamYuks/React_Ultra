import React from 'react';
import { Link } from 'react-router-dom';
import './style.js'

import styled from 'styled-components';
import {LinkIn,  Anchor, ListItem, Logo, LogoText, NavbarSection, UlList } from './style.js';




const Navbar = () =>    {
    return(
        <NavbarSection>
            
        <div className="container">
            
            <Logo >
                <LogoText >Ultra Profile</LogoText>
            </Logo>
        
            <UlList>
                <ListItem><LinkIn href="/">Home</LinkIn></ListItem>
                <ListItem><Anchor href="#">Work</Anchor></ListItem>
                <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                <ListItem><Anchor href="#">About</Anchor></ListItem>
                <ListItem><LinkIn href="/contact">Contact</LinkIn></ListItem>
            </UlList>
            
        </div>
        
    </NavbarSection>
     )
  }

  export default Navbar ;
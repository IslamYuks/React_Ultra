import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavbarSection =styled.div`
    padding: 05px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
    margin-bottom : 
`




export const Logo =styled.div`
    width: 50%;
    float: left;
`
export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin-bottom : 0px 0px;
}`


export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
`

export const ListItem  = styled.li`

display: inline-block;
padding: 0;

`


export const Anchor = styled.a`

    display: block;
    color: #222;
    text-decoration: none;
    padding: 15px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424

    }
    
    `
export const LinkIn = styled.a`

display: block;
color: #222;
text-decoration: none;
padding: 15px 15px;
font-weight: bold;
cursor: pointer;


&:hover {
    color: #eb5424

}`
import styled from '@emotion/styled'
import header from './header.svg'

const StyledHeader = styled('div')`
  margin: 10px;
  background-image: url(${header});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  background-color: #DDEEEE;
  border-radius: 25px;
  background-position-x: 6px;
  background-position-y: 4px;
  & h1 {
    margin: 10px 10px 0px 45px;
    color: darkgray;
  },  
  & p {
    margin: 0px 10px 0px 55px;
    color: black;
  }
`

const NavList = styled('ul')`
  margin: 10px;
  padding: 5px;
  text-align: center;
  
  & li {
    padding: 5px;
    border-radius: 5px;
    background-color: #AABBCC;
    display: inline;
    margin: 0px 20px 0px 20px
  }
  
  & li:hover {
    background-color: #99AACC;
  }
  
  & li a {
    color: #444444;
    text-decoration: none;
  }
`

export { StyledHeader, NavList }
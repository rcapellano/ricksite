import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../Image/logo-dark.svg'


const NavBar = () => (
<div>
       <Nav>
          <div className="container">
             <Link to="/home">
                <Logo src={logo} width="65" alt="" />
             </Link>
             <ul className="hide-on-small-and-down">
                <li>
                   <Link to="/home">Home</Link>
                </li>
                <li>
                   <Link to="/projects">Projetos</Link>
                </li>
                <li>
                   <Link to="/nosencontre">Nos Encontre</Link>
                </li>
                <li>
                   <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                   <Link to="/contact">Contato</Link>
                </li>
             </ul>
          </div>
       </Nav>
</div>
)


export default NavBar

 const Logo = styled.img`
   margin-left: 300px;
   margin-top: 0px;
`

const Nav = styled.nav`
 display: flex;
   top: 0;
   left: 0;
   width: 100%;
   z-index: 2;
   font-size: 18px;
   background-color: black;
   color: white;
     backdrop-filter: saturate(180%) blur(20px);
   .container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      ul {
         margin: 100px;
         margin-top: 100px;
         padding: 0;
         list-style: none;
         li {
            list-style: none;
            display: inline-block;
            a {
               display: inline-block;
               padding: 1rem 1rem;
            }
         }
      }
   }
`

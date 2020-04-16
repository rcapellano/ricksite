import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../Image/logo-dark.svg'
import boxes from '../Image/boxes.png'
import robot from '../Image/robot.svg'
import doc from '../Image/doc.png'

const Home = () => (
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
      <LogoLoc>
         <Logo2 src={logo} alt="" />
      </LogoLoc>
      <Texto>
         <h2>Rick Capellano</h2>
      </Texto>
      <div>
         <Parag>Codificando Idéias</Parag>
      </div>
      <Section />

      <Slogan>
         <Gente>Com a gente é simples assim</Gente>
      </Slogan>
      <div>
         <img src={boxes} alt="" />
      </div>
      <Section2 />
      <Titulo>
         <h3>Lorem Ipsum</h3>
      </Titulo>
      <Sub>
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus placerat tincidunt. Sed ipsum nulla, rhoncus
         ut ex sit amet, placerat fringilla nunc. Etiam volutpat pellentesque neque, nec blandit sapien maximus condimentum.
      </Sub>
      <Robot>
         <img src={robot} alt="" />
      </Robot>
      <Doc>
         <img src={doc} alt="" />
      </Doc>
      <Titulo2>
         <h3>Lorem Ipsum</h3>
      </Titulo2>
      <Sub2>
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rhoncus placerat tincidunt. Sed ipsum nulla, rhoncus
         ut ex sit amet, placerat fringilla nunc. Etiam volutpat pellentesque neque, nec blandit sapien maximus condimentum.
      </Sub2>
   </div>
)

export default Home

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

const Logo2 = styled.img`
   width: 100px;
   height: 100px;
`
const LogoLoc = styled.div`
   display: flex;
   justify-content: center;
`
const Texto = styled.div`
   display: flex;
   justify-content: center;
   color: white;
`
const Parag = styled.div`
   display: flex;
   justify-content: center;
   color: white;
`
const Gente = styled.h2`
   color: white;
`
const Slogan = styled.div`
   display: flex;
   justify-content: center;
`
const Section = styled.section`
   margin: 100px;
`
const Section2 = styled.section`
   margin: 200px;
`
const Titulo = styled.h3`
   display: flex;
   justify-content: flex-start;
   color: white;
`
const Sub = styled.div`
   display: flex;
   color: white;
   width: 400px;
   max-width: center;
`
const Robot = styled.div`
   display: flex;
   justify-content: center;
`
const Doc = styled.div`
   display: flex;
   justify-content: flex-end;
`
const Titulo2 = styled.h3`
   display: flex;
   justify-content: flex-end;
   margin-right: 100px;
   color: white;
`
const Sub2 = styled.div`
   display: flex;
   justify-content: flex-end;
   color: white;
   width: 400px;
   max-width: center;
`

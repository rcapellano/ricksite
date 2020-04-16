import { hot } from 'react-hot-loader/root'
import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'


import { Metas } from '~/components/Metas';
import Favicon from '~/components/Favicon';
import AppRoutes from '~/components/AppRoutes';
import Projetos from '~/views/Projetos'

const App = () => (
   <BrowserRouter>
      <Metas title="Sample Website" description="" />
      <Favicon />
      <AppRoutes />
      <Fundo />
      <Projetos />
   </BrowserRouter>
)

export default hot(App)

const Fundo = createGlobalStyle`
   body {
      background: black;
   }
`

import { useState } from 'react'
import './App.css'

import PagesContainer from './container/PagesContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {
 

  return (
  <div>
    <PagesContainer>
      <Header/>
      <ProductList/>
    </PagesContainer>
     
  </div>
  )
}

export default App

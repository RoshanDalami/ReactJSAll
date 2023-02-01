import { BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [cartIsEmpty] = useState(true)
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about/*" element={ <About/> } />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<Products/>} />
           <Route path='/test' element={(
              <div>
                <h2>Test Page</h2>
                <p>hello there!!!</p>
              </div>
           )} />
           <Route path='/redirect' element={ <Navigate to='/about' />}/>
           <Route  path='/checkout'
           element={cartIsEmpty ? <Navigate to="/products"/> : <p> CheckOut</p>}
           />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
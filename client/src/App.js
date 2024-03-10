import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './pages/Shop';
import React from 'react';
import ProductCart from './pages/ProductCart';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="background-image"></div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product-cart" element={<ProductCart />} />
        </Routes>
      </Router>

    )
  };
};

export default App;

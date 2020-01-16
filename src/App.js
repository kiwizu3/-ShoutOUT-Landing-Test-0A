import React from "react";

import Header from "./components/header/Header";
import Companies from "./components/companies/Companies";
import Product from "./components/product/Product";

import "./styles.css";

export default function App() {
     return (
          <div className="App container h-100">
               <Header />
               <Companies />
               <Product />
          </div>
     );
}

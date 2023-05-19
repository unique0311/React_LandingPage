import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./components/landing";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Landing />
      <Footer />
    </BrowserRouter>
  )
}

export default App;

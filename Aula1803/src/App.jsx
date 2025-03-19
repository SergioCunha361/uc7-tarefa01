import React from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import BandDetalhes from "./pages/BandDetalhes/BandDetalhes";

function App() {
 return(

       <BrowserRouter>
       <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/band/:id" element={<BandDetalhes />}/>          

       </Routes> 
       {/* Link estilizado como botão */}
      <Link to="/" className="btn-retornar">Retornar</Link>      
      </BrowserRouter>
 ) 
}

export default App;

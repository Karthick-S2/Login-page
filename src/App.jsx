import { useState } from "react";
import Login from "./component/Login";
import Sucessfull from "./component/Sucessfull";
import Failed from "./component/Failed";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/success" element={<Sucessfull />} />
          <Route path="/fail" element={<Failed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

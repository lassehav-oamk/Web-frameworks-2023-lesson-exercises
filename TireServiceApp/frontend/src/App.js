import { useEffect, useState } from "react";
import ListView from "./components/ListView";
import AddNewCustomerView from "./components/AddNewCustomerView";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Tire Service App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/add-new-customer" element={<AddNewCustomerView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

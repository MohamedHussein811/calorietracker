import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import DisplayFoodList from "./components/DisplayFoodList/DisplayFoodList";
import EditFood from "./components/EditFood/[id]/EditFood";
import AddFood from "./components/AddFood/AddFood";
import AddUser from "./components/AddUser/AddUser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
      <Routes>
          <Route path="/" element={<DisplayFoodList/>} />
          <Route path="/edit/:id" element={<EditFood/>} />
          <Route path="/create" element={<AddFood/>} />
          <Route path="/user" element={<AddUser/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

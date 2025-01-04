
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Registered";
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Registered Route */}
        <Route
          path="/registered"
          element={<Register />}
        />
        </Routes>
        </Router>
  )
}
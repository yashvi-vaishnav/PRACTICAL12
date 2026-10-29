import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Orders from "./Order";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>E-commerce Website</h1>

        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/orders">Orders</Link>
        </nav>

        <hr />

        <Routes>
          <Route
            path="/"
            element={<h2>Welcome to Our E-commerce Store!</h2>}
          />

          <Route path="/orders/*" element={<Orders />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import { Routes, Route, Link } from "react-router-dom";

import CurrentOrders from "./Application/Current Order";
import OrderHistory from "./Application/Cancel Order";
import CancelledOrders from "./Application/Order History";

function Orders() {
  return (
    <div>
      <h1>Order Management</h1>

      <nav>
        <Link to="current">Current Orders</Link>{" | "}
        <Link to="history">Order History</Link>{" | "}
        <Link to="cancelled">Cancelled Orders</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="current" element={<CurrentOrders />} />
        <Route path="history" element={<OrderHistory />} />
        <Route path="cancelled" element={<CancelledOrders />} />
      </Routes>
    </div>
  );
}

export default Orders;
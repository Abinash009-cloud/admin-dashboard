// src/pages/Orders.jsx
import React from "react";
import { saveAs } from "file-saver";


const Orders = () => {
  const orders = [
    { id: "ORD001", customer: "Alice", total: 499, date: "2025-07-01" },
    { id: "ORD002", customer: "Bob", total: 899, date: "2025-07-02" },
    { id: "ORD003", customer: "Charlie", total: 1299, date: "2025-07-03" },
  ];

  const exportCSV = () => {
    const header = ["Order ID,Customer,Total,Date"];
    const rows = orders.map((o) =>
      `${o.id},${o.customer},${o.total},${o.date}`
    );
    const csvContent = [...header, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "orders.csv");
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h2>Order Management</h2>
        <button onClick={exportCSV}>⬇️ Export CSV</button>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total (₹)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.total}</td>
              <td>{o.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

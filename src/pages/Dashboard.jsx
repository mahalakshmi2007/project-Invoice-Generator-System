import React from "react";

export default function Dashboard({ invoices }) {
  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.total, 0);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Invoices: {invoices.length}</p>
      <p>Total Revenue: ₹{totalRevenue}</p>
    </div>
  );
}

import React from "react";
import InvoiceForm from "../components/InvoiceForm.jsx";

export default function Invoices({
  invoices,
  setInvoices,
  clients,
  setClients
}) {

  const addInvoice = (invoice) => {

    // Add invoice to list
    setInvoices([...invoices, invoice]);

    // Automatically add client if it does not exist
    if (!clients.includes(invoice.client)) {
      setClients([...clients, invoice.client]);
    }

  };

  return (
    <div>

      <InvoiceForm addInvoice={addInvoice} />

      <h3>Invoice List</h3>

      {invoices.map((inv, index) => (
        <div key={index} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>

          <p><b>Client:</b> {inv.client}</p>
          <p><b>Date:</b> {inv.date}</p>

          <table border="1">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {inv.items.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p><b>Invoice Total:</b> ₹{inv.total}</p>

        </div>
      ))}

    </div>
  );
}

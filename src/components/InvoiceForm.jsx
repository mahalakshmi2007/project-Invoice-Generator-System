import React, { useState } from "react";

export default function InvoiceForm({ addInvoice }) {

  const [client, setClient] = useState("");
  const [date, setDate] = useState("");

  const [items, setItems] = useState([
    { name: "", quantity: 1, price: 0 }
  ]);

  const handleItemChange = (index, field, value) => {
    const updated = [...items];

    updated[index][field] =
      field === "quantity" || field === "price"
        ? Number(value)
        : value;

    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { name: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    const newInvoice = {
      client,
      date,
      items,
      total
    };

    addInvoice(newInvoice);

    setClient("");
    setDate("");
    setItems([{ name: "", quantity: 1, price: 0 }]);
  };

  return (
    <div>

      <h2>Add Invoice</h2>

      <form onSubmit={handleSubmit}>

        <label>Client Name</label>
        <br />
        <input
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />

        <br /><br />

        <label>Date</label>
        <br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <h3>Items</h3>

        <div style={{display:"flex", gap:"10px", fontWeight:"bold"}}>
          <span style={{width:"150px"}}>Item Name</span>
          <span style={{width:"80px"}}>Quantity</span>
          <span style={{width:"80px"}}>Price</span>
        </div>

        {items.map((item, index) => (

          <div key={index} style={{display:"flex", gap:"10px", marginTop:"5px"}}>

            <input
              style={{width:"150px"}}
              type="text"
              value={item.name}
              onChange={(e) =>
                handleItemChange(index,"name",e.target.value)
              }
            />

            <input
              style={{width:"80px"}}
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                handleItemChange(index,"quantity",e.target.value)
              }
            />

            <input
              style={{width:"80px"}}
              type="number"
              value={item.price}
              min="0"
              onChange={(e) =>
                handleItemChange(index,"price",e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>

          </div>

        ))}

        <br />

        <button type="button" onClick={addItem}>
          Add Item
        </button>

        <br /><br />

        <button type="submit">
          Add Invoice
        </button>

      </form>

    </div>
  );
}

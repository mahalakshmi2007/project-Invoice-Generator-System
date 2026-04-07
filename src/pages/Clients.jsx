import React, { useState, useEffect } from "react";

export default function Clients({ clients, setClients }) {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  // Load clients from localStorage when page loads
  useEffect(() => {
    const savedClients = JSON.parse(localStorage.getItem("clients"));
    if (savedClients) {
      setClients(savedClients);
    }
  }, []);

  // Save clients to localStorage whenever clients change
  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  const addClient = () => {
    if (!name.trim()) return;

    if (clients.includes(name)) {
      alert("Client already exists");
      return;
    }

    setClients([...clients, name]);
    setName("");
  };

  const deleteClient = (index) => {
    const updatedClients = clients.filter((_, i) => i !== index);
    setClients(updatedClients);
  };

  // Filter clients for search
  const filteredClients = clients.filter((client) =>
    client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Clients</h2>

      <input
        type="text"
        placeholder="Enter Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addClient}>Add Client</button>

      <br /><br />

      <input
        type="text"
        placeholder="Search Client"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Client List</h3>

      <ul>
        {filteredClients.map((client, index) => (
          <li key={index}>
            {client}

            <button
              onClick={() => deleteClient(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

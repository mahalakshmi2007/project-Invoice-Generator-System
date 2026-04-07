import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Invoices from "./pages/Invoices.jsx";
import Clients from "./pages/Clients.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [clients, setClients] = useState([]);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={isLoggedIn}>
              <Dashboard invoices={invoices} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/invoices"
          element={
            <ProtectedRoute isAuth={isLoggedIn}>
              <Invoices
                invoices={invoices}
                setInvoices={setInvoices}
                clients={clients}
                setClients={setClients}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/clients"
          element={
            <ProtectedRoute isAuth={isLoggedIn}>
              <Clients clients={clients} setClients={setClients} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

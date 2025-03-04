import {Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import { publicRoutes, secretRouters } from "./routes";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const token = localStorage.getItem("token");
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {publicRoutes.map((route) => {
            const Comp = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Comp />
                  </Layout>
                }
              />
            );
          })}
          {secretRouters.map((route) => {
            const Comp = route.component;
            return (
              <Route key={route.path} path={route.path} element={token ? <Navigate to="/" /> :<Comp />} />
            );
          })}
        </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;

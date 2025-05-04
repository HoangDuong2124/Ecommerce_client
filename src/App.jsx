import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/layout/user/Layout";
import { publicRoutes, secretRouters } from "./routes";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./components/layout/dashboard/layout/AppLayout";
import Home from "./pages/Admin/Dashboard/Home";
import UserProfiles from "./pages/Admin/UserProfiles";
import FormElements from "./pages/Admin/Forms/FormElements";
import BasicTables from "./pages/Admin/Tables/BasicTables";

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
              <Route
                key={route.path}
                path={route.path}
                element={token ? <Navigate to="/" /> : <Comp />}
              />
            );
          })}

          <Route path="/dashboard" element={<AppLayout/>}>
            <Route index path="/" element={<Home/>} />
            <Route path="/profile" element={<UserProfiles/>} />
            <Route path="/form-elements" element={<FormElements/>} />
            <Route path="/basic-tables" element={<BasicTables/>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

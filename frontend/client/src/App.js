import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "./LoginForm.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import Products from "./pages/Products.js";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Username:", email);
    console.log("Password:", password);
    const response = await axios.post(
      "http://localhost:5001/api/v1/auth/login",
      {
        email,
        password,
      }
    );

    if (response?.status === 200) {
      console.log("login-form", response?.data?.user);
    }
  };

  useEffect(() => {
    const callRegisterApi = async () => {
      const res = await axios.post("http://localhost:5001/api/v1/auth/login", {
        email: "rishabhadmin@gmail.com",
        password: "1234",
      });
      console.log("result", res.data);
    };
    callRegisterApi();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/catalogue" element={<Products />} />{" "}
          <Route path="/about-us" element={<Products />} />
          <Route path="/contact-us" element={<Products />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

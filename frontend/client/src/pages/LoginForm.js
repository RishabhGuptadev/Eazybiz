import React, { useState } from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  placeholder: {
    color: "rgba(0, 0, 0, 0.5)", // Adjust the color as needed
  },
}));

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      if (response?.status === 200) {
        localStorage?.setItem(
          "user-details",
          JSON.stringify(response?.data?.user)
        );
        navigate("/products");
      }
      if (!response?.status) {
        console.log("login-form", response?.data?.user);
      }
    } catch (error) {
      return "Something went wrong..";
    }
  };

  return (
    <Box
      bgcolor="primary.dark"
      height="100vh"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap="100px"
      padding="100px"
    >
      <Box>
        <Box>
          <Typography variant="h2" component="h2" color="primary">
            EazyBiz Store
          </Typography>
        </Box>

        <Box mt="16px">
          <Typography variant="h4" component="h4" color="tertiary.main">
            Find trendy clothes and latest footwear collection.
          </Typography>
        </Box>
      </Box>
      <Box width="50%" height="50%" padding="16px">
        <Box>
          <FormControl fullWidth onSubmit={handleLogin}>
            <label className="styled-label">Email</label>
            <TextField
              InputLabelProps={{
                className: classes.placeholder,
              }}
              fullWidth
              required
              color="secondary"
              sx={{
                input: {
                  color: "white",

                  background: "#dc004e",
                },
                placeholder: {
                  color: "yellow",
                },
              }}
              variant="outlined"
              placeholder="User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="styled-label">Password</label>
            <TextField
              InputLabelProps={{
                className: classes.placeholder,
              }}
              fullWidth
              required
              color="secondary"
              sx={{
                input: {
                  color: "white",

                  background: "#dc004e",
                },
                placeholder: {
                  color: "yellow",
                },
              }}
              variant="outlined"
              placeholder="User Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box mt="34px">
              <Button
                variant="contained"
                color="tertiary"
                sx={{ width: "50%", color: "#dc004e", fontWeight: 600 }}
                mt="16px"
                type="submit"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;

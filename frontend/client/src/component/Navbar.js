import React from "react";
import { NAVBAR } from "../constant";
import {
  LogoContainer,
  NavItemContainer,
  NavbarContainer,
} from "../styles/productsStyles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import eazybizz from "../assets/eazybizz.png";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={eazybizz} alt="logo" />
      </LogoContainer>
      <NavItemContainer>
        {Object.entries(NAVBAR)?.map(([key, value], index) => {
          return (
            <Typography
              variant="h5"
              color={
                window.location.href.split("/")?.[
                  window.location.href.split("/")?.length - 1
                ] === key.toLowerCase()
                  ? "tertiary.main"
                  : "secondary"
              }
              onClick={() => {
                navigate(value);
              }}
              sx={{ cursor: "pointer" }}
            >
              {key}
            </Typography>
          );
        })}
      </NavItemContainer>
    </NavbarContainer>
  );
};

export default Navbar;

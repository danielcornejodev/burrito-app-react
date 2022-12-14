import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";

export const PRIMARY_BROWN = "#451400";

export const PRIMARY_GREY = "#786259";

export const MainBody = styled(Box)(() => ({
  padding: "50px 20%",
  height: "100%",
  textAlign: "left"
}));

export const Card = styled(Button)(() => ({
  background: "white",
  border: `1px solid ${PRIMARY_GREY}`,
  width: "100%",
  height: "130px",
  display: "block",
  textAlign: "left",
  borderRadius: "0%"
}));

export const OrderButton = styled(Button)(() => ({
  background: PRIMARY_BROWN,
  border: `1px solid ${PRIMARY_GREY}`,
  width: "100%",
  height: "130px",
  display: "block",
  borderRadius: "0%"
}));

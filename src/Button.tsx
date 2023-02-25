import { styled } from "@stitches/react";

export const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: 64,
  fontSize: "1.5rem",
  $$shadow: "blueviolet",
  boxShadow: "0 0 0 3px $$shadow",
  padding: "10px 15px",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "lightgray",
    $$shadow: "blue",
  },
});

export default Button;

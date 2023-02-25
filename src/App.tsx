import React from "react";
import { styled } from "@stitches/react";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100vh",
  backgroundColor: "lightgray",
  alignItems: "center",
});

const Button = styled("button", {
  backgroundColor: "gainsboro",
  borderRadius: 64,
  width: "max-content",
  padding: "8px 16px",
});

const Card = styled("div", {
  borderRadius: 16,
  backgroundColor: "lightgray",
  width: "max-content",
  padding: "8px 16px",
  boxShadow: "0 0 0 3px $$shadow",
  transition: "all 0.2s ease-in-out",
  $$shadow: "purple",
  "&:hover": {
    $$shadow: "blue",
    backgroundColor: "white",
  },
});

const TextArea = styled("textarea", {
  backgroundColor: "gainsboro",
  padding: 8,
  borderRadius: 8,
  width: 240,
  height: 120,
});

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <Container>
      <Card>Count: {count}</Card>
      <Button onClick={handleClick}>Button</Button>
      <TextArea />
    </Container>
  );
}

export default App;

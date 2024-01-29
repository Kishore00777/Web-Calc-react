import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Calc() {
  const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "*",
    "/",
    ".",
    "=",
    "Clear",
    "<",
  ];
  const [input, setInput] = useState("");
  const func = [
    () => handleClick(1),
    () => handleClick(2),
    () => handleClick(3),
    () => handleClick(4),
    () => handleClick(5),
    () => handleClick(6),
    () => handleClick(7),
    () => handleClick(8),
    () => handleClick(9),
    () => handleClick(0),
    () => handleClick("+"),
    () => handleClick("-"),
    () => handleClick("*"),
    () => handleClick("/"),
    () => handleClick("."),
    () => {
      setInput(eval(input || ""));
    },
    () => {
      setInput("");
    },
    () => {
      setInput((prevInput) => prevInput.slice(0, -1));
    },
  ];
  const handleClick = (e) => {
    setInput((prevInput) => prevInput + e);
  };
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          mt: 5,
          ml: 75,
          padding: 3,
          border: "5px solid #1976D2",
          borderRadius: 5,
          boxShadow: "rgba(0, 0, 0, 0.4) 0.05px 0.05px 30px",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <TextField
          aria-readonly
          label="Enter Number"
          value={input}
          sx={{ width: 275 }}
        />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {numbers.map((e, index) => (
            <Grid item xs={4} key={e}>
              <Button variant="contained" onClick={func[index]}>
                {e}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          mt: 10,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 3,
          border: "5px solid #1976D2",
          borderRadius: 5,
          boxShadow: "rgba(0, 0, 0, 0.4) 0.05px 0.05px 30px",
          display: { xs: "block", sm: "block",md: "none",
            lg: "none",
            xl: "none", },
        }}
      >
        <TextField
          inputProps={{ inputMode: "none" }}
          label="Enter Number"
          value={input}
          sx={{ width: 275 }}
        />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {numbers.map((e, index) => (
            <Grid item xs={4} key={e}>
              <Button variant="contained" onClick={func[index]}>
                {e}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
}

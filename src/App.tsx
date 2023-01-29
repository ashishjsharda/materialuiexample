import * as React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <Stack spacing={2} direction="row">
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary"> Colored</Button>
   </Stack>
  );
}

export default App;

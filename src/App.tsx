import { Box, Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import SimplePopover from './components/SimplePopover';

function App() {
  return (
      <Container>
        <Box pt={5} display="flex" justifyContent="center">
         <SimplePopover/>
        </Box>
      </Container>
  );
}

export default App;

//components
import Notes from "./notes/Notes";
import SwipeDrawer from "./SwipeDrawer";
import { Box } from "@mui/material";
import ArchiveNotes from "./archive/ArchiveNotes";
import DeleteNotes from "./delete/DeleteNotes";
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
const Home = () => {
  return (
    <Box style={{ display: "flex" , width : '100%' }}>
    <Router>
    <SwipeDrawer />
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/archive" element={<ArchiveNotes />} />
      <Route path="/delete" element={<DeleteNotes />} />
    </Routes>
    </Router>
    
  
    </Box>
  );
};

export default Home;

import { Box ,Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
// components

import ArchiveNote  from './ArchiveNote';
import {useContext} from 'react';
import { DataContext } from '../../context/DataProvider';



const DrawerHeader = styled('div')(({ theme }) => ({
     ...theme.mixins.toolbar,
}));
const ArchiveNotes =()=>{

    const {archiveNotes} =useContext(DataContext);

    return(
      <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            
              <Grid  container style={{marginTop : "16px"}} >
              {archiveNotes.map( archive => (
                  <Grid item> 
                    < ArchiveNote note ={ archive}/>
                  </Grid>      
              ))}
              </Grid>
            
            </Box>
      </Box>
      
    );
}

export default ArchiveNotes;
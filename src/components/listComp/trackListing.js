import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';


export default function TrackListing(props){
  const trackList = props.selectedAl.trackList;

  const Row = ({index , style}) => (
    <ListItem 
      style={style} 
      key={index} 
      component="div" 
      disablePadding
    >
      <ListItemButton>
        <ListItemText primary={trackList[index].songTitle} />
        {/* 
          --trouble here. i am so so close. for some reason i can't 
          get this to go through every track list. i am soooooooooooooo 
          close to figuring this out
          
          im assuming its because it's trying to read 0
        */}
      </ListItemButton>
    </ListItem>
  );

 
  return (
  <Box
    sx={{height: 400, maxWidth: 350, bgcolor: '#dedede' }}
  >
  <FixedSizeList
    className="list" 
    height={400}
    width={350}
    itemSize={45}
    itemCount={trackList.length}
    overscanCount={5}
  >
    {Row}
  </FixedSizeList>
  </Box>
  );
  
}


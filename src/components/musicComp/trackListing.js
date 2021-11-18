import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style } = props
  
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
  /*
  let quaser = props.selectedAl.map((album) => {
    <ListItem key={album.id} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={album.trackList} />
      </ListItemButton>
    </ListItem>
  });
    
  return <div>{quaser}</div>;
  */
}

export default function TrackListing(){
  return (
  <Box
    sx={{height: 400, maxWidth: 250, bgcolor: '#dedede' }}
  >
  <FixedSizeList
    className="list" 
    height={400}
    width={250}
    itemSize={46}
    itemCount={200}
    overscanCount={5}
  >
    {renderRow}
  </FixedSizeList>
  </Box>
  );
}


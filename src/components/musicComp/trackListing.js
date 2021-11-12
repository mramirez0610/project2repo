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
}

export default function TrackListing(){
  return (
  <Box
    sx={{height: 400, maxWidth: 200, bgcolor: '#dedede' }}
  >
  <FixedSizeList
    height={400}
    width={200}
    itemSize={46}
    itemCount={200}
    overscanCount={5}
  >
    {renderRow}
  </FixedSizeList>
  </Box>
  );
}


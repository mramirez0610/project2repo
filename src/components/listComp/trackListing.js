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
        <ListItemText 
          className="please" 
          primary={`${trackList[index].songTitle}`} 
          secondary={`${trackList[index].songLength}`}
        />
      </ListItemButton>
    </ListItem>
  );

 
  return (
  <div>
    <b><p>tracklist :</p></b>
    
    <Box
      sx={{
        height: 400, 
        maxWidth: 350, 
        bgcolor: '#dedede',
        ":hover" : {
          boxShadow: 6, 
        }
      }}
    >
    <FixedSizeList
      className="list" 
      height={400}
      width={350}
      itemSize={60}
      itemCount={trackList.length}
      overscanCount={7}
    >
      {Row}
    </FixedSizeList>
    </Box>
  </div>
  );
}


import React from "react";
import RowInfo from "./rowDetails";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

export default function TrackListing(props){

  const RowInfoTwo = ({index}) => (
    <div>
      <div className="track">
          <p>{props.selectedAl.trackList[index]}</p>
      </div>
    </div>
  )
  const Row = ({index , style}) => (
    <ListItem 
      style={style} 
      key={index} 
      component="div" 
      disablePadding
    >
      <ListItemButton>
        <ListItemText primary={``} />
        {/* 
          <RowInfo 
            track={props.selectedAl.trackList.songTitle} 
          />
        
        </ListItemText>
        */}
      </ListItemButton>
    </ListItem>
  );

  return (
  <Box
    sx={{height: 400, maxWidth: 250, bgcolor: '#dedede' }}
  >
  <FixedSizeList
    className="list" 
    height={400}
    width={250}
    itemSize={46}
    itemCount={props.selectedAl.trackList.length}
    overscanCount={5}
  >
    {Row}
  </FixedSizeList>
  </Box>
  );
}


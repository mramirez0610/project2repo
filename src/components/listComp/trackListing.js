import React from "react";
import RowInfo from "./rowDetails";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';


export default function TrackListing(props){

  const trackList = props.selectedAl.trackList;
  console.log(trackList.length);
  
  const RowInfoThree = ({style, index}) => (
    <div style={style} key={index}>
      <p>{trackList[index]}</p>  
    </div>
  );

  for(let i = 0; i < trackList.length; i++){
    console.log(trackList[i])
    var RowInfoTwo = ({index, style}) => (
      <div style={style} key={index}>
        <p>{props.selectedAl.trackList[i].songTitle}</p>  
      </div>
    );
  }

  const Row = ({index , style}) => (
    <ListItem 
      style={style} 
      key={index} 
      component="div" 
      disablePadding
    >
      <ListItemButton>
        <ListItemText primary={`${RowInfoThree}`} />
        {/* 
          --trouble here. i am so so close. for some reason i can't 
          get this to go through every track list. i am soooooooooooooo 
          close to figuring this out

          --also, length only works after i've saved the file, but when i
          reload, there's an error. how funny

          im assuming its because it's trying to read 0

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
    sx={{height: 400, maxWidth: 350, bgcolor: '#dedede' }}
  >
  <FixedSizeList
    className="list" 
    height={400}
    width={350}
    itemSize={46}
    itemCount={trackList.length}
    overscanCount={5}
  >
    {Row}
  </FixedSizeList>
  </Box>
  );
  
}


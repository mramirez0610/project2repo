import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function TrackListing(props){
  const trackList = props.selectedAl.trackList;

  const theme = createTheme({
    typography: {
      fontFamily: 'Source Code Pro',
      fontSize: 12 
    }
  })

  /*
  this whole situation was a doozy -- i set this up as a row that can be repeated through
  the fixedSizedList component. though when it came to the music player, this also was a
  great help, by using index i was able to number each of these buttons

  */
  const Row = ({index , style}) => (
    <ListItem 
      style={style}
      key={index} 
      component="div" 
      disablePadding
    >
      <ListItemButton
        id={trackList[index].songId} 
        onClick={() => {
          props.songSelected(trackList[index].songId)
        }}
      >
        <ListItemText
          key={trackList[index].songId}
          primary={`${trackList[index].songTitle}`} 
          secondary={`${trackList[index].songLength}`}
        />
      </ListItemButton>
    </ListItem>
  );
 
  return (
  <div>
    <b><u><p>tracklist | select a song</p></u></b>
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 400, 
          maxWidth: 350, 
          bgcolor: '#dedede',
          ":hover" : {
            boxShadow: 2, 
          }
        }}
      >
      <FixedSizeList
        className="list" 
        height={400}
        width={350}
        itemSize={65}
        itemCount={trackList.length}
        overscanCount={7}
      >
        {Row}
      </FixedSizeList>
      </Box>
    </ThemeProvider>
  </div>
  );
}


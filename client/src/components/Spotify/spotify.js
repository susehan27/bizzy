import React from 'react';
import SpotifyPlayer from 'react-spotify-player';


const view = 'list';
const theme = 'black';

const size = {
  width: '100%',
  height: 300,
};


const URI = "https://open.spotify.com/album/50fiKeo6rrlx59k0Wd14nt";


const Player = (                
    <SpotifyPlayer 
      uri ="spotify:album:50fiKeo6rrlx59k0Wd14nt" 
      size={size}
      view={view}
      theme={theme}/>
);

export default Player;
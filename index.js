const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

function addToPlaylist(playlist, episode){
    return playlist.concat([episode])
}

function getNextEpisodeInPlaylist(episodes){
    return episodes[0]
}

function removeFromPlaylist(playlist, episode){
    //find index of episode in playlist
    const epindex = playlist.indexOf(episode)
    //make a copy of the playlist so as not to mutate the original array
    const playlistCopy = [... playlist]
    //splice (destructive) the episode using IndexOf; return value of splice is the spliced element
    playlistCopy.splice(epindex, 1)
    //return the playlist with the spliced item taken out
    return playlistCopy
}

function bingeWatch(playlist){
    if(playlist.length === 0){
        return 'Please let there be more!'
    } else {
        const nextEpisode = getNextEpisodeInPlaylist(playlist);
        return bingeWatch(removeFromPlaylist(playlist, nextEpisode))
    }
}

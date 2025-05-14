const presence = new Presence({
  clientId: "1371741528845717544" 
});

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "peanfm_logo",
    smallImageKey: "playing",
    smallImageText: "Playing",
    startTimestamp: Math.floor(Date.now() / 1000)
  };

  // Get data from window object
  const peanFmData = (window as any).peanFmData;

  if (peanFmData) {
    if (peanFmData.isPlaying) {
      presenceData.details = `${peanFmData.songTitle} - ${peanFmData.artist}`;
      presenceData.state = `Station: ${peanFmData.station}`;
      presenceData.smallImageKey = "playing";
      presenceData.smallImageText = "Playing";
    } else {
      presenceData.details = "Paused";
      presenceData.state = `Station: ${peanFmData.station}`;
      presenceData.smallImageKey = "pause";
      presenceData.smallImageText = "Paused";
    }
  } else {
    presenceData.details = "Browsing";
    presenceData.state = "PeanFM Radio";
  }

  presence.setActivity(presenceData);
});
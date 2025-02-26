

module.exports = {
  TOKEN: "",
  language: "vi",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://vinh:<Vinhteu123>@cluster0.4kwla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Music",
      password: "Vinhteu123",
      host: "180.188.226.76",
      port:  7019,
      secure: false
    }
  ]
}

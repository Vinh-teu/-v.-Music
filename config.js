

module.exports = {
  TOKEN: "",
  language: "vi",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://vinh:teuvinh123@vinh.8v99x.mongodb.net/?retryWrites=true&w=majority&appName=vinh",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "lien he V",
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

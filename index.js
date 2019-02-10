const electron = require('electron');
const app = electron.app;
const trimDesktop = require("./src/main/trimDesktop");
//import trimDesktop from "./src/main/trimDesktop";

app.on("ready", () => {
    trimDesktop().then(({sourceDisplay, trimmedBounds})=>{
        console.log(sourceDisplay, trimmedBounds);
    });
});

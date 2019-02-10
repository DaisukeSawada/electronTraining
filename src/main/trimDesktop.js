const electron = require("electron")
const { ipcMain, BrowserWindow } = require("electron");

module.exports = function trimDesktop(){

    const screen = electron.screen;

    const display = screen.getAllDisplays();
    return new Promise((resolve, reject) =>{
        const windws = disolays.map((display, i) =>{
            const {x, y, width, height} = display.bounds;
            display.name = "Screen " + (i + i);
            const win = new BrowserWindow({
                frame: false,
                transparent: true,
                alwaysOnTop:true,
                x,y,width,height,
            });
            win.loadURL('file://${__dirname}/../../index.html');
            return {win, display};
        });        
    });

    ipcMain.once("SEND_BOUNDS", (e, {trimmedBounds})=>{
        const sourceDisplay = windows.find(w => w.win.webContents.id === e.sender.id).display;
        const profile = {sourceDisplay, trimmedBounds};
        windows.forEach(w => w.win.close());
        resolve(profole);
    });
}

//export default trimDesktop;
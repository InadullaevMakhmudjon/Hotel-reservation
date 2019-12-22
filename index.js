const { app, BrowserWindow, ipcRenderer } = require('electron');

function createWindow() {
    let win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(process.env.REACT_APP_ELECTRON_LOAD_URL)
}

app.on('ready', createWindow);

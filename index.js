const { app, BrowserWindow, ipcRenderer } = require('electron');

function createWindow() {
    let win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow);
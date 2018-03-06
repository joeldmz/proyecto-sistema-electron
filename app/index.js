const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')

let win
function createWindow(){
  win = new BrowserWindow({height:310 ,width:350 })
  win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: 'file',
    slashes: false
    }))
  win.setMenu(null)  
  win.setMaximizable(false);
}

exports.closeWindows = () => {
  win.close();
}


exports.openWindows = (user) => {
 const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
 let mainWindows = new BrowserWindow({
     height,
     width });
     mainWindows.loadURL(url.format({
       pathname: path.join(__dirname, "main.html"),
       protocol: 'file',
       slashes: false
     }))

     mainWindows.maximize();
     //mainWindows.setMaximizable(false);
     //mainWindows.setMenu(null);
     mainWindows.webContents.on('did-finish-load',()=>{
          mainWindows.webContents.send('ping',user);
     })
     
}



app.on('ready', createWindow);
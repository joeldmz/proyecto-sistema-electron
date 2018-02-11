const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url = require('url')

let win
function createWindow(){
  win = new BrowserWindow({height:300 ,width:350 })
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

exports.openWindows = () => {
 let mainWindows = new BrowserWindow({
     height: 720 ,
     width: 1080 });
     mainWindows.loadURL(url.format({
       pathname: path.join(__dirname, "main.html"),
       protocol: 'file',
       slashes: false
     }))
     //mainWindows.setMenu(null);
}



app.on('ready', createWindow);
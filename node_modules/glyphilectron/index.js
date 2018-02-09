'use strict';
const electron = require('electron');
var menubar = require('menubar');

var mb = menubar({dir:__dirname, tooltip: "Glyphilectron", icon:__dirname + "/res/icon.png", width:400, height:500});

const contextMenu = electron.Menu.buildFromTemplate([
  {
    label: 'About',
    click() {
      electron.dialog.showMessageBox({title: "Glyphilectron", type:"info", message: "Find Bootstrap Glyphicons right from the menubar/tray. \nMIT Copyright (c) 2016 Amit Merchant <bullredeyes@gmail.com>", buttons: ["Close"] });
    }
  },
  {
    label: 'Website',
    click() {
      electron.shell.openExternal("https://github.com/amitmerchant1990/glyphilectron");
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Quit',
    click() {
      mb.app.quit();
    }
  }

]);

mb.on('ready', function ready () {
  global.sharedObj = {
    hide: mb.hideWindow,
    quit: mb.app.quit,
    pinned: false
  }

  console.log('Glyphilectron is ready to serve in the menubar.');

  if (process.platform == 'win32') {
    mb.tray.setContextMenu(contextMenu);
  }
});

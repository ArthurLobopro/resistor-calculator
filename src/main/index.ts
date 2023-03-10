import { app, BrowserWindow } from 'electron'
import path from 'node:path'

import "./main-events"
import "electron-frame/main"

require("update-electron-app")({
    notifyUser: false
})

const appPath = app.getAppPath()

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        frame: false,
        autoHideMenuBar: true,
        show: false,
        icon: path.join(appPath, 'assets', 'icon.png'),
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // if (app.isPackaged) {
    //     win.setMenu(null)
    // }

    win.loadFile('public/index.html')
    win.once('ready-to-show', () => { win.show(); win.focus() })
}

const isUnicWindow = app.requestSingleInstanceLock()

if (!isUnicWindow) {
    app.quit()
} else {
    app.whenReady().then(createWindow)
}

app.on('second-instance', () => {
    const win = BrowserWindow.getAllWindows()[0]
    if (win.isMinimized()) win.restore()
    win.center()
    win.focus()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// Faz com que o programa não inicie várias vezes durante a instalação
if (require('electron-squirrel-startup')) {
    app.quit()
}
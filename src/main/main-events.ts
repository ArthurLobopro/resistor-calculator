import { BrowserWindow, autoUpdater, ipcMain } from "electron"

autoUpdater.on("update-downloaded", (...props) => {
    const [event, releaseNotes, releaseName, releaseDate, updateUrl] = props
    ipcMain.emit("update-downloaded", event, releaseNotes, releaseName, releaseDate, updateUrl)
    const mainWindow = BrowserWindow.getAllWindows()[0]
    mainWindow.webContents.send("update-downloaded")
})

ipcMain.on("install-update", () => {
    autoUpdater.quitAndInstall()
})
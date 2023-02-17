import { ElectronFrame } from "electron-frame/renderer"

window.addEventListener("DOMContentLoaded", () => {
    const frame = new ElectronFrame()
    frame.insert()

    require("../ui")
})
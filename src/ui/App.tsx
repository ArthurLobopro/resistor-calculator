import { ipcRenderer } from "electron"
import { useEffect } from "react"
import { AppRoutes } from "./Router"
import { ReleaseModal } from "./components/modals/ReleaseModal"
import { useModal } from "./hooks/useModal"

export function App() {
    const modal = useModal()

    useEffect(() => {
        ipcRenderer.on("update-downloaded", () => {
            modal.open(<ReleaseModal onClose={(value) => {
                if (value) {
                    ipcRenderer.send("install-update")
                }
                modal.hide()
            }} />)
        })
    }, [])

    return (
        <>
            <AppRoutes />
            {modal.content}
        </>
    )
}
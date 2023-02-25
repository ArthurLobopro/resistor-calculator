import { useEffect, useState } from "react"
import { Resistor, colors } from "./components/Resistor"
import {
    MultiplierColorsSelect,
    NormalColorsSelect,
    ToleranceColorsSelect
} from "./components/selects/colors"
import { Result } from "./components/Result"
import { ipcRenderer } from "electron"
import { useModal } from "./hooks/useModal"
import { ReleaseModal } from "./components/modals/ReleaseModal"
import { LineTitle } from "./components/LineTittle"

export function App() {

    const [colors, setColors] = useState({
        line1: "transparent",
        line2: "transparent",
        line3: "transparent",
        line4: "transparent"
    } as colors)

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
        <div id="main">
            {modal.content}
            <Resistor colors={colors} />
            <LineTitle title="Cores" />
            <div className="flex-row justify-around fill-width margin-vertical-16">
                <label>
                    <span>Faixa 1 (A): </span>
                    <NormalColorsSelect
                        onChange={value => setColors({ ...colors, line1: value })}
                    />
                </label>
                <label>
                    <span>Faixa 2 (B): </span>
                    <NormalColorsSelect
                        onChange={value => setColors({ ...colors, line2: value })}
                    />
                </label>
                <label>
                    <span>Faixa 3 (C): </span>
                    <MultiplierColorsSelect
                        onChange={value => setColors({ ...colors, line3: value })}
                    />
                </label>
                <label>
                    <span>Faixa 4 (D): </span>
                    <ToleranceColorsSelect
                        onChange={value => setColors({ ...colors, line4: value })}
                    />
                </label>
            </div>
            <Result colors={colors} />
        </div>
    )
}
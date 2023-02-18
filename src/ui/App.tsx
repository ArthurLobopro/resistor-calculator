import { useState } from "react"
import { Resistor, colors } from "./components/Resistor"

export function App() {

    const [colors, setColors] = useState({
        line1: "transparent",
        line2: "transparent",
        line3: "transparent",
        line4: "transparent"
    } as colors)

    return (
        <div id="main">
            <Resistor colors={colors} />
        </div>
    )
}
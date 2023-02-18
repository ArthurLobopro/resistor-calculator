import { useEffect, useState } from "react"
import { Resistor, colors } from "./components/Resistor"
import { GenericColorSelect } from "./components/selects/GenericColorSelect"
import { LastColorSelect } from "./components/selects/LastColorSelect"

export function App() {

    const [colors, setColors] = useState({
        line1: "transparent",
        line2: "transparent",
        line3: "transparent",
        line4: "transparent"
    } as colors)

    useEffect(() => {
        const all_colors_submited = Object.values(colors).every(color => color !== "transparent")

        if (all_colors_submited) {
            console.log("All colors submited")
        }
    }, [colors])

    return (
        <div id="main">
            <Resistor colors={colors} />
            <div className="line-title">
                <div className="spacer"></div>
                <span className="title">Cores</span>
                <div className="spacer"></div>
            </div>
            <div className="flex-row justify-between fill-width margin-vertical-16">
                <label>
                    <span>Faixa 1: </span>
                    <GenericColorSelect
                        onChange={value => setColors({ ...colors, line1: value })}
                    />
                </label>
                <label>
                    <span>Faixa 2: </span>
                    <GenericColorSelect
                        onChange={value => setColors({ ...colors, line2: value })}
                    />
                </label>
                <label>
                    <span>Faixa 3: </span>
                    <GenericColorSelect
                        onChange={value => setColors({ ...colors, line3: value })}
                    />
                </label>
                <label>
                    <span>Faixa 4: </span>
                    <LastColorSelect
                        onChange={value => setColors({ ...colors, line4: value })}
                    />
                </label>
            </div>
        </div>
    )
}
import { useState } from "react"
import { Header } from "../components/Header"
import { LineTitle } from "../components/LineTittle"
import { Page } from "../components/Page"
import { FourBandResistor, four_band_colors } from "../components/resistors/FourBandResistor"
import { FourBandResult } from "../components/results/FourBandResult"
import { MultiplierColorsSelect, NormalColorsSelect, ToleranceColorsSelect } from "../components/selects/colors"
import { useModal } from "../hooks/useModal"

export function FourBand() {

    const [colors, setColors] = useState({
        line1: "transparent",
        line2: "transparent",
        line3: "transparent",
        line4: "transparent"
    } as four_band_colors)

    const modal = useModal()
    return (
        <Page>
            <Header title="Resistor de 4 faixas" />
            <div className="main">
                {modal.content}
                <FourBandResistor colors={colors} />
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
                <FourBandResult colors={colors} />
            </div>
        </Page>
    )
}
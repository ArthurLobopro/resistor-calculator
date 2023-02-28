import { useState } from "react"
import { Header } from "../components/Header"
import { LineTitle } from "../components/LineTittle"
import { Page } from "../components/Page"
import { ReturnButton } from "../components/ReturnButton"
import { FiveBandResistor, five_band_colors } from "../components/resistors/FiveBandResistor"
import { MultiplierColorsSelect, NormalColorsSelect, ToleranceColorsSelect } from "../components/selects/colors"
import { FiveBandResult } from "../components/results/FiveBandResult"

export function FiveBand() {

    const [colors, setColors] = useState({
        line1: "transparent",
        line2: "transparent",
        line3: "transparent",
        line4: "transparent",
        line5: "transparent"
    } as five_band_colors)

    return (
        <Page>
            <Header title="Resistor de 5 faixas" left={<ReturnButton />} />
            <div className="main">
                <FiveBandResistor colors={colors} />
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
                        <span>Faixa 3 (B): </span>
                        <NormalColorsSelect
                            onChange={value => setColors({ ...colors, line3: value })}
                        />
                    </label>
                    <label>
                        <span>Faixa 4 (C): </span>
                        <MultiplierColorsSelect
                            onChange={value => setColors({ ...colors, line4: value })}
                        />
                    </label>
                    <label>
                        <span>Faixa 5 (D): </span>
                        <ToleranceColorsSelect
                            onChange={value => setColors({ ...colors, line5: value })}
                        />
                    </label>
                </div>
                <FiveBandResult colors={colors} />
            </div>
        </Page>
    )
}
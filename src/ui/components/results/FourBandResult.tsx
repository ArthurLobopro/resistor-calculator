import { div, mult, sub, sum } from "correct-operations"
import { multiplier_color_name, multiplier_colors, normal_color_name, normal_colors, tolerance_color_name, tolerance_colors } from "../../../constants"
import { formatOmn } from "../../util"
import { LineTitle } from "../LineTittle"
import { four_band_colors } from "../resistors/FourBandResistor"

function getBandsValues(colors: four_band_colors) {
    const line1_value = normal_colors[colors.line1 as normal_color_name].value
    const line2_value = normal_colors[colors.line2 as normal_color_name].value

    const multiplier = multiplier_colors[colors.line3 as multiplier_color_name].value

    const tolerance = tolerance_colors[colors.line4 as tolerance_color_name].value

    return {
        line1_value,
        line2_value,
        multiplier,
        tolerance
    }
}

function calculateResistence(colors: four_band_colors) {
    const { line1_value, line2_value, multiplier, tolerance } = getBandsValues(colors)

    const resistence = mult(sum(line1_value * 10, line2_value), multiplier)

    const min = sub(resistence, mult(resistence, div(tolerance, 100)))
    const max = sum(resistence, mult(resistence, div(tolerance, 100)))

    return {
        resistence,
        tolerance,
        min,
        max
    }
}

interface FourBandResultProps {
    colors: four_band_colors
}

export function FourBandResult(props: FourBandResultProps) {
    const all_colors_submited = Object.values(props.colors).every(color => color !== "transparent")

    if (!all_colors_submited) {
        return null
    }

    const {
        resistence, tolerance, min, max
    } = calculateResistence(props.colors)

    const { line1_value: A, line2_value: B, multiplier: C, tolerance: D } = getBandsValues(props.colors)

    return (
        <>
            <LineTitle title="Resultado" />
            <div id="result">
                <div>
                    <div className="flex-row justify-around fill-width margin-vertical-16">
                        <div className="flex-column">
                            <div className="flex-center fill-width">
                                Faixas
                            </div>
                            <span>A: {A}</span>
                            <span>B: {B}</span>
                            <span>C: {formatOmn(C)}</span>
                            <span>D: {D}%</span>
                        </div>

                        <div className="flex-column-center">
                            <span>Resistência = (A x 10 + B) x C</span>
                            <span>Resistência = ({A} x 10 + {B}) x {formatOmn(C)}</span>
                            <span>Resistência = ({A * 10} + {B}) x {formatOmn(C)}</span>
                            <span>Resistência = {sum(A * 10, B)} x {formatOmn(C)}</span>
                            <span>Resistência = {formatOmn(resistence)}</span>
                        </div>

                        <div className="flex-column-center">
                            Valores:
                            <span>Resistência: {formatOmn(resistence)}</span>
                            <span>Tolerância: {tolerance}%</span>
                            <span>Valor mínimo: {formatOmn(min)}</span>
                            <span>Valor máximo: {formatOmn(max)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
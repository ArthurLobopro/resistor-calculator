import { div, mult, sub, sum } from "correct-operations"
import { multiplier_color_name, multiplier_colors, normal_color_name, normal_colors, tolerance_color_name, tolerance_colors } from "../../../constants"
import { five_band_colors } from "../resistors/FiveBandResistor"
import { LineTitle } from "../LineTittle"
import { formatOmn } from "../../util"

function getBandsValues(colors: five_band_colors) {
    const line1_value = normal_colors[colors.line1 as normal_color_name].value
    const line2_value = normal_colors[colors.line2 as normal_color_name].value
    const line3_value = normal_colors[colors.line3 as normal_color_name].value

    const multiplier = multiplier_colors[colors.line4 as multiplier_color_name].value

    const tolerance = tolerance_colors[colors.line5 as tolerance_color_name].value

    return {
        line1_value,
        line2_value,
        line3_value,
        multiplier,
        tolerance
    }
}

function calculateResistence(colors: five_band_colors) {
    const { line1_value, line2_value, line3_value, multiplier, tolerance } = getBandsValues(colors)

    const resistence = mult(sum(line3_value * 100, sum(line2_value * 10, line1_value)), multiplier)

    const min = sub(resistence, mult(resistence, div(tolerance, 100)))
    const max = sum(resistence, mult(resistence, div(tolerance, 100)))

    return {
        resistence,
        tolerance,
        min,
        max
    }
}

interface FiveBandResultProps {
    colors: five_band_colors
}

export function FiveBandResult(props: FiveBandResultProps) {
    const all_colors_submited = Object.values(props.colors).every(color => color !== "transparent")

    if (!all_colors_submited) {
        return null
    }

    const {
        resistence, tolerance, min, max
    } = calculateResistence(props.colors)

    const { line1_value: A, line2_value: B, line3_value: C, multiplier: D, tolerance: E } = getBandsValues(props.colors)

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
                            <span>C: {C}</span>
                            <span>D: {formatOmn(D)}</span>
                            <span>E: {E}%</span>
                        </div>

                        <div className="flex-column-center">
                            <span>
                                Resistência = (A x 100 + B x 10 + C) x D
                            </span>
                            <span>
                                Resistência = ({A} x 100 + {B} x 10 + {C}) x {formatOmn(D)}
                            </span>
                            <span>Resistência = ({[
                                mult(A, 100),
                                mult(B, 10),
                                C
                            ].join(" + ")} x {formatOmn(D)})
                            </span>
                            <span>Resistência = {div(resistence, D)} x {formatOmn(D)} </span>
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
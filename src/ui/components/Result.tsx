import { normal_colors, normal_color_name, multiplier_color_name, tolerance_color_name, multiplier_colors, tolerance_colors } from "../../constants"
import { colors } from "./Resistor"

function calculateResistence(colors: colors) {
    const line1_value = normal_colors[colors.line1 as normal_color_name].value * 10
    const line2_value = normal_colors[colors.line2 as normal_color_name].value

    const multiplier = multiplier_colors[colors.line3 as multiplier_color_name].value

    const resistence = (line1_value + line2_value) * multiplier

    const tolerance = tolerance_colors[colors.line4 as tolerance_color_name].value

    const min = resistence - (resistence * tolerance / 100)
    const max = resistence + (resistence * tolerance / 100)

    return {
        resistence,
        tolerance,
        min,
        max
    }
}

function formatOmn(omn_value: number) {
    const kilo = 1000
    const mega = 1000000

    if (omn_value > kilo) {
        return `${omn_value / kilo}kΩ`
    }

    if (omn_value > mega) {
        return `${omn_value * mega}MΩ`
    }

    return `${omn_value}Ω`
}


export function Result(props: { colors: colors }) {
    const all_colors_submited = Object.values(props.colors).every(color => color !== "transparent")

    if (!all_colors_submited) {
        return null
    }

    const {
        resistence, tolerance, min, max
    } = calculateResistence(props.colors)

    return (
        <div id="result">
            {/* <div className="line-title">
                <div className="spacer"></div>
                <span className="title">Resultado</span>
                <div className="spacer"></div>
            </div> */}
            <div>
                <span>Resistência: {formatOmn(resistence)}</span>
                <span>
                    Tolerância: {tolerance}% (min: {formatOmn(min)} - máx: {formatOmn(max)})
                </span>
            </div>
        </div>
    )
}
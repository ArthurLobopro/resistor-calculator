import { useEffect, useState } from "react"
import { multiplier_colors, normal_colors, tolerance_colors } from "../../../../constants"

type colors_scheme = typeof normal_colors | typeof multiplier_colors | typeof tolerance_colors

export function MakeColorSelect(colors_scheme: colors_scheme) {

    type color_names = keyof typeof colors_scheme | "transparent"
    interface select_props {
        onChange: (value: color_names) => void
    }

    console.log(colors_scheme)


    return (props: select_props) => {
        const [color, setColor] = useState<color_names>("transparent")

        useEffect(() => {
            props.onChange(color)
        }, [color])

        return (
            <select
                value={color}
                onChange={event => setColor(event.currentTarget.value as color_names)}
            >
                <option value="transparent">Selecionar</option>
                {Object.entries(colors_scheme).map(([color_name, color]) => (
                    <option key={color_name} value={color_name}>{color.name}</option>
                ))}
            </select>
        )
    }
}
import { useEffect, useState } from "react"

type color_names = keyof typeof colors

interface LastColorsSelectProps {
    onChange: (value: color_names) => void
}

const colors = {
    transparent: undefined,
    silver: 10,
    gold: 5,
    brown: 1,
    red: 2,
    green: 0.5,
    blue: 0.25,
    violet: 0.1
}

export function LastColorSelect(props: LastColorsSelectProps) {
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
            <option value="silver">Prata</option>
            <option value="gold">Dourado</option>
            <option value="brown">Marrom</option>
            <option value="red">Vermelho</option>
            <option value="green">Verde</option>
            <option value="blue">Azul</option>
            <option value="violet">Violeta</option>
        </select>
    )
}
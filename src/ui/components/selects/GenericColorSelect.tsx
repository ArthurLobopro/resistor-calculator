import { useEffect, useState } from "react"

const values = {
    transparent: undefined,
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9
}

type color_names = keyof typeof values

interface GenericColorsSelectProps {
    onChange: (value: color_names) => void
}

export function GenericColorSelect(props: GenericColorsSelectProps) {
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
            <option value="black">Preto</option>
            <option value="brown">Marrom</option>
            <option value="red">Vermelho</option>
            <option value="orange">Laranja</option>
            <option value="yellow">Amarelo</option>
            <option value="green">Verde</option>
            <option value="blue">Azul</option>
            <option value="violet">Violeta</option>
            <option value="gray">Cinza</option>
            <option value="white">Branco</option>
        </select>
    )
}
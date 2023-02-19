export const tolerance_colors = {
    silver: {
        name: "Prata",
        value: 10
    },
    gold: {
        name: "Ouro",
        value: 5
    },
    brown: {
        name: "Marrom",
        value: 1
    },
    red: {
        name: "Vermelho",
        value: 2
    },
    green: {
        name: "Verde",
        value: 0.5
    },
    blue: {
        name: "Azul",
        value: 0.25
    },
    violet: {
        name: "Violeta",
        value: 0.1
    },
}

export type tolerance_color_name = keyof typeof tolerance_colors
export const multiplier_colors = {
    silver: {
        name: "Prata",
        value: 0.01
    },
    gold: {
        name: "Ouro",
        value: 0.1
    },
    black: {
        name: "Preto",
        value: 1
    },
    brown: {
        name: "Marrom",
        value: 10
    },
    red: {
        name: "Vermelho",
        value: 100
    },
    orange: {
        name: "Laranja",
        value: 1000
    },
    yellow: {
        name: "Amarelo",
        value: 10000
    },
    green: {
        name: "Verde",
        value: 100000
    },
    blue: {
        name: "Azul",
        value: 1000000
    },
    violet: {
        name: "Violeta",
        value: 10000000
    },
}

export type multiplier_color_name = keyof typeof multiplier_colors
export const normal_colors = {
    black: {
        name: "Preto",
        value: 0
    },
    brown: {
        name: "Marrom",
        value: 1
    },
    red: {
        name: "Vermelho",
        value: 2
    },
    orange: {
        name: "Laranja",
        value: 3
    },
    yellow: {
        name: "Amarelo",
        value: 4
    },
    green: {
        name: "Verde",
        value: 5
    },
    blue: {
        name: "Azul",
        value: 6
    },
    violet: {
        name: "Violeta",
        value: 7
    },
    gray: {
        name: "Cinza",
        value: 8
    },
    white: {
        name: "Branco",
        value: 9
    }
}

export type normal_color_name = keyof typeof normal_colors
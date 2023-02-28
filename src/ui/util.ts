export function formatOmn(omn_value: number) {
    const kilo = 1000
    const mega = 1000000

    if (omn_value >= mega) {
        return `${omn_value / mega}MΩ`
    }

    if (omn_value >= kilo) {
        return `${omn_value / kilo}kΩ`
    }

    return `${omn_value}Ω`
}
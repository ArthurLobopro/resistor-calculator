import {
    multiplier_colors,
    normal_colors,
    tolerance_colors
} from "../../../../constants"
import { MakeColorSelect } from "./GenericColorSelect"

export const MultiplierColorsSelect = MakeColorSelect(multiplier_colors)
export const NormalColorsSelect = MakeColorSelect(normal_colors)
export const ToleranceColorsSelect = MakeColorSelect(tolerance_colors)
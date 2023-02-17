import { createRoot } from "react-dom/client"
import { App } from "./App"

const root_element = document.getElementById("root") as HTMLDivElement

const root = createRoot(root_element)

root.render(<App />)

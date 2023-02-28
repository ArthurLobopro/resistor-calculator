import { Route, Routes, HashRouter as Router } from "react-router-dom"
import { FourBand } from "./pages/FourBand"
import { Home } from "./pages/Home"
import { FiveBand } from "./pages/FiveBand"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/4-band" element={<FourBand />} />
                <Route path="/5-band" element={<FiveBand />} />
            </Routes>
        </Router>
    )
}
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { Page } from "../components/Page"
import { Minified4BandResistor } from "../components/icons"

export function Home() {

    const navigate = useNavigate()

    return (
        <Page id="home">
            <Header title="Home" />
            <div className="main">
                <div className="page-option" onClick={() => navigate("/4-band")}>
                    <div className="icon">
                        <Minified4BandResistor />
                    </div>
                    <div>
                        Resistor de 4 faixas
                    </div>
                </div>
                <div className="page-option" onClick={() => navigate("/5-band")}>
                    <div className="icon">
                        <Minified4BandResistor />
                    </div>
                    <div>
                        Resistor de 5 faixas
                    </div>
                </div>
            </div>
        </Page>
    )
}
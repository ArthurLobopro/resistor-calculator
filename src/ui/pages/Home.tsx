import path from "path"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { Page } from "../components/Page"

export function Home() {

    const navigate = useNavigate()

    return (
        <Page id="home">
            <Header title="Home" />
            <div className="main">
                <div className="page-option" onClick={() => navigate("/4-band")}>
                    <div className="icon">
                        <img src={path.resolve(__dirname, "../../../assets/icons/minified-4-band-resistor.svg")} alt="" />
                    </div>
                    <div>
                        Resistor de 4 faixas
                    </div>
                </div>
            </div>
        </Page>
    )
}
import logo from "../images/AAIC_logo.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="AAIC logo"/>
            <span>AAIC - Your cooking AI assistant</span>
        </header>
    )
}
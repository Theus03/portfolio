import moon from "../assets/moon.svg"

export function SwitchTheme() {
    return(
        <div className="container-switch-theme">
            <img src={moon}  alt="Trocar para Dark Mode" className="img-switch-theme" />
            <h3 className="text-switch-theme">Dark</h3>
        </div>
    )
}
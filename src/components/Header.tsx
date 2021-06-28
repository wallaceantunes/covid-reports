import '../assets/scss/header.scss';
import LogoCovid from '../assets/images/logo-covid.png'

export function Header() {
    return (
        <header>
            <figure>
                <img src={LogoCovid} alt="Logo Covid Reports" />
            </figure>
        </header>
    )
}
import '../assets/scss/sideNav.scss'

export function SideNav() {
    const someValidPath = ''
    return (
        <nav className="hidden-sm">
            <a className="link-nav" href={someValidPath}>Início</a>
        </nav>
    )
}
import '../assets/scss/header.scss';
import LogoCovid from '../assets/images/logo-covid.png'
export function Home () {
    const someValidPath = '#'
    return (
        <div id="home-page">
            <header>
                <figure>
                    <img src={LogoCovid} alt="Logo Covid Reports" />
                </figure>
            </header>
            <div className="div-row">
                <nav>
                    <a className="link-nav" href={someValidPath}>Início</a>
                </nav>
                <main>
                    <p className="title">COVID-19</p>
                    <p className="subtitle">Boletins informativos e casos do coronavírus por município por dia</p>
                    <section className="card">
                        <p className="title">Relatório de casos</p>
                        <button className="button">
                            Mostrar dados 
                        </button>
                    </section>
                    <div className="div-row">
                        <section className="card">
                            <p className="subtitle">Distribuição de casos de COVID-19</p>
                        </section>
                        <section className="card">
                            <p className="subtitle">Lista de casos por município</p>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}
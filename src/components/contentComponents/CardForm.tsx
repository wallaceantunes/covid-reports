import '../../assets/scss/card.scss'

export function CardForm() {
    return (
        <section className="card">
            <p className="title">Relatório de casos</p>
            <form>
                <div className="div-row">
                    <div className="div-column">
                        <label>UF</label>
                        <select className="form-select">
                            <option value="1">ddd</option>
                        </select>
                    </div>
                    <div className="div-column">
                        <label>Data</label>
                        <input type="date" className="form-date" />
                    </div>
                </div>
                <button className="button">
                    Mostrar dados
                    </button>
            </form>
        </section>
    )
}
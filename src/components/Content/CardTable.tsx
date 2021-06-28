import ArrowUp from '../../assets/images/arrow-up.svg'
import '../../assets/scss/card.scss'

type CardTableProps = {
    cases: Array<any>
}

export function CardTable({cases}: CardTableProps) {
    return (
        <section className="card">
            <p className="subtitle">Lista de casos por município</p>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>UF</th>
                        <th>Município</th>
                        <th>
                            Comfirmações no dia
                            <img src={ArrowUp} alt="Control direction" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cases.map((c, i) => (
                        <tr key={i}>
                            <td>{c.date}</td>
                            <td>{c.state}</td>
                            <td>{c.city}</td>
                            <td>{c.new_confirmed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
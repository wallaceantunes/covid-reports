import { Doughnut } from 'react-chartjs-2';
import '../../assets/scss/card.scss'
type CardTableProps = {
    cases: Array<any>
}
export function CardChart({cases}: CardTableProps) {
    const totalConfirmed = cases.slice(0,3).reduce((acc, c) => acc + c.new_confirmed, 0)
    const data = {
        datasets: [
          {
            data: cases.slice(0, 3).map((c) => c.new_confirmed),
            backgroundColor: [
              '#2E86AB',
              '#EDAE49',
              '#9649CB',
            ],
            borderWidth: 1,
          },
        ],
    };
    return (
        <section className="card">
            <p className="subtitle">Distribuição de casos de COVID-19</p>
            <div className="div-row">
                <div className="chart">
                    <Doughnut
                        type="doughnut"
                        data={data}
                        width={183}
                        height={183}
                        options={{
                            responsive: false,
                            maintainAspectRatio: true,
                        }}
                    />
                </div>
                <div className="info-chart">
                    <ul>
                        {cases.slice(0, 3).map((c, i) => (
                            <li key={i}>
                                <div className="dot" />
                                <div className="content">
                                    <p className="title">{c.city} - { c.new_confirmed }</p>
                                    <p className="subtitle">({((100 * c.new_confirmed) / totalConfirmed).toFixed(2)}%)</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
import { Doughnut } from 'react-chartjs-2';
import '../../assets/scss/card.scss'

export function CardChart() {
    const data = {
        datasets: [
          {
            data: [12, 19, 3],
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
                        <li>
                            <div className="dot" />
                            <div className="content">
                                <p className="title">Cidade 1 - x casos</p>
                                <p className="subtitle">(x%)</p>
                            </div>
                        </li>
                        <li>
                            <div className="dot" />
                            <div className="content">
                                <p className="title">Cidade 1 - x casos</p>
                                <p className="subtitle">(x%)</p>
                            </div>
                        </li>
                        <li>
                            <div className="dot" />
                            <div className="content">
                                <p className="title">Cidade 1 - x casos</p>
                                <p className="subtitle">(x%)</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
import { CardForm } from '../components/contentComponents/CardForm'
import { CardChart } from '../components/contentComponents/CardChart'
import { CardTable } from '../components/contentComponents/CardTable'
import '../assets/scss/content.scss'

export function Content() {
    return (
        <main>
            <p className="title">COVID-19</p>
            <p className="subtitle">Boletins informativos e casos do coronavírus por município por dia</p>
            <CardForm />
            <div className="div-row">
                <CardChart />
                <CardTable />
            </div>
        </main>
    )
}
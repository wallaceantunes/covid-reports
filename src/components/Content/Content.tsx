import React, {useState} from 'react'
import { CardForm } from './CardForm'
import { CardChart } from './CardChart'
import { CardTable } from './CardTable'
import { getCases } from '../../api/covidApi'
import '../../assets/scss/content.scss'

export function Content() {
    const [cases, setCases] = useState([])
    const getForm = async (state: String, date: String) => {
        try {
            if(!state) {
                alert('Selecione um UF')
            }
            if(!date) {
                alert('Selecione uma data')
            }
            const resp = await getCases({state, date})
            
            const cases = resp.data.results
            .filter((c: any) => c.new_confirmed > 0)
            .sort((a: any, b: any) => ((a.new_confirmed < b.new_confirmed) ? 1 : -1))
            setCases(cases)
        } catch (error) {
            alert(error.response || 'erro inesperado')
        }
    }
    return (
        <main>
            <p className="title">COVID-19</p>
            <p className="subtitle">Boletins informativos e casos do coronavírus por município por dia</p>
            <CardForm getForm={getForm}/>
            {cases.length > 0 ? (
                <div className="div-row">
                    <CardChart cases={cases} />
                    <CardTable cases={cases} />
                </div>

            ) : (
                <>
                </>
            )}
        </main>
    )
}
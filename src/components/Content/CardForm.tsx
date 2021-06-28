import React, { useState } from 'react'
import '../../assets/scss/card.scss'

export function CardForm({getForm}: any) {
    const yesterday = new Date(Date.now() - 1 * 86400000 - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]; 
    
    const [state, setState] = useState('')
    const [date, setDate] = useState(yesterday)
    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        getForm(state, date)
        
    }
    return (
        <section className="card">
            <p className="title">Relatório de casos</p>
            <form onSubmit={onSubmit}>
                <div className="div-row">
                    <div className="div-column">
                        <label>UF</label>
                        <select className="form-select" value={state} onChange={(ev) => setState(ev.target.value)}>
                            <option value="">Selecionar</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AM">AM</option>
                            <option value="AP">AP</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MG">MG</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="PR">PR</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="RS">RS</option>
                            <option value="SC">SC</option>
                            <option value="SE">SE</option>
                            <option value="SP">SP</option>
                            <option value="TO">TO</option>
                        </select>
                    </div>
                    <div className="div-column">
                        <label>Data</label>
                        <input
                            type="date"
                            className="form-date"
                            value={date}
                            onChange={(ev) => setDate(ev.target.value)}
                            data-date-format="DD/MM/YYY"
                            max={yesterday}
                        />
                    </div>
                </div>
                <button className="button" type="submit">
                    Mostrar dados
                </button>
            </form>
        </section>
    )
}

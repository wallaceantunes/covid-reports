import axios, {} from 'axios'
type GetCaseParams = {
    state: String, 
    date: String
}
export async function getCases(params: GetCaseParams) {
    return axios.get('https://api.brasil.io/v1/dataset/covid19/caso_full/data',
        {
            headers: {Authorization: `Token ${process.env.REACT_APP_API_TOKEN}`},
            params: {
                state: params.state,
                date: params.date,
                place_type: 'city',
                page_size: 900
            }
        }
    ) 
}
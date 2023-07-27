import axios from 'axios'

//DOCS https://dog.ceo/dog-api/

export const _httpClient =  axios.create({
  baseURL: 'https://dog.ceo/api'
})
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BACKEND_BASE_URL, // url = base url + request url
  timeout: 5000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

export default service

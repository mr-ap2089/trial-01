import axios from 'axios'
import config from '@/config'

export default axios.create({
  baseURL: config.urlApi,
  timeout: 5000,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
import baseAxios from 'axios'

const axios = baseAxios.create({
  baseURL: 'http://' + import.meta.env.VITE_BACKEND_HOST + ':' + import.meta.env.VITE_BACKEND_PORT
})

export default axios

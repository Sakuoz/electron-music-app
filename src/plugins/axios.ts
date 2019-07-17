import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

http.interceptors.request.use(config => config, error => Promise.reject(error))

http.interceptors.response.use(
  function(response) {
    if (response.data.code >= 200 && response.data.code < 300) {
      return response.data
    }
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default http

import axios from 'axios'

const apiBase = axios.create()

// apiBase.interceptors.request.use(config => {
//     return config
// })

export default apiBase
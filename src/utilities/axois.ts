import axios from 'axios'

const axiosInstance = axios.create({
  withCredentials: true
  // Add other default configurations if needed
})

export default axiosInstance

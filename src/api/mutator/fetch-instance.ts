import axios, { AxiosRequestConfig } from 'axios'
import baseConfig from '../../configs/base'

const fetchAxiosInstance = axios.create({
    baseURL: baseConfig.backendDomain,
    headers: {
        'Content-Type': 'application/json'
    }
})

export function fetchInstance(config: AxiosRequestConfig) {
    return fetchAxiosInstance(config)
}

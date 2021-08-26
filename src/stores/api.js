import axios from "axios";
import { url } from '../constants';

axios.defaults.baseURL = url.apiUrl

export async function get(url, config = {}) {
    return await axios.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
    return axios
        .post(url, { ...data }, { ...config })
        .then(response => {
            console.log({ response })
            return response.data
        })
}

export async function postFile(url, data, config = {}) {
    const newConfig = {
        ...config,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const formData = new FormData()
    formData.append('file', data)
    return axios
        .post(url, formData, { ...newConfig })
        .then(response => response.data)
}

export async function puts(url, data, config = {}) {
    return axios
        .put(url, { ...data }, { ...config })
        .then(response => response.data)
}

export async function putFile(url, data, config = {}) {
    const newConfig = {
        ...config,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const formData = new FormData()
    formData.append('file', data)
    return axios
        .put(url, formData, { ...newConfig })
        .then(response => response.data)
}

export async function del(url, config = {}) {
    return await axios
        .delete(url, { ...config })
        .then(response => response.data)
}
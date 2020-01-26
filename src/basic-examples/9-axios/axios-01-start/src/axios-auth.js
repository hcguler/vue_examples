import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://test-c9706.firebaseio.com/vue-auth/qGectrc96k6d1odvJWvC'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance

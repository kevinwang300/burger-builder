import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b18be.firebaseio.com/'
});

export default instance;
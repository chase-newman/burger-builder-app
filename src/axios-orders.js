import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-builder-938fc.firebaseio.com/"
});


export default instance; 
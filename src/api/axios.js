import axios from 'axios';

export default axios.create({
   // This is just a sample url, you should change it to your own url
   baseURL: 'http://localhost:3500',
});

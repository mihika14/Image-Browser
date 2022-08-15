import axios from 'axios';
 
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
    'Client-ID vW1dECa2TzSiU9ZallTQbSxhVX-WPyVQH5XSPTjEOSg'
  }
})
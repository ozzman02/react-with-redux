import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b0ce22e08331fdd00b7a552538ed53e4366e62c06eaf73c38231670368998cd6',
        "Set-Cookie": 'HttpOnly;Secure;SameSite=Strict'
    }
});


import axios from 'axios';

const KEY = 'AIzaSyD-2GgMT5a_xCtrbnoMBAwQZMM1XyRpwl0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


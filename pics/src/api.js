import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID b0ce22e08331fdd00b7a552538ed53e4366e62c06eaf73c38231670368998cd6'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}

export default searchImages;
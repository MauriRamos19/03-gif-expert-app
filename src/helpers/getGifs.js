import axios from 'axios'


export const getGifs = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=B8NkWRocgmOIjs8YuVzfYaOPcZ8LQ2BX&q=${encodeURI(category)}&limit=10`;
        const resp = await axios.get(url);
        const {data} = await resp.data;

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        
        
        return gifs

}

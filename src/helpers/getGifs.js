
   export const getGifs = async (category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=PfabA09oAdppXAfwo77QoGFe0yJk7GN7`;
        const resp = await fetch(url);  
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return{
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,// ? si viene la url se utiliza

            }
        })

        //console.log(gifs);
       return gifs;
        
    }

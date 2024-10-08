
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=5&q=${ encodeURI( category ) }&api_key=EblxJV0nAwKhCuvJtsE7pRU5UulMpLke`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url,
        }
    });

    return gifs;

}

export async function getData() {
    const storage = localStorage.getItem("news")
    // console.log(storage);

    if (storage) {
        return JSON.parse(storage)
    }
    else {
        const apiKey = window.config.key;
        const data = await fetch(`https://newsapi.org/v2/everything?q=news&sortBy=publishedAt&apiKey=${apiKey}`);
// console.log('api',apiKey);

        const result = await data.json()
        if (result)
            
            localStorage.setItem("news", JSON.stringify(result.articles))
        return result.articles

    }
}
const api_key = '38c007f28d5b66f36b9c3cf8d8452a4b'

const api_base = 'https://api.themoviedb.org/3' 

/*
- Originais da Netflix 
- Recomendados for you 
- Em alta (top rated)
- Ação 
- Comédia
- Terror
- Suspense
- Romance 
- Documentários
*/


const basicFeth = async (endpoint) => {
    const req = await fetch(`${api_base}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {

    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais da Netflix',
                itens: await basicFeth(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                itens: await basicFeth(`/trending/all/week?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'top rated',
                title: 'Em alta',
                itens: await basicFeth(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await basicFeth(`/discover/movie?with_genres=28&language=pt-BR&api_key${api_key}`)
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                itens: await basicFeth(`/discover/movie?with_genres=35&language=pt-BR&api_key${api_key}`)
            },
            {
                slug: 'Horror',
                title: 'Terror',
                itens: await basicFeth(`/discover/movie?with_genres=27&language=pt-BR&api_key${api_key}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                itens: await basicFeth(`/discover/movie?with_genres=10749&language=pt-BR&api_key${api_key}`)
            },
            {
                slug: 'Documentary',
                title: 'Documentário',
                itens: await basicFeth(`/discover/movie?with_genres=99&language=pt-BR&api_key${api_key}`)
            },

        ];
    }
}
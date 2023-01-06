import React, { useEffect, useState } from  'react'
import Tmdb from './api/Tmdb'

export default () => {

  const [movieList, setMovieList] = useState([]) 

  useEffect( () => {
    const loadAll = async () => {
      //Pegando a lista TOTAL 
      let list = await Tmdb.getHomeList()
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
    <div className='page'>
      <section className='listas'>
        {movieList.map((item, key) => (
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  )
}
import React from 'react'
import { render } from '@testing-library/react-native'
import MovieCard from '../src/components/MovieCard'

describe('Örnek veri testi:    ', ()=>{
 it('Hata. veri görüntülenemiyor', ()=>{
  const movie = {
   id: "4cf9e571-3e69-4ad4-9be6-638d1828ecb6",
   movie_id: 12149,
   original_title: "Frailty",
   original_language: "en",
   overview: "A man confesses to an FBI agent his family's story of how his religious fanatic father's visions lead to a series of murders to destroy supposed 'demons'.",
   popularity: 16.58,
   poster_path: "https://image.tmdb.org/t/p/original/hER3sVCZ9cZRBO0KNI7NbtiLacn.jpg",
   backdrop_path: "https://image.tmdb.org/t/p/original/vORzDiWl5mxm6nuXQu9h5bhi6rb.jpg",
   release_date: "Sat, 11/17/2001",
   vote_average: 7,
   vote_count: 1037,
   adult: 0,
  }

  const { getByText } = render(
   <MovieCard movie={movie} onPress={()=>{}} />
  )
  expect(getByText('Frailty')).toBeTruthy()
expect(getByText('A man confesses to an FBI agent his family')).toBeTruthy()
}
)
})
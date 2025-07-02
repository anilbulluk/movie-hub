import React from 'react'
import { render } from '@testing-library/react-native'
import MovieCard from '../src/components/MovieCard'

describe('Örnek veri testi:    ', ()=>{
 it('Hata. veri görüntülenemiyor', ()=>{
  const movie = {
            "id": "b84a67f9-bee9-4262-bf01-bf8a8db8761f",
            "movie_id": 35320,
            "original_title": "School of Life",
            "original_language": "en",
            "overview": "At Fallbrook Middle School, the annual student-elected Teacher of the Year award is held. And every year for the last 43 years Norman Warner or most fondly called Stormin' Norman Warner has won the award. Now that he has died, the burden of carrying the legacy falls into the hands of Matt Warner, the son of the late Norman Warner who has always lived in the shadow of his father.",
            "popularity": 8.43,
            "poster_path": "https://image.tmdb.org/t/p/original/6v3lhMJLKQEsIpQRM56pU0FMwzW.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original/pYuTVQCfjv2YvpZ1jjsFKvjx7fe.jpg",
            "release_date": "Sat, 02/19/2005",
            "vote_average": 6.4,
            "vote_count": 126,
            "adult": 0,
  }

  const { getByText } = render(
   <MovieCard movie={movie} onPress={()=>{}} />
  )
  expect(getByText('School of Life')).toBeTruthy()
expect(getByText('At Fallbrook Middle School')).toBeTruthy()
}
)
})
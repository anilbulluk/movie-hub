import { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {loadMovies} from '../store/moviesSlice'

export default function useFetchMovies(){
 const dispatch= useDispatch()
 const {movies, page, totalPages, loading, error}= useSelector(state=> state.movies)

 useEffect(()=>{dispatch(loadMovies({ page, query }))},[page])

 return {movies, page, loading, totalPages, error}
}
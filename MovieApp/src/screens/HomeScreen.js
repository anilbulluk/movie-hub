import React, { useCallback, useEffect } from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../store/moviesSlice';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 16px;
`;
export default function HomeScreen({ navigation }){
  const dispatch = useDispatch();
  const {movies, loading, page, totalPages} = useSelector(state=> state.movies);
  useEffect(() => {
    dispatch(loadMovies({page:1}));
  }, [dispatch]);

  const handleRefresh = useCallback(()=> {
    dispatch(loadMovies({page:1}));
  }, [dispatch]);

  const handleLoadMore = ()=> {
    if (!loading && page < totalPages) {
      dispatch(loadMovies({page:page+1}));
    }
  }
  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={item=> item.id.toString()}
        renderItem={({ item })=> (
          <MovieCard
            movie={item}
            onPress={()=> navigation.navigate('MovieDetail', {movie: item})}
          />
        )}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={handleRefresh} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={!loading ? <Text>Film bulunamadi</Text> : null}
      />
    </Container>
)}

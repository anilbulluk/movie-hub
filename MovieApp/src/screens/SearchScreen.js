import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../utils/api';

const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 16px;
`
const SearchRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;
`
const SearchInput = styled.TextInput`
  flex: 1;
  border: 1px solid #bbb;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`
export default function SearchScreen({navigation }) {
  const [value, setValue] = useState('');
  const [searched, setSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async()=>{
    if (value.trim() === '') {
      setSearchResults([])
      setSearched(false)
      return
    }
    setLoading(true)
    const res = await fetchMovies(1, value)
    setSearchResults(res.movies)
    setLoading(false)
    setSearched(true)
}
  return(
    <Container>
      <SearchRow>
        <SearchInput
          placeholder="Film adı gir..."
          value={value}
          onChangeText={setValue}
          onSubmitEditing={onSearch}
          returnKeyType="search"/>
        <TouchableOpacity onPress={onSearch} style={{ marginLeft: 8 }}>
          <Icon name="search" size={28} color="#0080ff" />
        </TouchableOpacity>
      </SearchRow>
      {searched && (
        <FlatList
          data={searchResults}
          keyExtractor={item=> item.id}
          renderItem={({item}) => (
            <MovieCard
              movie={item}
              onPress={()=> navigation.navigate('MovieDetail', {movie: item})}/>
          )}
          refreshing={loading}
          onRefresh={onSearch}
          ListEmptyComponent={<View style={{ marginTop: 40, alignItems: 'center'}}><Text>Film bulunamadi</Text></View>
        }
        />
      )}
    </Container>
)
}
import React from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

const Container = styled.View`
 flex: 1;
 background: #fff;
 padding:16px;
`

const Title = styled.Text`
 font-size:22px;
 font-weight:bold;
 margin-bottom: 10px;
`

export default function ProfileScreen(props){
 const favorites = useSelector(s=>s.favorites)
 
  return(
   <Container>
    <Title>Favori Filmlerim</Title>
    <FlatList
     data={favorites}
     keyExtractor={item=>item.id?.toString()}
     renderItem={({item})=>(
      <MovieCard
       movie={item}
       onPress={()=>props.navigation.navigate('MovieDetail',{movie:item})}
      />
     )}
    />
   </Container>
  )
}
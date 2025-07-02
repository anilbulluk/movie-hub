import React from 'react'
import {TouchableOpacity, Image}
from 'react-native'
import styled from 'styled-components/native'

const Card = styled.View`
 background: #fafafa;
 margin-bottom:12px;
 padding:12px;
 border-radius:10px;
 flex-direction: row;
 align-items:center;
 elevation:2;
`
const Info=styled.View`
 flex:1;
  margin-left:12px;
  `
const Title=styled.Text`
font-size:18px;
 font-weight:bold;
`
const Desc=styled.Text`
 font-size:13px;
 color:#666;
 `
export default function MovieCard({movie, onPress}){
   return(
<TouchableOpacity onPress={onPress}>
 <Card>
  <Image
   source={{uri:movie.poster}}
   style={{width:60,height:90,borderRadius:8}}
   />
  <Info>
    <Title>{movie.title} ({movie.year})</Title>
     <Desc numberOfLines={2}>{movie.description}</Desc>
  </Info>
 </Card>
</TouchableOpacity>
)}
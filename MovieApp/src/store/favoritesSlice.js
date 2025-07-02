import {createSlice} from '@reduxjs/toolkit'


const favoritesSlice = createSlice({
 name: 'favorites',
 initialState: [],
 reducers: {
  addFavorite: (state,action)=>{
   let exist = state.find(x=>x.id==action.payload.id)
   if(!exist){
    state.push(action.payload)
   }
  },
  removeFavorite: (state, action)=>{
    return state.filter(x=>x.id!==action.payload)
  }
 }
})

export const {addFavorite,removeFavorite}=favoritesSlice.actions
export default favoritesSlice.reducer
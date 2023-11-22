import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
  name : 'user',
  initialState : {name: 'kim', count : 1},
})
 
let cart = createSlice({
  name: 'cart',
  initialState:[
    { id: 1, name: '기네스와퍼', src: "/images/기네스와퍼.png",  count:1},
    { id: 2, name: '몬스터와퍼', src: "/images/몬스터와퍼.png", count:1},
    
  ],
  reducers:{
    addCount(state,action){
      state[action.payload].count++
    },
    // addItem(state, action){
    //   state.push(action.payload)
    // },    
  }
})


let premium = createSlice({
  name: 'premium',
  initialState:[
    { id: 1, name: '기네스와퍼', src: "/images/기네스와퍼.png",  count:1},
    { id: 2, name: '몬스터와퍼', src: "/images/몬스터와퍼.png", count:1},
    { id: 3, name: '기네스콰트로치즈와퍼', src: "/images/기네스콰트로치즈와퍼.png", count:1},
    { id: 4, name: '몬스터x', src: "/images/몬스터x.png", count:1},
    { id: 5, name: '통새우와퍼', src: "/images/통새우와퍼.png", count:1},
    
  ],
  
    
  
})
let new_product = createSlice({
  name: 'new_product',
  initialState:[
    { id: 1, name: '콰트로 맥시멈4', src: "/images/콰트로맥시멈.png",  count:1},
    { id: 2, name: '스모크바비큐몬스터', src: "/images/스모크바비큐몬스터.png", count:1},
    { id: 3, name: '스모크바비큐와퍼', src: "/images/스모크바비큐와퍼.png", count:1},
    { id: 4, name: '스모키바비큐', src: "/images/스모키바비큐.png", count:1},
    { id: 5, name: '치킨킹BLT', src: "/images/치킨킹BLT.png", count:1},
    
  ],
 
})

export default configureStore({
  reducer: {
    user : user.reducer,
    premium : premium.reducer,
    new_product : new_product.reducer,
    cart : cart.reducer
  }
})

export let { addCount , addItem} = cart.actions  
import { createSlice } from '@reduxjs/toolkit'

const initialState = 0;
const counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
        inc : (state,action)=>{


            return state+1
        },

            dec: (state,action)=>{

                return state-1
            }
        }
  
});

export const {inc,dec} = counterslice.actions

export default counterslice.reducer
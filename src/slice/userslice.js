import { createSlice } from '@reduxjs/toolkit'

const initialState = {

        data:[],
        error:{},
        isLoading:false
}

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UserRequest: (state,action)=>{

            state.isLoading = true;
    },
    UserSuc: (state,action)=>{

        state.isLoading = false;
        state.data = action.payload;
},
UserError: (state,action)=>{

    state.isLoading = false;
    state.error = action.payload;
}

  }
});

export const {UserRequest,UserSuc,UserError} = userslice.actions

export default userslice.reducer
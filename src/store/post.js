import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (args, { dispatch, getState }) => {
      //thunkApi: { dispatch, getState }
      //getState gives us access to "all" the state in the store
      //we can use the dispatch to 'dispatch' another action
      // const { posts } = getState();
      // console.log(posts);
        return fetch(
            `https://jsonplaceholder.typicode.com/posts`
        ).then(res => res.json());
      //.then(() => dispatch(something else...))
    }
  );

const initialState = {
    isLoading:false,
    data: [],
    error: {}

}

const post = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder)=>{

    builder.addCase(getPosts.pending,(state,action)=>{

      state.isLoading =true

    });

    builder.addCase(getPosts.fulfilled,(state,action)=>{

      state.data =action.payload

    })

    builder.addCase(getPosts.rejected,(state,action)=>{

      state.error =action.payload

    })

    
  }
});



export default post.reducer
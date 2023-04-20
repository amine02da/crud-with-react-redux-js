import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name:"posts",

    initialState:{
        posts:[]
    },

    reducers:{
        addPost:(state, action) =>
        {
            state.posts.push(action.payload)
        },
        deletePost:(state, action ) => 
        {
            state.posts = state.posts.filter(post => post.id  != action.payload.id)
        }

    }
})

export const  {addPost, deletePost} = postsSlice.actions

export default postsSlice.reducer
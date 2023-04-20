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
        },
        updatePost:(state, action) =>
        {
            state.posts.map(item => {
                if(item.id == action.payload.id){
                    item.title = action.payload.title
                    item.Description = action.payload.Description
                    item.Color = action.payload.Color
                }
            })
        }

    }
})

export const  {addPost, deletePost, updatePost} = postsSlice.actions

export default postsSlice.reducer
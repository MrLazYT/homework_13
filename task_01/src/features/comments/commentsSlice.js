import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: nanoid(),
        author: "John Doe",
        content: "",
        postId: "",
    },
];

export const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: initialState,
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
    By creating this async thunk, three properties are added.

    - fetchUsers.pending    === 'users/fetch/pending'
    - fetchUsers.fulfilled  === 'users/fetch/fulfilled'
    - fetchUsers.rejected   === 'users/fetch/rejected'

    These are going to be action types that we need to use inside the slice.
    Specifically, in the extraReducers when using the builder.add case method.
*/
const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    await pause(1000);
    
    /* 
        response.data is going to be assigned to the payload property of the fulfilled action type  

        When the request fails, an error object is created and we will have an error property.
    */
    return response.data;
});

/* Not recommended for production, dev and test only */
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export { fetchUsers };
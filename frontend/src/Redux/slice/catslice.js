import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//actions
export const fetchdata = createAsyncThunk("fetchdata", async () => {
    const response = await fetch("https://catclickerapi.onrender.com/fetchcats")
    return response.json()
})



const catSlice = createSlice({
    name: "catclicker",
    initialState: {
        isLoading: false,
        data: null,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchdata.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchdata.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchdata.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true;
        })
       
    }
})

export default catSlice.reducer;
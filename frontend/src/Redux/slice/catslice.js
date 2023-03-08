import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//actions
export const fetchdata = createAsyncThunk("fetchdata", async () => {
    const response = await fetch("http://localhost:5000/fetchcats")
    return response.json()
})
export const updateclicks = createAsyncThunk("updateclicks", async (id, clicks) => {
 console.log("updateclikcs",clicks)
    const response = await fetch(`http://localhost:5000/updatecat/${id}`, {
        method: 'PUT',
        mode: 'cors',

        headers: {
            'Content-Type': "application/json",

        },

        body: JSON.stringify({ clicks})
    })
    return response.json()
})
export const addData = createAsyncThunk("addData", async (catdata) => {
    const formData = new FormData();

    formData.append('catname', catdata.catname);
    formData.append('nickname', catdata.nickname);
    formData.append('clicks', catdata.clicks);
    formData.append('image', catdata.image);
    console.log(catdata, "data is fetched properly")
    const response = await fetch("http://localhost:5000/addcat", {
        method: "POST",
        body: formData,
    });
    return response.json()
})

const catSlice = createSlice({
    name: "catclicker",
    initialState: {
        isLoading: false,
        data: null,
        error: false,
        addedcat: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchdata.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchdata.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.addedcat = state.data[state.data.length - 1]
        })
        builder.addCase(fetchdata.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true;
        })
        builder.addCase(addData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(addData.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.addedcat=action.payload;
        })
        builder.addCase(addData.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true;
        })
        builder.addCase(updateclicks.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateclicks.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.addedcat=action.payload;
        })
        builder.addCase(updateclicks.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true;
        })
    }
})

export default catSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadSearchUsers = createAsyncThunk(
  "search/loadSearchUsers",
  async (username) => {
    const data = axios.get(`https://api.github.com/users/${username}`);
    return data;
  }
);

export const deleteSearch = {
  type: "search/deleteSearch",
};

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    userData: {},
    isSearching: false,
    searchError: false,
  },
  reducers: {
    deleteSearch: (state) => {
      state.userData = {};
      state.isSearching = false;
      state.searchError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSearchUsers.pending, (state) => {
        state.isSearching = true;
        state.searchError = false;
      })
      .addCase(loadSearchUsers.fulfilled, (state, action) => {
        state.isSearching = false;
        state.searchError = false;
        state.userData = action.payload.data;
      })
      .addCase(loadSearchUsers.rejected, (state) => {
        state.userData = {};
        state.isSearching = false;
        state.searchError = true;
      });
  },
});

export const userDataSelect = (state) => state.search.userData;
export const searchErrorSelect = (state) => state.search.searchError;
export const isSearchingSelect = (state) => state.search.isSearching;

export default searchSlice.reducer;

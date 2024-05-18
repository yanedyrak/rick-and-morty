import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type CharacterType = {
  id: number;
  name: string;
  image?: string;
  gender?: string;
};
export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};
export type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};
type FetchType = {
  page: number;
  name: string;
  parameter: string;
};

export const fetchItem = createAsyncThunk(
  "item/fetchItem",
  async ({ page, name, parameter }: FetchType) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/${parameter}?page=${page}&name=${name}`
    );

    return data.results as CharacterType[] | EpisodeType[] | LocationType[];
  }
);
const initialState = {
  items: [] as CharacterType[] | EpisodeType[] | LocationType[],
  page: 1,
  name: "",
  loading: true,
};
const pageSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
      state.page = 1;
      state.name = "";
      state.loading = true;
    },
    addPage: (state) => {
      state.page = state.page + 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchItem.fulfilled,
      (
        state,
        action: PayloadAction<CharacterType[] | EpisodeType[] | LocationType[]>
      ) => {
        state.items = [...state.items, ...action.payload];
        state.loading = false;
      }
    );
  },
});
export const { clear, addPage, setName, setLoading } = pageSlice.actions;
export default pageSlice.reducer;

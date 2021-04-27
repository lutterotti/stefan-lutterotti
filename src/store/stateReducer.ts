import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchCount } from './mockApi';

export const incrementAsync = createAsyncThunk(
  'project/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);


export interface PageState {
  selected_project: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PageState = {
  selected_project: 0,
  status: 'idle',
};

export const pageSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<number>) => {
      state.selected_project = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selected_project = action.payload;
      });
  },
});


export const { update } = pageSlice.actions;

export const selectedProject = (state: RootState) => state.counter.selected_project;

export const projectSelectors = {
  selectedProject
}

export const projectActions = {
  update
}

export default pageSlice.reducer;
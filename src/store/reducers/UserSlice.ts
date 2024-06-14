import { createSlice } from '@reduxjs/toolkit';
import { User } from 'types/auth';

interface UserState {
  user: User;
  pending: boolean;
  finished: boolean;
}

const initialState: UserState = {
  user: null,
  pending: false,
  finished: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user, pending, finished } = action.payload;

      state.user = user;
      state.pending = pending;
      state.finished = finished;
    },

    setAuthPending: (state, action) => {
      state.pending = action.payload;
    },

    setAuthFinished: (state, action) => {
      state.finished = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;

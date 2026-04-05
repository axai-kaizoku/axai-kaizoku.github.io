import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthLoaded: boolean;
  initialLoading: boolean;
  userId: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuthLoaded: false,
  initialLoading: true,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        accessToken: string | null;
        refreshToken: string | null;
        userId?: string;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userId = action?.payload?.userId ?? null;
    },
    setIsAuthLoaded: (state, action) => {
      state.isAuthLoaded = action.payload.isAuthLoaded;
      state.initialLoading = false;
    },
  },
});

export const { setAuth, setIsAuthLoaded } = authSlice.actions;

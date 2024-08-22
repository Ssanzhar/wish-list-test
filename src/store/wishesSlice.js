import { createSlice } from "@reduxjs/toolkit";

const wishesSlice = createSlice({
  name: "wishes",
  initialState: { wishes: [] },
  reducers: {
    addWish(state, action) {
      state.wishes.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteWish(state, action) {
      state.wishes = state.wishes.filter(
        (prev) => prev.id !== action.payload.id
      );
    },
    completeWish(state, action) {
      const completedWish = state.wishes.find(
        (wish) => wish.id === action.payload.id
      );
      completedWish.completed = !completedWish.completed;
    },
  },
});

export const { addWish, deleteWish, completeWish } = wishesSlice.actions;

export default wishesSlice.reducer;

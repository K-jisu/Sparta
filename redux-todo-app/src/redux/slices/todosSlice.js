import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "react 를 배워봅시다.",
  },
  {
    id: 2,
    title: "redux 를 배워봅시다.",
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addtodo } = todosSlice.actions;
export default todosSlice.reducer;

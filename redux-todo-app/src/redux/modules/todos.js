const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

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

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;

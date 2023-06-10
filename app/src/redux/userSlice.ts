import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type StatusState = {
//   value: number;
// };

const initialState = {
  user: {
    name: 'John Doe',
    age: 25,
  },
}
//  as StatusState;

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
    update: (state, action: PayloadAction<any>) => {
      // state.value += 1;
      state.user = {...state.user, name: action.payload.name, age: action.payload.age}
    }
  },
});

export const {
    resetUser,
    update,
  } = user.actions;
  
export default user.reducer;
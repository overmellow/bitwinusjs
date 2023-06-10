import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from "@/redux/counterSlice";
import { resetUser, update } from "@/redux/userSlice";

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const user = useAppSelector((state) => state.userReducer.user);
  const dispatch = useAppDispatch();
  return (
    <>
    <h2>Home Page</h2>
    <h4>{count}</h4>
    <button onClick={() => dispatch(increment())}>increment</button> &nbsp;
    <button onClick={() => dispatch(decrement())}>decrement</button> &nbsp;
    <button onClick={() => dispatch(incrementByAmount(2))}>increment by 2</button> &nbsp;
    <button onClick={() => dispatch(decrementByAmount(3))}>decrement by 3</button> &nbsp;
    <button onClick={() => dispatch(reset())}>reset</button>

    <h4>{user.age} - {user.name}</h4>
    <button onClick={() => dispatch(resetUser())}>reset user</button> &nbsp;
    <button onClick={() => dispatch(update({name: 'mori', age: 44}))}>update</button> &nbsp;
    </>
    
  )
}

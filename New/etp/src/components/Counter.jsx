import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../redux/store"

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    console.log(count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br />
        </div>
    )
}

export default Counter
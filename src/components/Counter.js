import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter/counterSlice'

function Counter() {
    const [amount, setAmount] = useState(0)
    const countValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>{countValue}</h1>

        <button onClick={() => dispatch(decrement())}>Decrement</button>&nbsp;
        <button onClick={() => dispatch(increment())}>Increment</button>

        <br />
        <br />
        <input type={'number'} value={amount} onChange={(e) => setAmount(e.target.value)} /> 
        <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
    </div>
  )
}

export default Counter
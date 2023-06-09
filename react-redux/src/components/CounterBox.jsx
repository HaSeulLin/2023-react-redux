import React from 'react'

// 리듀서에 있는 값을 꺼내서 사용 : useSelector
// 리듀에서 있는 값을 수정 : useDispatch
import { useDispatch, useSelector } from 'react-redux'

// dispatch에서 사용할 액션 함수
import { change, decrease, increase, reset } from '../modules/counter'

export default function CounterBox() {

    // useSelector로 값 가져오기
    // state는 modules의 index.js에서 작성한 rootReducer
    // state.counter는 rootReducer 안에 객체로 묶인 counter
    // >> counter를 속성 이름으로 사용
    // reducer 함수만 전달해도 useSelector에서 자동으로 state를 뽑아줌
    const counter = useSelector((state)=>(state.counter))
    // console.log(state) // 결과 { counter : 0 }

    const dispatch = useDispatch((state)=>(state.counter))

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <button
            onClick={()=>{dispatch(decrease())}}
        >-1</button>
        <h3>{counter}</h3>
        <button
            onClick={()=>{
                // 값을 수정하기 위해서, dispatch와 액션함수 사용
                // 액션함수는 return 값이 객체인 함수 : reducer에 작성
                // increase()으로 작성해서 실행하는 이유 : return값 전달을 위해
                dispatch(increase())
            }}
        >+1</button>
        <button
            onClick={()=>{dispatch(change(5))}}   
        >+5</button>
        {/** input값 받아서 그만큼 증가하는 버튼 만들기? */}
        <input type="text"
            onChange={(e)=>(dispatch(change(Number(e.target.value))))}
        />
        <button
            onClick={()=>{dispatch(reset())}}
        >RESET</button>
    </div>
  )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeStatus } from '../../features/dialog/dialogSlice'
import { equalStatusAndnextPoint, increment } from '../../features/square/squareSlice'
import { clear } from '../../features/step/stepSlice'

const Square = () => {
  const squareList = useSelector((state) => state.square.list)
  const stepList = useSelector((state) => state.step.list)
  const score = useSelector((state) => state.square.score)
  const dispatch = useDispatch()
  const check = (nextPoint) => {
    if (stepList.every(el => el)) {
      if (nextPoint) {
        alert(`Very good you won and know you have ${score + 1}`)
        dispatch(increment())
        dispatch(equalStatusAndnextPoint())
        dispatch(clear())
      } else {
        dispatch(changeStatus())
        dispatch(equalStatusAndnextPoint())
        dispatch(clear())
      }
    } else {
      alert('please wait for end steps')
    }
  }
  return (
    <div>
      <div className='squareMain'>
        {squareList.map((element, index) =>
          <div key={index} className='squareList'>
            {element.map(el => <div key={el.id} onClick={() => check(el.nextPoint)} className='square'>{el.status && 'Point'}</div>)}
          </div>
        )}
      </div>
    </div>
  )
}

export default Square 
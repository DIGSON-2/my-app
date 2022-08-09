import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Square from './components/Square/Square'
import StartDialog from './components/StartDialog/StartDialog'
import Step from './components/Step/Step'
import { changeNextPoint } from './features/square/squareSlice'
import { add } from './features/step/stepSlice'
import './App.css'

const App = () => {
  const stepList = useSelector(state => state.step.list)
  const squareList = useSelector(state => state.square.list)
  const gameStatus = useSelector(state => state.dialog.status)
  const dispatch = useDispatch()
  useEffect(() => {
    let interval = null
    if (!gameStatus && !stepList.every(el => el)) {
        interval = setInterval(() => {
          const squares = squareList.flat()
          const square = squares.find(e => e.nextPoint)
          const possibleOutcomes = square.possibleOutcomes
          const nextStep = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
          dispatch(changeNextPoint({ id: square.id, value: nextStep }))
          dispatch(add(nextStep))
        }, 1000);
    }
    return () => clearInterval(interval);
  }, [stepList, squareList, dispatch, gameStatus]);
  return (
    <div className='app'>
      <Square />
      <Step />
      <StartDialog />
    </div>
  )
}

export default App
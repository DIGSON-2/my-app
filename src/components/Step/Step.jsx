import React from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineArrowDown,AiOutlineArrowLeft,AiOutlineArrowRight,AiOutlineArrowUp } from 'react-icons/ai';
const Step = () => {
    const stepList = useSelector(state => state.step.list)
    const switchArrow = value => {
        switch (value) {
            case 'left':
                return <AiOutlineArrowLeft className='icon' />
            case 'right':
                return <AiOutlineArrowRight className='icon' />
            case 'down':
                return <AiOutlineArrowDown className='icon' />
            case 'up':
                return <AiOutlineArrowUp className='icon' />
            default:
                return value
        }
    }
    return (
        <div className='stepMain'>
            <div className='stepList'>
                {stepList.map((el, index) => index < 5 && <div key={index} className='step'>{switchArrow(el)} </div>)}
            </div>
            <div className='stepList'>
                {stepList.map((el, index) => index >= 5 && <div key={index} className='step'> {switchArrow(el)} </div>)}
            </div>
        </div>
    )
}

export default Step
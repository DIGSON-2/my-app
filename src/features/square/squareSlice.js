import { createSlice } from '@reduxjs/toolkit'

export const squareSlice = createSlice({
    name: 'square',
    initialState: {
        list: [[
            {
                id: 1,
                status: true,
                nextPoint: true,
                possibleOutcomes: ['right', 'down']
            },
            {
                id: 2,
                status: false,
                nextPoint: false,
                possibleOutcomes: ['left', 'right', 'down']
            },
            {
                id: 3,
                status: false,
                nextPoint: false,
                possibleOutcomes: ['left', 'down']
            }
        ], [
            {
                id: 4,
                status: false,
                nextPoint: false,
                possibleOutcomes: ['right', 'down', 'up']
            },
            {
                id: 5,
                status: false,
                nextPoint: false,
                possibleOutcomes: ['left', 'right', 'down', 'up']
            },
            {
                id: 6,
                status: false,
                nextPoint: false,
                possibleOutcomes: ['left', 'down', 'up']
            }
        ],
        [
            {
                id: 7,
                status: false,
                nextPoint: false,
                possibleOutcomes: ['right', 'up']
            },
            {
                id: 8,
                status: false,
                nextPoint: false,
                possibleOutcomes: ['right', 'left', 'up']
            },
            {
                id: 9,
                status: false,
                nextPoint: false,
                possibleOutcomes: ['left', 'up']
            },
        ]
        ],
        score: 0
    },
    reducers: {
        changeNextPoint: (state, action) => {
            switch (action.payload.value) {
                case 'left':
                    state.list = state.list.map(el => el.map(element => {
                        if (element.id === (action.payload.id - 1)) return { ...element, nextPoint: true }
                        else return { ...element, nextPoint: false }
                    }))
                    break;
                case 'right':
                    state.list = state.list.map(el => el.map(element => {
                        if (element.id === (action.payload.id + 1)) return { ...element, nextPoint: true }
                        else return { ...element, nextPoint: false }
                    }))
                    break;
                case 'down':
                    state.list = state.list.map(el => el.map(element => {
                        if (element.id === (action.payload.id + 3)) return { ...element, nextPoint: true }
                        else return { ...element, nextPoint: false }
                    }))
                    break;
                case 'up':
                    state.list = state.list.map(el => el.map(element => {
                        if (element.id === (action.payload.id - 3)) return { ...element, nextPoint: true }
                        else return { ...element, nextPoint: false }
                    }))
                    break;
                default: 
                    console.log('this is a bug')
            }
        },
        equalStatusAndnextPoint: state => {
            state.list = state.list.map(el => el.map(element => {
                if (element.nextPoint) return { ...element, status: true }
                else return { ...element, status: false }
            }))
        },
        increment: state => {
            state.score += 1
        },
        clearScore: state => {
            state.score = 0
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeNextPoint, equalStatusAndnextPoint, increment, clearScore } = squareSlice.actions

export default squareSlice.reducer
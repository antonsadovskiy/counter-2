type SetMinAsCountActionType = ReturnType<typeof setMinAsCountAC>
type IncCounterActionType = ReturnType<typeof incCounterAC>
type ResetCounterActionType = ReturnType<typeof resetCounterAC>
export type ActionsType = SetMinAsCountActionType | IncCounterActionType | ResetCounterActionType

export type CounterStateType = {
    counter: number
}

const initialState: CounterStateType = {
    counter: 0
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "SET-MIN-AS-COUNT":
            return {...state, counter: action.payload.value}
        case "INC-COUNTER":
            return {...state, counter: state.counter + 1}
        case "RESET-COUNTER":
            return {...state, counter: action.payload.value}
        default:
            return state
    }
}

export const setMinAsCountAC = (value: number) => {
    return ({
        type: 'SET-MIN-AS-COUNT',
        payload: {
            value
        }
    }) as const
}
export const incCounterAC = () => {
    return ({
        type: 'INC-COUNTER',
    }) as const
}
export const resetCounterAC = (value: number) => {
    return ({
        type: 'RESET-COUNTER',
        payload: {
            value
        }
    }) as const
}
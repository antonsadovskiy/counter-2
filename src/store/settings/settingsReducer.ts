type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
type ChangeMinValueActionType = ReturnType<typeof changeMinValueAC>
export type ActionsType = ChangeMaxValueActionType | ChangeMinValueActionType

export type SettingsStateType = {
    minValue: number
    maxValue: number
}

const initialState: SettingsStateType = {
    minValue: 0,
    maxValue: 5
}

export const settingsReducer = (state: SettingsStateType = initialState, action: ActionsType): SettingsStateType => {
    switch (action.type) {
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: action.payload.maxValue}
        case "CHANGE-MIN-VALUE":
            return {...state, minValue: action.payload.minValue}
        default:
            return state
    }
}

export const changeMaxValueAC = (maxValue: number) => {
    return ({
        type: 'CHANGE-MAX-VALUE',
        payload: {
            maxValue
        }
    }) as const
}
export const changeMinValueAC = (minValue: number) => {
    return ({
        type: 'CHANGE-MIN-VALUE',
        payload: {
            minValue
        }
    }) as const
}
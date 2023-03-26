import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {changeMaxValueAC, changeMinValueAC, SettingsStateType} from "./store/settings/settingsReducer";
import {CounterStateType, incCounterAC, resetCounterAC, setMinAsCountAC} from "./store/counter/counterReducer";

export type InputErrorType = {
    min: boolean
    max: boolean
}

function App() {

    const dispatch = useDispatch()
    const settings = useSelector<AppStateType, SettingsStateType>(state => state.settings)
    const counter = useSelector<AppStateType, CounterStateType>(state => state.counter)

    const [isSetButtonNotClicked, setIsSetButtonNotClicked] = useState<boolean>(true)
    const [inputError, setInputError] = useState<InputErrorType>({
        min: false,
        max: false
    })

    const disableIncButton = counter.counter === settings.maxValue
    const disableResetButton = counter.counter === settings.minValue
    const disableSetButton = settings.minValue === settings.maxValue ||
        settings.minValue < 0 || settings.maxValue <= 0 ||
        settings.minValue > settings.maxValue

    // useEffect(() => {
    //     const isSetButtonNotClicked = localStorage.getItem('isSetButtonNotClicked')
    //     if (isSetButtonNotClicked) {
    //         setIsSetButtonNotClicked(JSON.parse(isSetButtonNotClicked))
    //     }
    //     const maxValue = localStorage.getItem('maxValue')
    //     if (maxValue) {
    //         setMaxValue(JSON.parse(maxValue))
    //     }
    //     const startValue = localStorage.getItem('startValue')
    //     if (startValue) {
    //         setStartValue(JSON.parse(startValue))
    //     }
    //     const count = localStorage.getItem('countValue')
    //     if (count) {
    //         setCount(JSON.parse(count))
    //     }
    //     const inputError = localStorage.getItem('inputError')
    //     if (inputError) {
    //         setInputError(JSON.parse(inputError))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('isSetButtonNotClicked', JSON.stringify(isSetButtonNotClicked))
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    //     localStorage.setItem('countValue', JSON.stringify(count))
    //     localStorage.setItem('inputError', JSON.stringify(inputError))
    // }, [isSetButtonNotClicked, maxValue, startValue, count, inputError])

    const incCounter = () => {
        dispatch(incCounterAC())
    }
    const resetCounter = () => {
        dispatch(resetCounterAC(settings.minValue))
    }

    const changeMaxValue = (value: number) => {
        dispatch(changeMaxValueAC(value))
    }
    const changeStartValue = (value: number) => {
        dispatch(changeMinValueAC(value))
    }
    const changeSetButtonIsNotClicked = () => {
        setIsSetButtonNotClicked(false)
    }

    const backToSettings = () => {
        setIsSetButtonNotClicked(true)
    }
    const setStartValueAsCount = () => {
        dispatch(setMinAsCountAC(settings.minValue))
    }

    return (
        <div className="App">
            {isSetButtonNotClicked
                ? <Settings maxValue={settings.maxValue}
                          changeMaxValue={changeMaxValue}
                          startValue={settings.minValue}
                          changeStartValue={changeStartValue}
                          isSetButtonNotClicked={isSetButtonNotClicked}
                          changeSetButtonIsNotClicked={changeSetButtonIsNotClicked}
                          setStartValueAsCount={setStartValueAsCount}
                          inputError={inputError}
                          setInputError={setInputError}
                          disableSetButton={disableSetButton}/>
                : <Counter count={counter.counter}
                         incCounter={incCounter}
                         resetCounter={resetCounter}
                         disableIncButton={disableIncButton}
                         disableResetButton={disableResetButton}
                         backToSettings={backToSettings}/>
            }
        </div>
    );
}

export default App;

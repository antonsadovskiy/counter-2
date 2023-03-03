import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

export type InputErrorType = {
    min: boolean
    max: boolean
}

function App() {

    const [isSetButtonNotClicked, setIsSetButtonNotClicked] = useState<boolean>(true)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [inputError, setInputError] = useState<InputErrorType>({
        min: false,
        max: false
    })

    const disableIncButton = count === maxValue
    const disableResetButton = count === startValue
    const disableSetButton = startValue === maxValue || startValue < 0 || maxValue <= 0 || startValue > maxValue

    useEffect(() => {
        const isSetButtonNotClicked = localStorage.getItem('isSetButtonNotClicked')
        if (isSetButtonNotClicked) {
            setIsSetButtonNotClicked(JSON.parse(isSetButtonNotClicked))
        }
        const maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            setMaxValue(JSON.parse(maxValue))
        }
        const startValue = localStorage.getItem('startValue')
        if (startValue) {
            setStartValue(JSON.parse(startValue))
        }
        const count = localStorage.getItem('countValue')
        if (count) {
            setCount(JSON.parse(count))
        }
        const inputError = localStorage.getItem('inputError')
        if (inputError) {
            setInputError(JSON.parse(inputError))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('isSetButtonNotClicked', JSON.stringify(isSetButtonNotClicked))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('countValue', JSON.stringify(count))
        localStorage.setItem('inputError', JSON.stringify(inputError))
    }, [isSetButtonNotClicked, maxValue, startValue, count, inputError])

    const incCounter = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const resetCounter = () => {
        setCount(startValue)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
    }
    const changeStartValue = (value: number) => {
        setStartValue(value)
    }
    const changeSetButtonIsNotClicked = () => {
        setIsSetButtonNotClicked(false)
    }

    const backToSettings = () => {
        setIsSetButtonNotClicked(true)
    }
    const setStartValueAsCount = () => {
        setCount(startValue)
    }

    return (
        <div className="App">
            {isSetButtonNotClicked ?
                <Settings maxValue={maxValue}
                          changeMaxValue={changeMaxValue}
                          startValue={startValue}
                          changeStartValue={changeStartValue}
                          isSetButtonNotClicked={isSetButtonNotClicked}
                          changeSetButtonIsNotClicked={changeSetButtonIsNotClicked}
                          setStartValueAsCount={setStartValueAsCount}
                          inputError={inputError}
                          setInputError={setInputError}
                          disableSetButton={disableSetButton}/> :
                <Counter count={count}
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

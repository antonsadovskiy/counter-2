import React, {ChangeEvent, FC} from 'react';
import {InputErrorType} from "../../../App";
import s from './StartValueInput.module.css'

type StartValueInputPropsType = {
    startValue: number
    changeStartValue: (value: number) => void
    maxValue: number
    inputError: InputErrorType
    setInputError: (error: InputErrorType) => void
}

const StartValueInput:FC<StartValueInputPropsType> = (
    {
        startValue,
        changeStartValue,
        maxValue,
        inputError,
        setInputError,
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const start = Number(e.currentTarget.value)
        defineError(start, maxValue)
        changeStartValue(start)
    }

    const defineError = (start: number, max: number) => {
        if (start > max){
            setInputError({...inputError, min: true, max: false})
        } else if (start === max){
            setInputError({...inputError, min: true, max: true})
        } else if (start < 0){
            setInputError({...inputError, min: true, max: false})
        } else {
            setInputError({...inputError, min: false, max: false})
        }
    }

    const inputClass = s.input + (inputError.min? ' ' + s.errorInput : '')

    return (
        <div>
            <h3>start value: </h3>
            <input className={inputClass} type="number" value={startValue} onChange={onChangeHandler}/>
        </div>
    );
};

export default StartValueInput;
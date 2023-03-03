import React, {ChangeEvent, FC} from 'react';
import {InputErrorType} from "../../../App";
import s from "../StartValueInput/StartValueInput.module.css";

type MaxValueInputPropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    inputError: InputErrorType
    setInputError: (error: InputErrorType) => void
}

const MaxValueInput:FC<MaxValueInputPropsType> = (
    {
        maxValue,
        changeMaxValue,
        startValue,
        inputError,
        setInputError,
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const max = Number(e.currentTarget.value)
        defineError(max, startValue)
        changeMaxValue(max)
    }

    const defineError = (max: number, start: number) => {
        if (max < start){
            setInputError({...inputError, max: true, min: false})
        } else if (start === max){
            setInputError({...inputError, max: true, min: true})
        } else if (max <= 0){
            setInputError({...inputError, max: true, min: false})
        } else {
            setInputError({...inputError, max: false, min: false})
        }
    }

    const inputClass = s.input + (inputError.max? ' ' + s.errorInput : '')

    return (
        <div>
            <h3>max value: </h3>
            <input className={inputClass} type="number" value={maxValue} onChange={onChangeHandler}/>
        </div>
    );
};

export default MaxValueInput;
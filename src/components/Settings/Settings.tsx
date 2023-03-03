import React, {FC} from 'react';
import MaxValueInput from "./MaxValueInput/MaxValueInput";
import StartValueInput from "./StartValueInput/StartValueInput";
import Button from "../Button/Button";
import s from './Settings.module.css'
import {InputErrorType} from "../../App";

type SettingsPropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    changeStartValue: (value: number) => void
    isSetButtonNotClicked: boolean
    changeSetButtonIsNotClicked: () => void
    setStartValueAsCount: () => void
    inputError: InputErrorType
    setInputError: (error: InputErrorType) => void
    disableSetButton: boolean
}

const Settings:FC<SettingsPropsType> = (
    {
        maxValue,
        changeMaxValue,
        startValue,
        changeStartValue,
        changeSetButtonIsNotClicked,
        setStartValueAsCount,
        inputError,
        setInputError,
        disableSetButton
    }
) => {

    const SetValueAsStart = () => {
        changeSetButtonIsNotClicked()
        setStartValueAsCount()
    }

    return (
        <div className={s.settingsCounter}>
            <MaxValueInput maxValue={maxValue}
                           changeMaxValue={changeMaxValue}
                           startValue={startValue}
                           inputError={inputError}
                           setInputError={setInputError}/>
            <StartValueInput startValue={startValue}
                             changeStartValue={changeStartValue}
                             maxValue={maxValue}
                             inputError={inputError}
                             setInputError={setInputError}/>
            <Button name={'set'} callback={SetValueAsStart} disableSetButton={disableSetButton}/>
        </div>
    );
};

export default Settings;